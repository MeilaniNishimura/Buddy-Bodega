import { createContext, useState, useEffect } from 'react';
import { getFirestore, getDocs, collection, doc, getDoc } from '@firebase/firestore';

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [lostPosts, setLostPosts] = useState([])
    const [foundPosts, setFoundPosts] = useState([])
    const [adoptPosts, setAdoptPosts] = useState([])
    const db = getFirestore()

    useEffect(() => {
        const getAdoptPosts = async() => {
          const collectionRef = collection(db, 'adoptPost')
          const collectionSnap = await getDocs(collectionRef)

          let postsArr3 = []

          collectionSnap.forEach((docSnap) => {
            postsArr3.push({
                ...docSnap.data(),
                id: docSnap.id
                
            })
            setAdoptPosts(postsArr3)
          })

          console.log(postsArr3)
          
          
        }
        getAdoptPosts()
    }, [])


    useEffect(() => {
        const getfoundPosts = async() => {
          const collectionRef = collection(db, 'foundPost')
          const collectionSnap = await getDocs(collectionRef)

          let postsArr2 = []

          collectionSnap.forEach((docSnap) => {
            postsArr2.push({
                ...docSnap.data(),
                id: docSnap.id
                
            })
            setFoundPosts(postsArr2)
          })

          console.log(postsArr2)
          
          
        }
        getfoundPosts()
    }, [])


    useEffect(() => {
        const getlostPosts = async() => {
          const collectionRef = collection(db, 'lostPost')
          const collectionSnap = await getDocs(collectionRef)

          let postsArr = []

          collectionSnap.forEach((docSnap) => {
            postsArr.push({
                ...docSnap.data(),
                id: docSnap.id
                
            })
            setLostPosts(postsArr)
          })

          console.log(postsArr)
          
          
        }
        getlostPosts()
    }, [])
    console.log({lostPosts})




   
   
        const getSinglelostPost = async (id) => {
        const docRef = doc(db, 'lostPosts', id )
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: docSnap.id
            }
        } else {
            console.log('The document did not exist.')
        }
    }
    
    const values = {
        lostPosts,
        getSinglelostPost,
        foundPosts,
        adoptPosts
        
    }
    
    return (
        <DataContext.Provider value= {values}>
            { props.children } 
        </DataContext.Provider>
    )
}


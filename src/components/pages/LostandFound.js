import React from 'react'
import '../../App.css'
import Post from '../LostPost'
import { DataContext } from '../../contexts/DataProvider'
import { useContext } from 'react'
import '../LostandFound.css'
import FoundPost from '../FoundPost'

export default function LostandFound() {
    const {lostPosts}= useContext(DataContext)
    const {foundPosts}= useContext(DataContext)
    return (
        <>
       <div className='lostandFound'> 
    <h1>Lost & Found</h1>
    <p> Our top priority at Buddy Bodega is reuniting missing pets with their owners. Please browse our lost pets section and see if you recognize any of these precious buddies! </p>
      </div>
      <h1 className= 'title'>LOST</h1>
        <Post post={lostPosts[0]} /> 
        <Post post={lostPosts[1]} />
        <Post post={lostPosts[2]} />
        <Post post={lostPosts[3]} />
        <h1 className= 'subtitle'>FOUND</h1>
        <FoundPost post={foundPosts[0]}/>
        <FoundPost post={foundPosts[1]}/>
        <FoundPost post={foundPosts[2]}/>
        <FoundPost post={foundPosts[3]}/>
      </>
      
    
    )
}
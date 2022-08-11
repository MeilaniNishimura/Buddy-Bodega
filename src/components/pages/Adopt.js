import React from 'react'
import '../../App.css'
import AdoptPost from '../AdoptPost'
import { DataContext } from '../../contexts/DataProvider'
import { useContext } from 'react'

export default function Adopt() {
    const {adoptPosts}= useContext(DataContext)
    return (
        <>
       <div className='adopt'> 
    <h1>ADOPT</h1>
    <p> Browse this page to find animals up for adoption. If you have a furry friend you would like to feature on this page, submit the form below and help them find their fur-ever home.</p>
      </div>
       <AdoptPost post={adoptPosts[0]} /> 
       <AdoptPost post={adoptPosts[1]} />
       <AdoptPost post={adoptPosts[2]} />
       <AdoptPost post={adoptPosts[3]} />
       </>
    
    )
}
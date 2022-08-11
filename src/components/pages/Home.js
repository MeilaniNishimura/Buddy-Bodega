import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import { DataContext } from '../../contexts/DataProvider';
import Post from '../LostPost';
import { useContext } from 'react';

/*  goes in function above return - const { posts } = useContext(DataContext) */


export default function Home() {
    const {lostPosts}= useContext(DataContext)
    console.log('home', lostPosts)
    return (
        <>
        <HeroSection />
        <Cards />
        <Post post={lostPosts[0]} /> 
        <Post post={lostPosts[1]} />
        <Post post={lostPosts[2]} />
        <Post post={lostPosts[3]} />
        </>
    );
}
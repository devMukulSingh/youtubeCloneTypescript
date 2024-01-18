"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import TrendingVideoCard from '@/components/trendingPage/TrendingVideoCard'
import { getTrendingVideos } from '../redux/reducers/geTrendingVideos'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const page = () => {

    const dispatch = useAppDispatch();

    const type = useAppSelector( state => state.youtubeApp.trendingType);
    const trendingVideos = useAppSelector( state => state.youtubeApp.trendingVideos);
    console.log(trendingVideos);
    
    useEffect( () => {
        dispatch(getTrendingVideos(type));
    },[type]);


  return (
    <main>
        <header className='flex gap-4'>
            <Image src={"https://www.youtube.com/img/trending/avatar/trending.png"} 
             alt='trendingImg' height={200} width={200}
             className='rounded-full'/>
             <h1 className='text-xl'> Trending </h1>
        </header> 

        <TrendingVideoCard/>
        <TrendingVideoCard/>
        <TrendingVideoCard/>
        <TrendingVideoCard/>
        <TrendingVideoCard/>


    </main>
  )
}

export default page
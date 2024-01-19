"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import TrendingVideoCard from '@/components/trendingPage/TrendingVideoCard'
import { getTrendingVideos } from '../redux/reducers/geTrendingVideos'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { IhomePageVideos } from '@/types'
import Loader from '@/components/commons/Loader'

const page = () => {

    const dispatch = useAppDispatch();

    const type = useAppSelector( state => state.youtubeApp.trendingType);
    const trendingVideos:IhomePageVideos[] = useAppSelector( state => state.youtubeApp.trendingVideos);
    const trendingVideosLoading = useAppSelector( state => state.youtubeApp.trendingVideosLoading);
    console.log(trendingVideos);
    
    useEffect( () => {
        dispatch(getTrendingVideos(type));
    },[type]);


  return (
    <main className='w-full h-full'>
        <header className='flex gap-2 items-center'>
            <Image src={"https://www.youtube.com/img/trending/avatar/trending.png"} 
             alt='trendingImg' height={80} width={80}
             className='rounded-full'/>
             <h1 className='text-3xl font-bold'> Trending </h1>
        </header> 
        <section className='flex flex-col gap-4 mt-4'>
      {
        trendingVideosLoading ? <Loader/> :
        trendingVideos.map ( (video :IhomePageVideos)  => {
          if(!video?.thumbnail?.[1]?.url) return;
          return(
            <TrendingVideoCard video = {video} key={video?.videoId}/>
            )
          })
        }
      </section>
    </main>
  )
}

export default page
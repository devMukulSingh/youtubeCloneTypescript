"use client"
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHomePageVideos } from '../../redux/reducers/getHomePageVideos';
import HomeVideoCard from "./HomeVideoCard";
import { IHomePageVideos} from "../../../types";

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect ( () => {
      dispatch(getHomePageVideos(false));
    },[]);

    const videos  = useAppSelector(state => state.videos);
    // console.log(videos);
    

  return (
    <>
        <main className='flex flex-col gap-2 p-4'>
          <section className='grid grid-cols-3 gap-6'>
            {
              videos && videos?.map( (video:IHomePageVideos,index) => {
                return <HomeVideoCard video ={video} key={index}/>
              })
            }
  
          </section>
        </main>
    </>
  )
}

export default HomePage
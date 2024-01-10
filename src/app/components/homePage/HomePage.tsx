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
    const sidebar = useAppSelector( state => state.sidebar);
    // console.log(videos);
    

  return (
    <>
        <main className={` grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  p-4 ${!sidebar ?'px-20 xl:grid-cols-4 lg:grid-cols-3' : ''} `}>
            {
              videos && videos?.map( (video:IHomePageVideos,index) => {
                return <HomeVideoCard video ={video} key={index}/>
              })
            }

        </main>
    </>
  )
}

export default HomePage
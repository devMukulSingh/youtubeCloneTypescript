"use client"
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHomePageVideos } from '../../redux/reducers/getHomePageVideos';
import HomeVideoCard from "./HomeVideoCard";
import { IhomePageVideos} from "../../../types";
import InfiniteScroll from "react-infinite-scroll-component"
import Loader from '../commons/Loader';

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect ( () => {
      dispatch(getHomePageVideos(false));
    },[]);

    const videos  = useAppSelector(state => state.youtubeApp.homePageVideos);
    const sidebar = useAppSelector( state => state.youtubeApp.sidebar);
    const loading = useAppSelector(state => state.youtubeApp.loading);
    //using loading is causing to rerender again ? why?
    console.log(videos);
    

  return (
    <>
        <main className={` ${!sidebar ? 'px-20' : 'p-4'}`} >
            {
              (videos.length === 0) ?  <Loader/>
              :
              <InfiniteScroll
                dataLength={videos.length}
                next={ () => dispatch(getHomePageVideos(true))} 
                loader = {<>loading...</>}
                hasMore={ (videos.length < 200)}
                endMessage={ <>No more videos</>}
                >

                <div className={`mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  ${!sidebar ?' xl:grid-cols-4 lg:grid-cols-3' : ''} `}>
                  { 
                     videos?.map( (video:IhomePageVideos,index:number) => {
                      if(!video.thumbnail?.[1]?.url || video.type !== 'video' ) return;
                    return <HomeVideoCard video ={video} key={index}/>
                  })
                  }
                </div>
               </InfiniteScroll>
            }

        </main>
    </>
  )
}

export default HomePage
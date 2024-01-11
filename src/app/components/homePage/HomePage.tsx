"use client"
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHomePageVideos } from '../../redux/reducers/getHomePageVideos';
import HomeVideoCard from "./HomeVideoCard";
import { IHomePageVideos} from "../../../types";
import { FaTruckLoading } from 'react-icons/fa';
import InfiniteScroll from "react-infinite-scroll-component"

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect ( () => {
      dispatch(getHomePageVideos(false));
    },[]);

    const videos  = useAppSelector(state => state.youtubeApp.videos);
    const sidebar = useAppSelector( state => state.youtubeApp.sidebar);
    console.log(videos);
    

  return (
    <>
        <main className={`${!sidebar ? 'px-20' : 'p-4'}`} >
            {
              videos.length == 0 ? <>Loading <FaTruckLoading/></>
              :
              <InfiniteScroll
                dataLength={videos?.length}
                next={ () => dispatch(getHomePageVideos(true))}
                loader = { <>Loading...</>}
                hasMore={ videos.length < 400}
                >

                <div className={` grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  ${!sidebar ?' xl:grid-cols-4 lg:grid-cols-3' : ''} `}>
                  { 
                     videos?.map( (video:IHomePageVideos,index:number) => {
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
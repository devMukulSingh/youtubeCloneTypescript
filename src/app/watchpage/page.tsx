'use client'
import React, { useEffect } from 'react';
import PlayerSection from '@/components/watchPage/PlayerSection';
import RelatedVideosSection from '@/components/watchPage/RelatedVideosSection';
import Sidebar from '@/components/commons/Sidebar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSidebar } from '../redux';


const WatchPage = ( {searchParams} : { searchParams : { videoId:string, channelId:string } } ) => {
  
  const dispatch = useAppDispatch();
  const { videoId, channelId } = searchParams;
  const sidebar = useAppSelector(state => state.youtubeApp.sidebar);
  const loading = useAppSelector( state => state.youtubeApp.loading);
  console.log(loading);
  
  useEffect ( () => {
    if( sidebar ) setSidebar();
  },[])

  return (
    <>
      <main className='flex max-w-[100vw] w-full h-full'>

        <section>
          <Sidebar/>
        </section>

          {/* // loading ? <>loading...</>  : => this was causing infinite rerender ? why */}
        <section className={`w-full h-full px-6 sm:px-24 flex gap-4 justify-between ${sidebar ? 'opacity-30' : ''} `}>
            <div className='max-w-[70rem] h-[70vh]'>
                <PlayerSection/>
              </div>
              <div className='w-[calc(100vw - 92rem)] flex ml-auto'>
                <RelatedVideosSection/> 
              </div>
        </section>

      </main>
    </>
  )
}

export default WatchPage
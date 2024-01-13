'use client'
import React, { useEffect } from 'react';
import PlayerSection from '@/app/components/watchPage/PlayerSection';
import RelatedVideosSection from '@/app/components/watchPage/RelatedVideosSection';
import Sidebar from '../components/commons/Sidebar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSidebar } from '../redux';


const page = ( {searchParams} : { searchParams : { videoId:string, channelId:string } } ) => {
  
  const dispatch = useAppDispatch();
  const { videoId, channelId } = searchParams;
  const sidebar = useAppSelector(state => state.youtubeApp.sidebar);
  const loading = useAppSelector( state => state.youtubeApp.loading);
  console.log(loading);
  

  return (
    <>
      <main className='flex max-w-[100vw]'>

        <section>
          <Sidebar/>
        </section>

        <section className={`px-6 sm:px-24 md:flex gap-4  ${sidebar ? 'opacity-30' : ''} `}>
          {  
            // loading ? <>loading...</>  :
              <>
                <div className='max-w-[70rem]'>
                  <PlayerSection/>
                </div>
                <div className='w-[calc(100vw - 92rem)]'>
                  <RelatedVideosSection/> 
                </div>
              </>
              
              }

        </section>

      </main>
    </>
  )
}

export default page
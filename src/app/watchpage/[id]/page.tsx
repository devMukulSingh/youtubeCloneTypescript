'use client'
import React, { useEffect } from 'react';
import PlayerSection from '@/app/components/watchPage/PlayerSection';
import RelatedVideosSection from '@/app/components/watchPage/RelatedVideosSection';


const page = ( {searchParams} : { searchParams : { videoId:string, channelId:string } } ) => {
    
  const { videoId, channelId } = searchParams;


  return (
    <>
 
      <main className=' flex gap-4 '>
        <section className='w-[120rem]'>
          <PlayerSection/>
        </section>
        <section className=''>
          <RelatedVideosSection/>
        </section>
 
      </main>
    </>
  )
}

export default page
'use client'
import React, { useEffect } from 'react';
import PlayerSection from '@/app/components/PlayerSection';
import RecommendedSection from '@/app/components/RecommendedSection';


const page = ( {searchParams} : { searchParams : { videoId:string, channelId:string } } ) => {
    
  const { videoId, channelId } = searchParams;


  return (
    <>
 
      <main className=' w-[calc(100vw-17rem)] flex'>
        <PlayerSection/>
        <RecommendedSection/>
 
      </main>
    </>
  )
}

export default page
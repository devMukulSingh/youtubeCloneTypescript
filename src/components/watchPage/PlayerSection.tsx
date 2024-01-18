'use client'
import React from 'react'
import VideoDetailsSection from './VideoDetailsSection'
import CommentsSection from './CommentsSection'
import { useAppSelector } from '@/app/redux/hooks'

const PlayerSection = () => {
  return (
    <>

      <main className=' flex flex-col gap-4 '>  
          <VideoDetailsSection/>
          <CommentsSection/>
      </main>
    
    </>
  )
}

export default PlayerSection
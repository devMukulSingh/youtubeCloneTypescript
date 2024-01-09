'use client'
import React from 'react'
import VideoDetailsSection from './VideoDetailsSection'
import CommentsSection from './CommentsSection'

const PlayerSection = () => {
  return (
    <main className=' flex flex-col gap-4 w-full'>  
 
        <VideoDetailsSection/>
        <CommentsSection/>
 
    </main>
  )
}

export default PlayerSection
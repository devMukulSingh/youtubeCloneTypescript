import { IHomePageVideos } from '@/types'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
const abbreviate = require("number-abbreviate");

const RelatedVideoComp = ( {video} : { video : IHomePageVideos}) => {
  return (
    <Link href={{
      pathname:`/watchpage/${video?.videoId}`,
      query: { channelId : video?.channelId, videoId: video?.videoId}

    }}>
      <main className='flex gap-2 items-start w-full'>
          <figure className='min-w-[15rem] min-h-[10rem] relative flex flex-0.4'>
              <Image 
              src={ video?.thumbnail[1]?.url} 
              alt="thumbnail" fill
              
              className=' object-contain rounded-md object-top'/>
          </figure>  
          <section className='flex flex-col flex-0.6 gap-2'>
              <h1 className='line-clamp-2'>{video?.title}</h1>
              <h1 className='line-clamp-1 text-slate-500 text-sm'>{video?.channelTitle}</h1>
              <h1 className='text-slate-500 text-sm'>{abbreviate(video?.viewCount).toString().toUpperCase()} views . {video?.publishedText}</h1>
          </section> 
      </main>
    </Link>
  )
}

export default RelatedVideoComp
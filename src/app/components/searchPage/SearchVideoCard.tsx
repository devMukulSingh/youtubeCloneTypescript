import { IHomePageVideos } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const abbreviate = require("number-abbreviate");

const SearchVideoCard = ( { video } : { video:IHomePageVideos} ) => {
  
  return (

      <Link href={{
        pathname:`/watchpage`,
        query : { videoId:video?.videoId, channelId : video?.channelId}, 
      }}>
        <main className='flex gap-7 '>

              <figure className='w-[26rem] h-[16rem] relative' >
                <Image src={video?.thumbnail?.[0]?.url} fill alt="thumbnail" className='rounded-lg'/>
              </figure>

              <section className='flex flex-col gap-3'>
                <h1 className='text-xl font-medium'>{video?.title}</h1>
                <h1 className='text-sm text-slate-500'>
                  {abbreviate(video?.viewCount).toString().toUpperCase()} views .  { video?.publishedText} 
                </h1>
                <figure className='flex gap-3 items-center'>
                  <Image src={video?.channelThumbnail?.[0]?.url} alt="channelThumbnail" width={40} height={40} className='rounded-full'/>
                  <h1 className='text-slate-500'>{video?.channelTitle}</h1>
                </figure>
                <h1 className='text-slate-500 text-sm '>{video?.description}</h1>

              </section>
                
        </main>
      </Link>
  )
}

export default SearchVideoCard
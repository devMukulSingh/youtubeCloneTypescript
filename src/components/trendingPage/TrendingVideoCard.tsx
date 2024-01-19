import Image from 'next/image'
import React, { useEffect } from 'react';
import { IhomePageVideos } from "@/types";
import Link from 'next/link';
const abbreviate = require("number-abbreviate");

const TrendingVideoCard = ( {video} : { video : IhomePageVideos} ) => {
  console.log(video);
  
  return (
    <Link
      href={{
        pathname:`/watchpage`,
        query : { videoId : video?.videoId, channelId : video?.channelId }
      }}
    >
      <main className='flex gap-3 w-[calc(100vw-25rem)]'>
        <figure className='relative min-w-80 h-48'>
          <Image src={video?.thumbnail?.[1]?.url} fill alt='thumbnail' className='rounded-lg '/>
        </figure>
        <section className='flex flex-col gap-4'>
          <h1>{video?.title}</h1>
          <span className='text-slate-500 text-sm flex gap-5 break-all'>
            <p>{video?.channelTitle}</p>
            <p>{abbreviate(video?.viewCount,1)} views </p>
            <p>{video?.publishedTimeText}</p>
            </span>
            <p className='text-slate-500 text-sm line-clamp-3 break-normal'>
              {video?.description}
              </p>
        </section>
      </main>
    </Link>
  )
}

export default TrendingVideoCard
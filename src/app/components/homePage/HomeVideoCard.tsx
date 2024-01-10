import React from 'react';
import Image from "next/image";
import  {IHomePageVideos } from "../../../types";
const abbreviate = require("number-abbreviate");
import Link from 'next/link';
import { useAppSelector } from '@/app/redux/hooks';


const HomeVideoCard = ({video} : {video:IHomePageVideos}) => {

    const sidebar = useAppSelector( state => state.sidebar);
 
  return (
    <Link href = {{
        pathname:`/watchpage`,
        query :{ channelId: video?.channelId, videoId: video?.videoId }
    }}>
      <main className={`${ sidebar ? 'h-[22rem] ' : '' } cursor-pointer`}>


            <figure className={`relative ${sidebar ? ' h-[15rem]' : ' h-[14rem]'}`}>
                <Image 
                    className='rounded-md cursor-pointer'
                    src={video?.thumbnail[1]?.url}
                    fill alt="thumbnail" />
                <span className='absolute text-sm right-3 bottom-2 bg-black text-white rounded-lg px-2 cursor-pointer'>
                   {video?.lengthText}
                </span>
            </figure>

            <div className='flex gap-2'>
                <figure className='h-full '>
                    <Image 
                        src={video?.channelThumbnail[0]?.url}
                        height={50} width={50} alt='channelUrl' className='rounded-full cursor-pointer mt-3'
                        >
                    </Image>
                </figure>

                <section className=' flex flex-col gap-1 w-full p-3'>
                    <h1 className='text-xl line-clamp-2 break-words'>
                        {video?.title}
                    </h1>
                    <h1 className='text-md text-slate-500 line-clamp-2'>
                        {video?.channelTitle}
                    </h1>
                    <h1 className='text-md text-slate-500'>
                       { abbreviate(video?.viewCount,1).toString().toUpperCase() } views . {video?.publishedText}
                    </h1>
                </section>
            </div>
        </main>
     </Link>

  )
}

export default HomeVideoCard
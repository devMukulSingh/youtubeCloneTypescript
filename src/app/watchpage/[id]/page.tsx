'use client'
import React, { useEffect } from 'react';
import { useRouter, useSearchParams, usePathname, useParams } from 'next/navigation';
import ReactPlayer from 'react-player';
import { IHomePageVideos, Iparams } from '@/types';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import Image from 'next/image';
import { getChannelData } from '@/app/redux/reducers/getChannelData';


const page = ( {params} : { params: Iparams } , {searchParams} : { searchParams : string } ) => {
    
    const { id } = params;
    const { channelId} = useParams();
    console.log(channelId);
    
    const dispatch = useAppDispatch();
    const URL = `https://www.youtube.com/watch?v=${id}`;
    
    const videoData:IHomePageVideos = useAppSelector(state => state.videos).filter( video => video.videoId === id);
    // console.log(videoData);
    useEffect( () => {
      if(videoData){
        console.log(videoData.channelId);
        dispatch( getChannelData(videoData?.channelId));
      }
      
    },[id])

    

  return (
    <>
 
      <main className='h-[90vh] w-[100vw-15rem]'>

        <section className='h-[35rem] w-[60rem]'>
          <ReactPlayer url={URL} width='100%' height='100%' className="rounded-md" />
        </section>

        <footer>
          <h1>{videoData?.title}</h1>
          <section className='flex '>
              {/* <Image src={ videoData?.channelThumbnail?[0]?.url } alt='channelThumbnail' height={50} width={50} /> */}
              <div>
                <h1 className=''>{ videoData?.channelTitle}</h1>
                <h1> subscribers</h1>
              </div>
          </section>
          <section>

          </section>
          <section>

          </section>
        </footer>
      </main>
    </>
  )
}

export default page
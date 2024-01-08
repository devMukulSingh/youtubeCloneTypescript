'use client'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import Image from 'next/image';
import avatar from "../../../public/avatar.png";
import { getChannelData } from '../redux/reducers/getChannelData';
import { IHomePageVideos, IchannelData } from '@/types';
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { useSearchParams } from 'next/navigation';

const VideoDetailsSection = ( ) => {

  const abbreviate = require("number-abbreviate");
  const searchParams = useSearchParams();
  const videoId = searchParams.get('videoId')
  const dispatch = useAppDispatch();
  
  const videoData : IHomePageVideos[] = useAppSelector(state => state.videos).filter( video => video.videoId === videoId);
  const channelData : IchannelData = useAppSelector( state => state.channelData);
  
  useEffect( () => {
    dispatch(getChannelData(videoData[0]?.channelId));
  },[videoId]);
  
  const URL = `https://www.youtube.com/watch?v=${videoId}`;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (

    <main className='flex flex-col gap-4'>

      {/* ////////////////////////videoPlayer/////////////////////// */}
      <div className=' h-[35rem] w-[60rem]'>
          <ReactPlayer url={URL} width='100%' height='100%' />
      </div>
      {/* ////////////////////////videoPlayer/////////////////////// */}

           {/* /////////////////videoDetails /////////////////////// */}
        <section className='flex flex-col gap-3'>
          
          <h1 className='text-xl font-medium'>{videoData[0]?.title}</h1>
            
            {/* ///////////////ChannelDetails////////////////////// */}
          <div className='flex gap-3 items-center justify-between'>

            <div className='flex gap-5 cursor-pointer items-center'>
              {/* <Image 
                  src={ channelData?.thumbnail[1]?.url } 
                  alt='channelThumbnail' 
                  height={50} width={50} 
                  className="rounded-full"/> */}
               <Image src={avatar} alt='chh' height={40} width={50} className='rounded-full' />
              <div>
                <h1 className=''>{ channelData?.title}</h1>
                <h1 className='text-sm text-slate-500'>{channelData?.subscriberCount} subscribers</h1>
              </div>
                  <button className='bg-slate-200 px-3 py-2 rounded-full h-10 '>Subscribe</button>
            </div>

              <div className='flex gap-3'>
                <button className='flex gap-2 items-center bg-slate-200  px-3 py-2 rounded-full'>
                  <AiOutlineLike className="text-xl"/>
                  Like
                </button>
                <button className='flex gap-2 items-center bg-slate-200  px-3 py-2 rounded-full'>
                  <FaShare className="text-xl"/>
                  Share
                  </button>
                <button className='flex gap-2 items-center bg-slate-200  px-3 py-2 rounded-full'>
                  <RiDownloadLine className="text-xl"/>
                  Download
                </button>
              </div>
          </div>
            {/* ///////////////ChannelDetails////////////////////// */}

            {/* /////////////////video /DESCRIPTIONS////////////////// */}

            <div className='w-full bg-slate-200 rounded-lg p-3'>
                <h1 >
                    {abbreviate(videoData[0]?.viewCount,1)?.toString()?.toUpperCase()} views {videoData[0]?.publishedText}
                </h1>
                <h1 className='line-clamp-3'>
                    {videoData[0]?.description}
                </h1>
            </div>
            {/* /////////////////video /DESCRIPTIONS////////////////// */}

        </section>
           {/* /////////////////videoDetails /////////////////////// */}

      
 
    </main>

  )
}

export default VideoDetailsSection
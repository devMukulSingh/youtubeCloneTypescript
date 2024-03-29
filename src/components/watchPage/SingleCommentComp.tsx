import Image from 'next/image'
import React from 'react';
import avatar from "../../../public/avatar.png";
import { IcommentsData } from '@/types';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
const abbreviate = require("number-abbreviate");

export const SingleCommentComp = ( {commentData} : { commentData : IcommentsData }) => {
  // console.log(commentData);
  
    
  return (
    <>
    <main className='flex mt-6 items-center'>

      <div className='flex gap-3 '>
        <figure className='object-cover'>
          <Image src={ commentData?.authorThumbnail?.[0]?.url } 
                alt='profilePicture' width={40} height={40}
                className='rounded-full  cursor-pointer' />
        </figure>

        <section className='flex flex-col gap-2 '>
          <div className='flex gap-3 items-center'>
            <h1>{commentData?.authorText}</h1>
            <h1 className='text-slate-500 text-sm'>{commentData?.publishedTimeText}</h1>
          </div>
          <div>
            <h1 className='break-all'>{commentData?.textDisplay}</h1>
          </div>
          <div className='flex gap-1 items-center'>
              <AiOutlineLike className = "text-2xl cursor-pointer"/>
              {abbreviate(commentData?.likesCount,1)}
              <AiOutlineDislike className = "ml-4 text-2xl cursor-pointer"/>
          </div>

        </section>

      </div>
    </main>
    <hr className='mt-4'/>
    </>
  )
}

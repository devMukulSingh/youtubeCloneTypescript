'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import avatar from "../../../public/avatar.png";
import { SingleCommentComp } from './SingleCommentComp';
import { getCommentsData } from '../redux/reducers/getCommentsData';
import { useAppDispatch } from '../redux/hooks';
import { useSearchParams } from 'next/navigation';

const CommentsSection = () => {

        const dispatch = useAppDispatch();
        const searchParams = useSearchParams();
        const videoId = searchParams.get('videoId');
        console.log(videoId);
        

        useEffect( () => {
            dispatch(getCommentsData(videoId));
        },[videoId]);

  return (
    <main className=''>
 
          <header className=' flex gap-8'>
                <h1 className='text-xl font-bold'>18 Comments</h1>
                <h1>Sort By</h1>
            </header>

            <section className='flex gap-4 items-center'>
                <Image src={avatar} alt='profilePicture' height={40} width={40} className='rounded-full'/>
                <input type="text" placeholder='Add a comment...' className='outline-none px-3 py-2 ' />
            </section>     

        <SingleCommentComp/>

    </main>
  )
}

export default CommentsSection
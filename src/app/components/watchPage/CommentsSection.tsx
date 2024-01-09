'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import avatar from "../../../../public/avatar.png";
import { SingleCommentComp } from './SingleCommentComp';
import { getCommentsData } from '../../redux/reducers/getCommentsData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useSearchParams } from 'next/navigation';
import { IcommentsData } from '@/types';

const CommentsSection = () => {

        const dispatch = useAppDispatch();
        const searchParams = useSearchParams();
        const videoId = searchParams.get('videoId');
        const commentsCount = useAppSelector( state => state.commentsCount);
        const commentsData:IcommentsData[] = useAppSelector( state => state.commentsData);

        console.log(commentsData);

        useEffect( () => {
            dispatch(getCommentsData(videoId));
        },[videoId]);

  return (
    <main className='w-full flex flex-col mt-4 gap-1'>
 
          <header className=' flex gap-5'>
                <h1 className='text-xl font-bold'>{commentsCount} Comments</h1>
                <h1>Sort By</h1>
            </header>

            <section className='flex gap-4 items-center'>
                <Image src={avatar} alt='profilePicture' height={40} width={40} className='rounded-full'/>
                <input type="text" placeholder='Add a comment...' className='outline-none px-3 py-2 ' />
                <hr/>
            </section>     
            {
                commentsData && commentsData?.map( (commentData : IcommentsData ,index) => {
                    return <SingleCommentComp commentData={commentData} key={index}/>
                })
            }

    </main>
  )
}

export default CommentsSection
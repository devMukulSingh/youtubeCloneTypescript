'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import avatar from "../../../../public/avatar.png";
import { SingleCommentComp } from './SingleCommentComp';
import { getCommentsData } from '../../redux/reducers/getCommentsData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useSearchParams } from 'next/navigation';
import { IcommentsData } from '@/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { emptyCommentsArray } from '@/app/redux';

const CommentsSection = () => {

        const dispatch = useAppDispatch();
        const searchParams = useSearchParams();
        const videoId = searchParams.get('videoId');
        const commentsCount = useAppSelector( state => state.youtubeApp.commentsCount);
        const commentsData:IcommentsData[] = useAppSelector( state => state.youtubeApp.commentsData);
        // console.log(commentsData);
        

        useEffect( () => {
            dispatch(getCommentsData({isNext:false,videoId}));
            return () => {
                dispatch(emptyCommentsArray());
            }
        },[videoId]);

  return (
    <main className='flex flex-col mt-4 gap-1'>
 
          <header className=' flex gap-5'>
                <h1 className='text-xl font-bold'>{commentsCount} Comments</h1>
                <h1>Sort By</h1>
            </header>

            <section className='flex gap-4 items-center'>
                <Image src={avatar} alt='profilePicture' height={40} width={40} className='rounded-full'/>
                <input type="text" placeholder='Add a comment...' className='outline-none px-3 py-2 ' />
                <hr/>
            </section>  
            <InfiniteScroll
                next={ () => dispatch(getCommentsData({isNext:true,videoId}))}
                hasMore = {commentsData.length < 200 }
                loader = { <>Loading ...</>}
                dataLength={ commentsData.length}
                endMessage = { <>No More Comments</>}

            >
            {
                commentsData && commentsData?.map( (commentData : IcommentsData ,index) => {
                    return <SingleCommentComp commentData={commentData} key={index}/>
                })
            }
            </InfiniteScroll>   

    </main>
  )
}

export default CommentsSection
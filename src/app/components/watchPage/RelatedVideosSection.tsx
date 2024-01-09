import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useSearchParams } from 'next/navigation';
import { getRelatedVideos } from '../../redux/reducers/getRelatedVideos';
import { IHomePageVideos } from '@/types';
import RelatedVideoComp from './RelatedVideoComp';

const RelatedVideosSection = () => {
  
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const videoId = searchParams.get('videoId');

  useEffect( () => {
    dispatch(getRelatedVideos(videoId));
  },[videoId]); 

  const relatedVideos:IHomePageVideos[] = useAppSelector( state => state.relatedVideos);
  console.log(relatedVideos);
  
  return (
    <main className='flex flex-col gap-1 '>
      {
        relatedVideos && relatedVideos.map( (video : IHomePageVideos ,index) => {
          return <RelatedVideoComp video={video} key={index} />
        })
      }
    </main>
  )
}

export default RelatedVideosSection
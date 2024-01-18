import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { useSearchParams } from 'next/navigation';
import { getRelatedVideos } from '@/app/redux/reducers/getRelatedVideos';
import { IrelatedVideos } from '@/types';
import RelatedVideoCard from './RelatedVideoCard';
import Loader from '../commons/Loader';

const RelatedVideosSection = () => {
  
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const videoId = searchParams.get('videoId');

  useEffect( () => {
    dispatch(getRelatedVideos(videoId));
  },[videoId]); 

  const relatedVideos:IrelatedVideos[] = useAppSelector( state => state.youtubeApp.relatedVideos);
  const relatedVideosLoading = useAppSelector( state => state.youtubeApp.relatedVideosLoading);
  const loading = useAppSelector( state => state.youtubeApp.loading)
  
  return (
    <>
        <main>
      {   
          !loading && !relatedVideosLoading &&
            <div className='flex flex-col gap-1 '>
            {
              relatedVideos && relatedVideos.map( (video : IrelatedVideos ,index) => {
                return <RelatedVideoCard video={video} key={index} />
              })
            }
          </div>
        }
      </main>
    </>
  )
}
export default RelatedVideosSection
"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { getSearchData } from '../redux/reducers/getSearchData';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import SearchVideoCard from '../components/searchPage/SearchVideoCard';
import { IHomePageVideos } from '@/types';

const page = () => {

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  
    useEffect( () => {
      dispatch(getSearchData(query));
    },[query]);
    

    const searchVideo:IHomePageVideos[] = useAppSelector(state => state.searchVideos);
    console.log(searchVideo);

  return (
    <>
      <main className='flex flex-col gap-3 mt-4'>
        {
          searchVideo && searchVideo.map( (video:IHomePageVideos,index) => {
            return <SearchVideoCard video={video} key={index}/>
          })

        }
      </main>
    </>
  )
}

export default page
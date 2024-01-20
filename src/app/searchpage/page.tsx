"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { getSearchData } from '../redux/reducers/getSearchData';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import SearchVideoCard from '@/components/searchPage/SearchVideoCard';
import { IhomePageVideos } from '@/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Sidebar from '@/components/commons/Sidebar';
import Loader from '@/components/commons/Loader';

const SearchPage = () => {

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  
    useEffect( () => {
      dispatch(getSearchData({query,isNext:false}));
    },[query]);
    

    const searchVideo:IhomePageVideos[] = useAppSelector(state => state.youtubeApp.searchVideos);

  return (

      <main>
        {
          searchVideo.length === 0 ? <Loader/> :
          <InfiniteScroll
              next={ () => dispatch(getSearchData({query,isNext:true}))}
              hasMore = { searchVideo.length < 300}
              loader = {<>Loading...</>}
              dataLength={ searchVideo.length}
              >
              <div className='flex flex-col gap-3 mt-4'>
                {
                  searchVideo && searchVideo.map( (video:IhomePageVideos,index) => {
                    if(video.thumbnail[0].url.startsWith("/")) return;
                    return <SearchVideoCard video={video} key={index}/>
                  })
                  
                }
              </div>
          </InfiniteScroll>
        }
      </main>
    
     
  )
}

export default SearchPage
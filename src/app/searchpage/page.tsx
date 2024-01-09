"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { getSearchData } from '../redux/reducers/getSearchData';
import { useAppDispatch } from '../redux/hooks';

const page = () => {

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  

    useEffect( () => {
      dispatch(getSearchData(query));
    },[query]);
    
  return (
    <>
      <main>
        searchPage
      </main>
    </>
  )
}

export default page
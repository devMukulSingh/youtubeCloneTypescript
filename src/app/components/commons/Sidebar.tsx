"use client"
import React from 'react';
import { MdHome } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { BiMoviePlay } from "react-icons/bi";
import { IsidebarOptions } from '@/types';
import { getTrendingVideos } from '@/app/redux/reducers/geTrendingVideos';
import { getHomePageVideos } from '@/app/redux/reducers/getHomePageVideos';
import { usePathname, useRouter } from 'next/navigation';
import {debounce} from 'lodash';

const sidebarOptions: IsidebarOptions[] = [
  { name:'Home' ,icon: <MdHome className = "text-3xl cursor-pointer"/>, type:'home' },
  { name: 'Trending', icon:<HiTrendingUp className = "text-3xl cursor-pointer"/>, type:'now'},
  { name: 'Gaming', icon:<SiYoutubegaming className = "text-3xl cursor-pointer"/>, type:'games' },
  { name : 'Movies', icon:<BiMoviePlay className = "text-3xl cursor-pointer"/>, type:'movies' },
  { name : 'Music', icon:<FaMusic className = "text-3xl cursor-pointer"/>, type:'music' }
]

const Sidebar = () => {
  const sidebar = useAppSelector(state => state.youtubeApp.sidebar);
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  const debouncedDispatchHomeVideos = debounce( () => {
      dispatch(getHomePageVideos(false));
  },4000);
  const debouncedDispatchTrendingVideos = debounce ( (type:string) => {
    dispatch( getTrendingVideos(type));
  },4000);

  const handleSidebarOptions = (type: string) => {
    if( type === 'home'){
      if(pathName === '/'){
        debouncedDispatchHomeVideos();
      } 
      else router.push("/");
    }
    else{
      debouncedDispatchTrendingVideos(type);
    }
  }
  return (
    <>
      <main className={`h-[90vh] w-[15rem] z-50 bg-white fixed gap-3 p-4 ${sidebar ? '' : 'hidden' }`}>
          <ul>
            {
              sidebarOptions.map( (option: IsidebarOptions , index:number) =>{
                  return(
                    <li onClick = { () => handleSidebarOptions(option.type) } key={index}
                      className='flex items-center gap-3 cursor-pointer hover:bg-[#F2F2F2] p-3 rounded-md'>
                      {option.icon}
                      {option.name}
                  </li>
                  ) 
              })
            }
          </ul>
          <hr className='font-black]'/>
      </main>
    </>
  )
}

export default Sidebar

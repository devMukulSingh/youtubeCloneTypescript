"use client"
import React from 'react';
import { MdHome } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { useAppSelector } from '@/app/redux/hooks';

const Sidebar = () => {
  const sidebar = useAppSelector(state => state.sidebar);
  return (
    <>
      <main className={`h-[90vh] w-[15rem] z-50 bg-white fixed gap-3 p-4 ${sidebar ? '' : 'hidden' }`}>
          <ul>
            <li className='flex items-center gap-3 cursor-pointer hover:bg-[#F2F2F2] p-3 rounded-md'>
               <MdHome className = "text-3xl cursor-pointer"/>
               Home
            </li>
            <li className='flex items-center gap-3 cursor-pointer hover:bg-[#F2F2F2] p-3 rounded-md'>
               <HiTrendingUp className = "text-3xl cursor-pointer"/>
               Trending
            </li>
            <li className='flex items-center gap-3 cursor-pointer hover:bg-[#F2F2F2] p-3 rounded-md'>
               <SiYoutubegaming className = "text-3xl cursor-pointer"/>
               Gaming
            </li>
            <li className='flex items-center gap-3 cursor-pointer hover:bg-[#F2F2F2] p-3 rounded-md'>
               <FaMusic className = "text-3xl cursor-pointer"/>
               Music
            </li>
          </ul>
          <hr className='font-black]'/>
      </main>
    </>
  )
}

export default Sidebar

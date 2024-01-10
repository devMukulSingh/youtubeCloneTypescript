"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import avatar from "../../../../public/avatar.png";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { useAppDispatch } from '@/app/redux/hooks';
import { setSidebar } from '@/app/redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Header = () => {

    const router = useRouter();
    const dispatch  = useAppDispatch();
    const [query, setQuery] = useState("");

    const handleSidebar = () => {
        dispatch(setSidebar(""));
    }
    
    const onSearchInputChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const handleSearch = () => {
        router.push(`/searchpage?query=${query}`);
    }
    const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==='Enter' && query.length > 0) handleSearch();
    }

  return (
    <>
        <main className='flex justify-between p-4 gap-3 w-screen items-center h-[10vh] z-50 bg-white '>

            <div className='flex gap-3 items-center'>
                <RxHamburgerMenu className = "text-2xl cursor-pointer" onClick={ handleSidebar } />
                <Link href={"/"}>
                    <Image src={logo} alt="logo" height={150} width={150} />
                </Link>
            </div>

            <div className='flex gap-1 h-12 w-[30rem] items-center border-2 rounded-full px-4'>
                <input type="text" 
                className='w-full h-full outline-none'
                onKeyDown={  (e) => handleEnterSearch(e) } 
                onChange = { (e) => onSearchInputChange(e) } placeholder='Search'/>
                <CiSearch className = "text-2xl cursor-pointer" onClick={ handleSearch }/>
            </div>

            <div className='flex gap-6 items-center'>
                <GoDeviceCameraVideo className = "text-3xl cursor-pointer"/>
                <CiBellOn className = "text-3xl cursor-pointer"/>
                <Image src={avatar} alt="avatar" height={40} width={40}  className='cursor-pointer'/>
            </div>  

        </main>
    </>
  )
}

export default Header
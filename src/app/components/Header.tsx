"use client"
import Image from 'next/image';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import avatar from "../../../public/avatar.png";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";

const Header = () => {
    const onSearchInputChange  = () => {

    }
    const handleSearch = () => {

    }

  return (
    <>
        <main className='flex justify-between p-4 gap-3 h-[10vh] w-full'>

            <div className='flex gap-3 items-center'>
                <RxHamburgerMenu className = "text-2xl cursor-pointer" />
                <Image src={logo} alt="logo" height={150} width={150} />
            </div>

            <div className='flex gap-1 h-12 w-[30rem] items-center border-2 rounded-full px-4'>
                <input type="text" className='w-full h-full outline-none' onChange = { onSearchInputChange } placeholder='Search'/>
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
import Image from 'next/image'
import React from 'react';
import avatar from "../../../public/avatar.png";
import { useAppSelector } from '../redux/hooks';

export const SingleCommentComp = () => {

    const commentsData = useAppSelector( state => state.commentsData);
    console.log(commentsData);
    
  return (
    <main className='flex gap-3 items-center'>
        <Image src={avatar } alt='profilePicture' height={40} width={40} className='rounded-full cursor-pointer' />
    </main>
  )
}

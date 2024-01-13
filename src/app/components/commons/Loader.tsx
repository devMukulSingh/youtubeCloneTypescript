import React from 'react'
import { ImSpinner8 } from "react-icons/im";
const Loader = () => {
  return (
    <main className='flex items-center w-full h-full justify-center'>
        <ImSpinner8  className="text-4xl animate-spin"/>
 </main>
  )
}

export default Loader
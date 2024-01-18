import React from 'react'
import { ImSpinner8 } from "react-icons/im";
const Loader = () => {
  return (
    <main className='flex items-center w-[100vw] justify-center'>
        <ImSpinner8  className="text-4xl animate-spin flex items-center justify-center"/>
 </main>
  )
}

export default Loader
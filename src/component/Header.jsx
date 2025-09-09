import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-40 mt-4   '>

        <div className='flex gap-1 '>


    
         <Logo/>

         <h1 className='font-sans font-semibold text-2xl'>PLanKaro</h1>

       
         </div>
    

        <ul className='flex gap-6 font-semibold cursor-pointer'>
        <li className='p-3 hover:bg-gray-100 rounded-xl transition-colors duration-300 ease-in-out' >Discover</li>
        <li  className='p-3 hover:bg-gray-100 rounded-xl transition-colors duration-300 ease-in-out' >Saves</li>
        <li  className='p-3 hover:bg-gray-100 rounded-xl transition-colors duration-300 ease-in-out' >Review</li>
        <li  className='p-3 hover:bg-gray-100 rounded-xl transition-colors duration-300 ease-in-out' >More</li>
        </ul>
     
     <div>
        <h1 className='font-semibold'>INR</h1>
     </div>
   
    </div>
  )
}

export default Header
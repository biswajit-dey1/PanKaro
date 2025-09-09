import React from 'react'
import Header from './Header'
import Hero from './Hero'
import { useHoteldata } from '../hooks/useHoteldata'

const MainContainer = () => {

  useHoteldata()
  return (
    <>
    <div className='relative'>
        <img className='w-screen h-screen opacity-70' src="/hero-img.png" alt="" />
        
        {/* Light skyish gradient overlay - 50% width from left */}
        <div className='absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-sky-100 via-sky-100 to-transparent z-1'></div>
         
         <div className='absolute inset-x-0 top-0 z-9'>
              
           <Header/>
           
        <Hero/>
        

           
         </div>
    </div>

    
</>
  )
}

export default MainContainer
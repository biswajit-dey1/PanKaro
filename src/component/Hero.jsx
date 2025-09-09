import React from 'react'

const Hero = () => {
    return (
        <div className='mt-36 '>

            <div className='ml-[28%] h-16 w-1/2 flex gap-2 items-center mb-5'>

              <input className='w-[80%] rounded-lg bg-gray-200  px-3 py-2 shadow-sm'  type="text" 

              placeholder='Hotel name or destination'
               />

              <button className='text-lg px-7 py-2 cursor-pointer rounded-2xl bg-green-400 text-white shadow-lg hover:shadow-xl transition-shadow duration-300' style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
               Search
                </button>  
            </div>

            <div className='ml-[13%]'>
            <h1 className='font-bold text-7xl'>Plan Your
                <span className='block pt-1'>Trip with Ease</span>
            </h1>

            <p className='text-gray-950 text-lg pt-5'>
              Customize your travel itinerary in minutes—pick your destination, set your preferences and explore with confidence.
            </p>

            

            </div>  
        </div>
    )
}

export default Hero
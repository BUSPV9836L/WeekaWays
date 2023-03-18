import React from 'react'

export const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full justify-center md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold'>Resorts</h3>
        <img className='h-[300px] w-full md:w-[300px] md:h-[300px] object-cover border-4 border-white shadow-lg' src='https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'></img>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl'>Cruiser</h3>
        <img className='h-[300px] w-full md:w-[300px] md:h-[300px] object-cover border-4 border-white shadow-lg ' src='https://images.pexels.com/photos/13865185/pexels-photo-13865185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'></img>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl'>Escrusion</h3>
        <img className='h-[300px] w-full md:w-[300px] md:h-[300px] object-cover border-4 border-white shadow-lg ' src='https://images.pexels.com/photos/3769116/pexels-photo-3769116.jpeg' alt='/'></img>
        </div>
    </div>
  )
}

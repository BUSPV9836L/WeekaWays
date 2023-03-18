import React from 'react'

export const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-gray-gary-700 text-center p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg' alt='/'></img>
            </div>
            <div>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/'></img>
            </div>
            <div>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/'></img>
            </div>
            <div>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/'></img>
            </div>
            <div>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/10185889/pexels-photo-10185889.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/'></img>
            </div> 
        </div>
    </div>
  )
}

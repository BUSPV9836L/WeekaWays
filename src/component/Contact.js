import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='max-w-[1440px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center textt-gray-700 py-2'>We are standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[550px] h-[200px]' src='https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'></img>
            <form>
            <div className='grid grid-cols-2'>
                <input className='border m-2 p-2' type="text" placeholder='First'></input>
                <input className='border m-2 p-2' type="text" placeholder='Last'></input>
                <input className='border m-2 p-2' type="email" placeholder='Email'></input>
                <input className='border m-2 p-2' type="tel" placeholder='Phone'></input>
                <input className='border col-span-2 m-2 p-2'type="text" placeholder='Address'></input>
                <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10'></textarea>
                <button className='col-span-2 m-2 '>Submit</button>
            </div>
        </form>
        </div>
       
    </div>
  )
}

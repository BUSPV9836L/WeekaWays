import React, {useState} from 'react'

import {FaTwitter,
FaGooglePlusG,
FaInstagram,
FaFacebook,
FaBars} from 'react-icons/fa';
export const NavBar = () => {
    const [nav,setNav]=useState(false);

    const hanNav =() =>{
        setNav(!nav);
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='#gallery'>Gallery</a>
            </li>
            <li>
                <a href='#deals'>Deals</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaInstagram className='mx-4'/>
        </div>
        {/* Ha,burger Icons */}
        <div className='sm:hidden z-10'>
            <FaBars onClick={hanNav} className='mr-4 cursor-pointer' size={20}/>
        </div>
        {/* Mobile Menue */}
        <div 
        onClick={hanNav}
         className={nav?'overflow-y-hidden md:hidden ease duration-300 absolute w-full text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex-col':'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
                <a href='/'>Home</a>
            </li>
            <li  className='text-2xl py-8'>
                <a href='#gallery'>Gallery</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#deals'>Deals</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#contact'>Contact</a>
            </li>
            </ul>
        </div>
    </div>
  )
}

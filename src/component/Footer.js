import React from 'react'
import { BsChatSquare } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-6 m-auto border-t-4'>
        <div className='flex iteam-cover m-auto justify-center'>
        <BsChatSquare size={30} className='text-[var(--primary-dark) mr-2]'/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKWAY</h1>
        </div>
    </div>
  )
}

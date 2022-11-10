import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center
    md:flex-row max-w-7xl px-10 md:text-left 
    justify-evenly mx-auto items-center '>
        <h3 className='absolute  top-24 uppercase tracking-[20px] text-gray-500
        text-2xl z-20'>
            Contact
        </h3>
    </div>
  )
}

export default Contact
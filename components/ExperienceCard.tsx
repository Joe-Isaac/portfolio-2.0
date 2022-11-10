import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='
    flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            y : 0,
            opacity: 1
        }}
        viewport={{
            once: true,
        }}

        className='h-32 w-32 rounded-full xl:w-[200px] 
        xl:h-[200px] object-cover object-center'
        src='https://pps.whatsapp.net/v/t61.24694-24/255450040_1288677248293012_5884551306857338988_n.jpg?ccb=11-4&oh=01_AdQZ6xNI6XTETEQfvDKqnEZRpLGe2DOlal2f2lqMmAEjRA&oe=6374BAF7'
        alt=""/>

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>
                Software Developer
            </h4>
            <p className='font-bold text-2xl mt-1'>Dentrice Dev</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg' alt=''/>
                <img className='h-10 w-10 rounded-full' src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg' alt=''/>
                <img className='h-10 w-10 rounded-full' src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg' alt=''/>
                {/* TechUsed */}
            </div>

            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{
        x : 0,
        opacity: 1
    }}
    className='flex flex-col relative h-screen 
    text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x : 0,
            opacity: 1
        }}
        src='https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/90532991_1432960850216906_6111713671656767488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aUAtm36QPbsAX-fONmO&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfBvdkexB2-7bGF6V0qhST-mpiV8fnNlv91nwvWoaV4bkA&oe=638EF6FE'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px]
        xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Quis est placeat hic ad repellendus non explicabo doloribus
                  animi, sint quaerat harum omnis fuga corrupti, ex culpa 
                  delectus magni. Dicta, necessitatibus!
            </p>

        </div>
    </motion.div>
  )
} 

export default About
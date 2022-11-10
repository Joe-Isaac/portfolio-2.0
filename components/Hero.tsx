import React from 'react';
import Link from 'next/link';
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's Joey",
            "I love coffee",
            "But I love coding more",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles/>
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/ways-to-make-coffee-super-healthy-1296x728-feature.jpg?w=1155&h=1528'/>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='gold'/>
        </h1>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>

        </div>
    </div>
  );
}

export default Hero
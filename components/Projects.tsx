import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5];
  return (
    <div
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute  top-24 uppercase tracking-[20px] text-gray-500
        text-2xl z-20'>
        Projects
        </h3>



        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-mandatory snap-x z-20'>
            {
                projects.map(project => (
                    <motion.div
                    initial={{
                        opacity: 0,
                    }}
                
                    transition={{
                        opacity: 1,
                    }}
                
                    whileInView={{
                        opacity: 1,
                        
                    }}
                    className='w-full flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                    
                        transition={{
                            duration: 1.2
                        }}
                    
                        whileInView={{
                            opacity: 1,
                            y:0
                            
                        }}
                        src='https://masvolumenporfavor.com/wp-content/uploads/2022/03/spotify-plataformas-diferentes.jpg' alt=''/>
                        
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                            Case study {project} of {projects.length}
                            </span>
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                            Spotify 2.0 app that has log in and log out feature implemented using
                            nextAuth, next.js, and spotifyApi.
                            It has an attractive screen, a well designed user experience, and was made to
                            emulate the great work done by Spotify
                        </p>
                        </div>
                    </motion.div>
                ))
            }
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
        -skew-y-12 '/>
    </div>
  )
}

export default Projects
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen snap-y 
    snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Joey's Portfolio</title>
      </Head>

      <Header/>

      <section id='hero' className='snap-start' >
      <Hero/>
      </section>


      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="contact" className='="snap-center'>
        <Contact/>
      </section>



    </div>
  )
}

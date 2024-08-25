'use client'
import React from 'react'
import ProjectsCard from '../sub/MissionCards'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
})
const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
  return (
    <motion.div className='flex flex-col items-center justify-center py-20' id='missions'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-500 py-20'>
        Missions
      </h1>
      <motion.div className="h-full w-full flex  md:flex-row gap-10 px-10 flex-wrap justify-center">
        <ProjectsCard
          src="/m1.webp"
          title="NASA’s Boeing Starliner Crew Flight Test Landing"
          
        
        />
        <ProjectsCard
          src="/m2.jpg"
          title="NASA’s SpaceX Crew-9"
          

        />
        <ProjectsCard
          src="/m3.webp"
          title="NASA’s Europa Clipper Mission"
          
        />
        <ProjectsCard
          src="/m4.webp"
          title="NASA’s ASTHROS Mission"
          
        />
        <ProjectsCard
          src="/m5.webp"
          title="CLPS Flight: Intuitive Machines (IM-2)"
          
        />
        <ProjectsCard
          src="/m6.webp"
          title="NASA’s Lunar Trailblazer"
          
        />
        
      </motion.div>
    </motion.div>
  )
}

export default Projects
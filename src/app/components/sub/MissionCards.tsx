'use client'

import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { useInView } from 'react-intersection-observer'

interface props {
    src: string;
    title: string;

}
const ProjectsCard = ({ src, title }: props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 }
        
    }
    const animationDelay = 0.3
    return (
        <motion.div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-96' ref={ref} initial='hidden' variants={imageVariants} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 1.5 }}>
            <Image src={src} alt={title} width={1000} height={1000} className='w-full  max-h-[50%]' />
            <div className="relative p-4">
                <h1 className=' text-lg md:text-2xl font-semibold text-white text-center'>{title}</h1>

            </div>

        </motion.div>
    )
}

export default ProjectsCard
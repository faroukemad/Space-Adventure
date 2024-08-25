'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Encryption = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <motion.div className='flex flex-row justify-center items-center w-full h-full min-h-screen relative' id='documentary' ref={ref} initial='hidden' variants={imageVariants} animate={inView ? 'visible' : 'hidden'}>
            <div className=" absolute  w-auto h-auto z-[5] md:top-0 top-32">
                <motion.div variants={slideInFromLeft(0.5)} className='text-[40px] font-medium text-center text-gray-200'>
                    

                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Documentary </span>
                   
                </motion.div>
            </div>
           
            <motion.div className="w-full flex items-start justify-center absolute "  variants={slideInFromRight(0.5)}>
                <video src='/document.mp4' loop muted playsInline preload='false' autoPlay className='w-3/4 md:h-[500px] h-[300px] md:object-contain object-cover' />
            </motion.div >
        </motion.div >
    )
}

export default Encryption
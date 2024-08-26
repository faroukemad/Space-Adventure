'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
    return (
        <motion.div className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0 justify-center md:px-20 px-10 mt-20 w-full z-[20]' initial='hidden' animate="visible" id='home'>
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

                <motion.div className="flex flex-col gap-6 md:text-6xl text-center md:text-start text-3xl font-bold text-white max-w-[600px] w-auto h-auto" variants={slideInFromLeft(0.5)}>
                    <span>

                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                             Space Exploration 
                        </span>

                    </span>
                </motion.div>
                <motion.p className='text-lg text-gray-400 my-5 max-w-[600px] text-center md:text-start' variants={slideInFromLeft(0.8)}>
                    • As humanity's quest for knowledge extends beyond our planet, space exploration is entering a new era of discovery and innovation.

                </motion.p>
                <motion.a href='#space' variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-auto md:max-w-[200px]'>
                    Learn More
                </motion.a>

            </div>

            <motion.div className="w-full h-full flex justify-center items-center" variants={slideInFromRight(0.8)}>
                <Image src="/astro.png" alt="icons" height={50} width={350} />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
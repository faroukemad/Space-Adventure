'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const SpaceText2 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <motion.div className='w-full h-auto flex flex-col justify-center' ref={ref} initial='hidden' variants={imageVariants} animate={inView ? 'visible' : 'hidden'}>
            <motion.div className="text-[30px] md:text-[50px] md:text-start text-center text-white font-medium mt-[10px]  mn-15px"
                variants={slideInFromLeft(0.5)}>
                Why Go to Space

            </motion.div>
            <motion.div className='text-[15px] md:text-[20px] md:text-start text-center text-gray-200 mb-10 mt-[20px] ' variants={slideInFromRight(0.5)}>
                            Human space exploration helps to address fundamental questions about our place in the universe and the history of our solar system.
            </motion.div>
            <motion.div className='text-[12px] md:text-[15px] md:text-start text-center text-gray-200 mb-10 mt-[10px] ' variants={slideInFromLeft(0.5)}>
             Exploration vision is anchored in providing value for humanity by answering some of the most fundamental questions: Why are we here? How did it all begin? Are we alone? What comes next? 
            </motion.div>
        </motion.div>
    )
}

export default SpaceText2
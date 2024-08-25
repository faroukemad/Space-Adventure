'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const SkillText = () => {
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
                Earth, Moon and Mars
            </motion.div>
            <motion.div className='text-[15px] md:text-[20px] md:text-start text-center text-gray-200 mb-10 mt-[20px] ' variants={slideInFromRight(0.5)}>
                With more than 20 years of operations in low Earth orbit, we are preparing our return to the Moon for long-term exploration and discovery before taking the next giant leap to Mars.
            </motion.div>
            <motion.div className='text-[12px] md:text-[15px] md:text-start text-center text-gray-200 mb-10 mt-[10px] ' variants={slideInFromLeft(0.5)}>
                Never has humanity endeavored to simultaneously architect multinational infrastructures in lunar orbit, on the lunar surface, and at Mars — all while maintaining high-demand government and private-sector operations in low Earth orbit.
            </motion.div>
        </motion.div>
    )
}

export default SkillText
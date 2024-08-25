'use client'

import React from 'react'
import SkillText from '../sub/SpaceText'
import Image from 'next/image'
import SpaceText2 from '../sub/SpaceText2'
import SpaceText3 from '../sub/SpaceText3'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilits/motion'
import { useInView } from 'react-intersection-observer'
const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <div id='space' >
            <section  className='flex flex-col lg:flex-row md:px-20 px-10 lg:max-w-[1500px] items-center justify-center gap-10 h-full relative overflow-hidden pb-20 py-20 '>
                <SkillText />
                <Image src='/space3.jpg' alt='space' width={500} height={500} className='w-full object-contain' />

            </section>
            <section  className='flex flex-col lg:flex-row md:px-20 px-10 lg:max-w-[1500px] items-center justify-center gap-10 h-full relative overflow-hidden pb-20 py-20 '>
                <SpaceText2 />
                <Image src='/space5.jpg' alt='space' width={500} height={500} className='w-full object-contain' />

            </section>
            <section  className='flex flex-col lg:flex-row md:px-20 px-10 lg:max-w-[1500px] items-center justify-center gap-10 h-full relative overflow-hidden pb-80 py-20 '>
                <SpaceText3 />
                <Image src='/space6.jpg' alt='space' width={500} height={500} className='w-full object-contain' />

            </section>
        </div>
    )
}

export default Skills
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './/Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className="w-full h-full flex-row items-center flex  m-auto px-[10px] md:justify-center justify-start">

                <div className="w-[600px] h-full  flex-row items-center justify-between md:flex hidden">
                    <div className=" w-full h-auto flex items-center justify-between   bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <div className="projectsTop">
                            <div onClick={() => window.scrollTo(0, 0)} className='nav-com' data-link-alt="Home">
                                <span className='nav-comp'>Home</span>
                            </div>
                        </div>
                        <div className="projectsTop">
                            <a href='#space' className='nav-com' data-link-alt="Space">
                                <span className='nav-comp'>Space</span>
                            </a>
                        </div>
                        <div className="aboutTop">
                            <a href='#documentary' className='nav-com' data-link-alt="Documentary">
                                <span className='nav-comp'>Documentary</span>
                            </a>
                        </div>
                        <div className="contactTop">
                            <a href='#missions' className='nav-com' data-link-alt="Missions">
                                <span className='nav-comp'>Missions</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-200 focus:outline-none " >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0300145e] rounded-lg mt-2 shadow-lg absolute w-3/4">
                    <div className="flex flex-col items-center space-y-4 p-5 text-gray-200 w-full">
                        <div  className='nav-com' onClick={() => {window.scrollTo(0, 0); toggleMenu();}}>Home</div>
                        <a href='#space' className='nav-com' onClick={toggleMenu}>Space</a>
                        <a href='#documentary' className='nav-com' onClick={toggleMenu}>Documentary</a>
                        <a href='#missions' className='nav-com' onClick={toggleMenu}>Missions</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

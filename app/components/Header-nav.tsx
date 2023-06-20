"use client"

import { Belleza } from 'next/font/google';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"



const belleza = Belleza({ subsets: ['latin'], weight:'400' })

const HeaderNav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const [menu, setMenu] = useState(false);
    return ( 
        <div className='w-full fixed top-0'>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="z-10 flex gap-32 items-center text-white mx-auto max-w-[1080px] h-20">
                    <div className={belleza.className}>   
                        <Link to='hero' className='text-3xl logo'>Rancho Mar-Tita</Link>
                    </div>
                    <div className='md:hidden'>
                        <button className='p-2 white rounded-md outline-none' onClick={() => setMenu(!menu)}>
                            {menu ? (
                                <FaTimes className='close w-[30px] h-[30px] bg-inherit stroke-white'/>
                            ) : (
                                <FaBars className='w-[30px] h-[30px] focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 w-full absolute md:relative left-0 top-72 md:top-0 md:block md:pb-0 md:mt-0 
                    ${menu ? 'block' : 'hidden'}`}>
                        <ul className='menu flex gap-10 pb-10 md:pb-0 pt-10 md:pt-0 items-center md:items-start text-xl md:text-base'>
                            <Link to='hero'>Home</Link>
                            <Link to='reservations' spy={true} smooth={true} offset={-80} duration={500}>Reservaciones</Link>
                            <Link to='events' spy={true} smooth={true} offset={-50} duration={500}>Eventos</Link>
                            <Link to='rooms' spy={true} smooth={true} offset={350} duration={500}>Abitaciones</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default HeaderNav;
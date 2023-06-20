"use client"

import { Belleza } from 'next/font/google';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const belleza = Belleza({ subsets: ['latin'], weight:'400' })

const Footer = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
    }
    return ( 
        <div className="footer">
            <div className='footer-content flex items-center max-w-[1080px] w-full mx-auto justify-between pb-10'>
                <div className="flex flex-col pb-10">
                    <div className={belleza.className}>
                        <Link to='hero' className='text-xl logo'>Rancho Mar-Tita</Link>
                    </div>
                    <p className='text-xs text-grey-400 w-56'>
                        Descripción del hotel. Detalles que los hagan especial
                    </p>
                </div>
                <ul className='flex gap-2 flex-col text-xs'>
                    <Link to='hero'>Home</Link>
                    <Link to='reservations' spy={true} smooth={true} offset={-80} duration={500}>Reservaciones</Link>
                        <Link to='events' spy={true} smooth={true} offset={-50} duration={500}>Eventos</Link>
                        <Link to='rooms' spy={true} smooth={true} offset={350} duration={500}>Abitaciones</Link>
                </ul>
            </div>

            <div className='copyright flex max-w-[1080px] w-full mx-auto justify-between pb-10'>
                <p className='text-xs text-gray-400'>© Logo Hotel 2023. Derechos reservados</p>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='text-xs text-gray-400'>Encuentranos en:</div>
                    <div className='text-xs text-gray-400'><FaFacebookF /></div>
                    <div className='text-xs text-gray-400'><FaInstagram /></div>
                    <div className='text-xs text-gray-400'><FaTwitter /></div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
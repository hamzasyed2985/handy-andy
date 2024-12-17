import { useState } from "react";
import logo from '../assets/logo.png';

const Footer = () => {
    const styles = {
        footer: "w-full bg-gray-100 flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between mb-[50px] items-center rounded-[20px] shadow-md",
        logoContainer: "flex items-center gap-2",
        logo: "h-[55px] md:h-[60px] lg:h-[74px] w-auto transition-all duration-1000 scale-100",
        navLinks: "flex space-x-6 text-gray-700 text-sm md:text-base",
        contact: "text-gray-700 text-sm text-right leading-6",
    };

    return (
        <div id="Footer" className={styles.footer}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <a href="#" className="">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={logo} className={styles.logo} />
                          </a>
                
            </div>

            {/* Navigation Links */}
            <nav className={styles.navLinks}>
                <a href="#home" className="hover:underline">
                    Home
                </a>
                <a href="#about" className="hover:underline">
                    About
                </a>
                <a href="#projects" className="hover:underline">
                    Projects
                </a>
                <a href="#contact" className="hover:underline">
                    Contact
                </a>
            </nav>

            {/* Contact Details */}
            <div className={styles.contact}>
                <p>Handy Andy 2024</p>
                <p>+1 (832)-882 7270</p>
            </div>
        </div>
    );
};

export default Footer;

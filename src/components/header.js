import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const styles = {
    header: "bg-white font-sans fixed top-0 left-0 w-full z-50",
    nav: "mx-0 flex items-center justify-between px-[5px] py-[14px] md:px-[25px] lg:px-[40px]",
    logoContainer: "flex basis-5/12",
    logo: "h-[55px] md:h-[60px] lg:h-[74px] w-auto transition-all duration-1000 scale-100",
    logoScaled: "h-[55px] m-2 ml-[20px] md:h-[60px] lg:h-[74px] w-auto transition-all duration-1000 scale-150",
    mobileMenuButton: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
    navLinks: "hidden lg:flex lg:gap-x-12",
    navLink: "text-sm font-semibold text-gray-900",
    buttonsContainer: "hidden lg:flex gap-[10px] lg:flex-1 lg:justify-end",
    button: "text-sm font-semibold bg-[#ae6836] rounded-lg px-6 py-4 text-white hover:bg-white hover:text-[#ae6836] transition duration-1000",
    mobileMenu: `fixed px-[5px] py-[14px] pointer-events-none opacity-0 top-0 left-0 w-full backdrop-blur-[20px] bg-[#ffffff4d] z-10 transform transition-all duration-500 `,
    mobileMenuOpen: "px-[20px] pointer-events-auto opacity-100",
    mobileMenuContent: "flex flex-col items-start  h-full space-y-8",
    mobileNavLink: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50",
    mobileButtonsContainer: "py-6 flex gap-[10px]",
  };

  return (
    <motion.header
    initial="hidden"
    animate="visible"
    variants={headerVariants}
    className="bg-white fixed top-0 left-0 w-full z-50"
  >
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <a href="#" className="">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className={styles.logo} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={styles.mobileMenuButton}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Projects</a>
        </div>
        <div className={styles.buttonsContainer}>
          <a href="#" className={styles.button}>Call</a>
          <a href="#" className={styles.button}>GET A FREE QUOTE</a>
        </div>
      </nav>
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          <div className="flex items-center justify-between w-full ">
            <a href="#" className="">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className={`${styles.logo} ${mobileMenuOpen ? styles.logoScaled : ""}`} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileMenuButton}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flex flex-col items-start space-y-8">
            <a href="#" className={styles.mobileNavLink}>Home</a>
            <a href="#" className={styles.mobileNavLink}>About</a>
            <a href="#" className={styles.mobileNavLink}>Projects</a>
            <div className={styles.mobileButtonsContainer}>
              <a href="#" className={styles.button}>Call</a>
              <a href="#" className={styles.button}>GET A FREE QUOTE</a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

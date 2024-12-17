import React from 'react';
import hero_image from '../assets/banner.avif';

const Header = () => {
  const styles = {
    hero: "h-auto w-full flex justify-center",
    banner: "w-full h-full lg:h-[85vh] rounded-[15px]",
    overlay_box: "absolute bg-[#1212124d] lg:absolute left-[20px] top-[92px] md:top-[110px] md:left-[40px] lg:top-auto lg:left-[60px] lg:bottom-[75px] lg:backdrop-blur-[20px] lg:bg-[#ffffff4d] text-gray-900 mr-2 sm:mr-4 md:mr-6 lg:mr-0 p-0 lg:p-6 w-auto lg:w-[350px] rounded-lg shadow-lg flex flex-col gap-0 lg:gap-[35px] items-start",
    button: "text-sm font-semibold bg-[#ae6836] rounded-lg px-6 py-4 text-white hover:bg-white hover:text-[#ae6836] transition duration-1000",
    button_secondary: "text-sm font-semibold bg-black rounded-lg px-6 py-4 text-white hover:bg-gray-500 hover:text-white transition duration-1000",
  };

  return (
    <div id="hero-section" className={styles.hero}>
      <div className='hero_image h-full w-full'>
        <img src={hero_image} className={styles.banner} alt="Hero Image" />
      </div>
      <div className={styles.overlay_box}>
        <h2 className="text-3xl text-white font-bold text-left">At HANDY ANDY</h2>
        <p className="text-md text-white leading-relaxed text-left">
          We are creating spaces where innovation meets nature.
          <br />
          <br />
          <b>Offering Plumbing, Electrical, Carpentry, Fencing, Sheetrock, Tiling, and General Construction services in Houston, Texas.</b>
        </p>

        <div className="mt-6 flex justify-center space-x-4 text-white">
          <a href="#" className={styles.button_secondary}>Call Us</a>
          <a href="#" className={styles.button}>Get A Free Quote</a>
        </div>
      </div>


    </div>
  );
};

export default Header;

import './App.css';
import { useState } from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/Abouts.js';
import Services from './components/Services.js';
import Process from './components/Process.js';
import Testimonials from './components/Testimonials.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
function App() {

  return (
    <div className={`${`body`} bg-white font-sans m-0 px-[8px] pt-[85px] md:pt-[106px] md:px-[25px] lg:px-[40px] flex flex-col gap-[160px]`}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;






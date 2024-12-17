

const About = () => {
  const styles = {
    About: "h-auto w-full flex justify-between flex flex-col gap-y-6 lg:flex-row lg:gap-[16px]",
    about_para: "text-[27px] lg:text-[33px] text-[#ae6836] w-full lg:w-[50%]",
    numbers: "grid grid-rows-2 grid-cols-2 gap-x-[10px] gap-y-[10px] w-full lg:w-[45%]",
    number_block: "p-[32px] bg-[#ae6836] rounded-[20px] flex flex-col gap-[10px] items-center",
    number_block_top: "text-4xl text-white font-bold",
    number_block_bottom: "text-lg text-center text-white min-w-full",
  };
  return (
    <div id='About' className={styles.About}>
      <div className={styles.about_para}>
        <p className="w-full lg:w-[80%]">HANDY ANDY is situated in Houston, Texas, has 20+ years of experience and almost 100% client satisfaction.</p></div>
      <div id="Numbers" className={styles.numbers}>
        <div className={styles.number_block}>
          <p className={styles.number_block_top}>20+</p>
          <p className={styles.number_block_bottom}>Years of Experience</p>
        </div>
        <div className={styles.number_block}>
          <p className={styles.number_block_top}>200+</p>
          <p className={styles.number_block_bottom}>Completed Projects</p>
        </div>
        <div className={`${styles.number_block} col-span-2 text-center`}>
          <p className={styles.number_block_top}>100%</p>
          <p className={styles.number_block_bottom}>Client Satisfaction</p>
        </div>

      </div>
    </div>
  )
}

export default About;






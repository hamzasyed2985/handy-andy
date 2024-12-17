const Process = () => {
  const styles = {
    Process: "flex flex-col gap-[88px] md:flex-row md:gap-10 ",
    Heading_Wrapper: "flex flex-col gap-6 items-start md:w-[50%]",
    how_we_manage: "text-4xl text-[#ae6836] font-bold",
    description: "text-md text-gray-600 w-[75%] leading-relaxed",
    buttonWrapper: "flex flex-col items-justify gap-4",
    button: "text-sm text-center font-semibold bg-[#ae6836] rounded-lg px-6 py-4 text-white hover:bg-white hover:text-[#ae6836] transition duration-1000",
    StepsWrapper: "flex flex-col gap-10 items-center w-full md:w-[50%]",
    StepCard:
      "relative sticky top-[120px] h-[146px] w-[90%] md:w-[100%] bg-white border border-gray-300 rounded-lg shadow-md p-8 flex flex-col gap-4 text-left transition-transform duration-500 hover:scale-105",
    StepNumber:
      "absolute -top-4 -left-4 bg-[#ae6836] text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center",
    StepTitle: "text-2xl font-semibold text-[#ae6836]",
    StepDescription: "text-gray-600 leading-relaxed",
  };

  return (
    <div id="Process" className={styles.Process}>
      <div id="Heading_Wrapper" className={styles.Heading_Wrapper}>
        <p className={styles.how_we_manage}>How we manage our work?</p>
        <p className={styles.description}>
          We are a team of skilled Home Improvement Experts dedicated to
          crafting high-quality, custom woodwork for residential, commercial,
          and public spaces. From consultation to installation, we work closely
          with clients to bring their vision to life, combining precision,
          sustainability, and craftsmanship in every project.
        </p>
        <div className={styles.buttonWrapper}>
          <a href="#" className={styles.button}>
            Call Us
          </a>
          <a href="#" className={styles.button}>
            Contact Us
          </a>
        </div>
      </div>

      <div id="Steps" className={styles.StepsWrapper}>
        <div className={styles.StepCard}>
          <div className={styles.StepNumber}>1</div>
          <h2 className={styles.StepTitle}>Give us a Call or Fill the Form</h2>
          <p className={styles.StepDescription}>
            Give us a call or fill the form by clicking on the "Contact Us"
            button to get a call from us.
          </p>
        </div>

        <div className={styles.StepCard}>
          <div className={styles.StepNumber}>2</div>
          <h2 className={styles.StepTitle}>Project Discussion</h2>
          <p className={styles.StepDescription}>
            We will call you and discuss your project. We also schedule a site
            visit to get a better idea for the scope of work.
          </p>
        </div>

        <div className={styles.StepCard}>
          <div className={styles.StepNumber}>3</div>
          <h2 className={styles.StepTitle}>Quote</h2>
          <p className={styles.StepDescription}>
            We will provide you a quote and timeframe for the project. If you
            accept the quote, we get to work immediately.
          </p>
        </div>

        <div className={styles.StepCard}>
          <div className={styles.StepNumber}>4</div>
          <h2 className={styles.StepTitle}>Your Imagination to Life</h2>
          <p className={styles.StepDescription}>
            After work is finished, we offer slight changes and upgrades until
            you are satisfied with the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;

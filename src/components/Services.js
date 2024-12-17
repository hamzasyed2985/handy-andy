import { useState } from 'react';
import plumbing from '../assets/Plumbing Services.avif';
import electrical from '../assets/Electrical Services.jpeg';
import carpentry from '../assets/Carpentry Services.avif';
import general from '../assets/General Construction.avif';

const Services = () => {
  const styles = {
    services: "flex flex-col gap-[40px]",
    ourServices: "text-[#ae6836] text-5xl font-semibold mb-8 text-center",
    tabsContainer: "flex flex-wrap gap-0 justify-center md:justify-between",
    tabButton: "text-xl lg:text-3xl p-[22px] md:p-[32px] w-full lg:w-[24%] rounded-[20px] cursor-pointer transition-all duration-500",
    activeTab: "bg-[#ae6836] text-white transition-all duration-500",
    serviceDescription: "bg-white rounded-[20px] p-4 md:p-8 max-w-[90%] md:max-w-[45%] text-black text-lg sm:text-xl lg:text-2xl leading-relaxed absolute z-10 left-[10px] top-[10px] md:left-[20px] md:top-[20px]",
    imageContainer: "w-full h-[400px] md:h-[700px] rounded-[20px] overflow-hidden",
  };
  const [activeTab, setActiveTab] = useState("Electrical Services")

  const tabContent = {
    "Electrical Services": {
      description:
        "Our expert electricians provide reliable solutions for all your electrical needs. From wiring and lighting installations to troubleshooting and repairs, we ensure safe and efficient services tailored to your home or business.",
      image: electrical,
    },
    "Plumbing Services": {
      description:
        "We offer comprehensive plumbing solutions, including leak detection, pipe installations, and repair services. Our team ensures your water systems function seamlessly and efficiently.",
      image: plumbing,
    },
    "Carpentry Services": {
      description:
        "Our skilled carpenters craft high-quality woodwork, from furniture design to installations. We deliver durable and aesthetic solutions tailored to your needs.",
      image: carpentry,
    },
    "General Construction": {
      description:
        "We handle all general construction needs, ensuring reliable and on-time delivery for residential, commercial, and industrial projects.",
      image: general,
    },
  };

  return (
    <div id="Services" className={styles.services}>
      <div id="Our-Services" className={styles.ourServices}>
        Our Services
      </div>
      <div id="Desktop" className="flex flex-col gap-6">
        <div id="Tabs" className={styles.tabsContainer}>
          {Object.keys(tabContent).map((tab) => {
            return (<button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""
                }`}>
              {tab}
            </button>)
          })}
        </div>

        <div className="relative">
          <div id="Service-Description" className={styles.serviceDescription}>
            <p>{tabContent[activeTab].description}</p>
          </div>
          <div id="Service-Image" className={styles.imageContainer}>
            <img
              src={tabContent[activeTab].image}
              alt="Service"
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

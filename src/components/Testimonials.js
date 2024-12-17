import Thomas from "../assets/Thomas.avif";
import Micheal from "../assets/Micheal.avif";
import Emily from '../assets/Emily.avif';
import Sarah from '../assets/Sarah.avif';
import { useState } from "react";

const Testimonials = () => {
    const styles = {
        Testimonials: "flex flex-col gap-[30px] transition-all ",
        heading: "text-5xl text-center text-[#ae6836]",
        container: "flex flex-col items-center gap-[15px] bg-[#ae6836] py-[74px] rounded-[20px] transition-all",
        text: "text-white text-center text-xl md:text-2xl w-[95%] md:w-[80%]",
        User: "flex flex-col gap-[10px]",
        avatarContainer: "flex flex-row gap-[5px] h-[60px] transition-all",
        avatar: "inline-block size-10 rounded-full ring-2 ring-transparent blur-[1px] transition-all duration-500",
        activeAvatar: "size-14 transition-all duration-1000 blur-[0px] "
    };

    const [activeAvatar, setActiveAvatar] = useState("Michael S.");

    const UserData = {
        "Michael S.": {
            description:
                "I got an immediate appointment during an emergency, and my issue was resolved swiftly. I appreciate the professionalism here.",
            image: Micheal,
            designation: "Sales Manager"
        },
        "Thomas Jenkins": {
            description:
                "Extremely pleased with the treatments received here. The team communicated clearly and effectively at every step.",
            image: Thomas,
            designation: "Engineer"
        },
        "Emily K.": {
            description:
                "ways a professional and welcoming service. They helped me overcome my fear of dentistry. Thank you!",
            image: Emily,
            designation: "Teacher"
        },
        "Sarah L.": {
            description:
                "The teeth whitening procedure was highly effective, and I'm thrilled with the results. Thank you for the expertise and care provided here!",
            image: Sarah,
            designation: "Business Analyst"
        },
    }
    return (
        <div id="Testimonials" className={styles.Testimonials}>
            <h1 className={styles.heading}>Testimonials</h1>
            <div id="Testimonials-Container" className={styles.container}>
                <div className={styles.stars}>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-blue-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-6 h-6 text-blue-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-6 h-6 text-blue-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-6 h-6 text-blue-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>
                <div className={styles.text}>
                    {UserData[activeAvatar].description}
                </div>
                <div className={styles.User}>
                    <div className="text-center font-bold">{activeAvatar}</div>
                    <div className="text-center">{UserData[activeAvatar].designation}</div>

                </div>
                <div className={styles.avatarContainer}>
                    {Object.keys(UserData).map((data) => {
                        return (
                            <button key={data} onClick={() => { setActiveAvatar(data) }}><img key={data} className={`${styles.avatar} ${activeAvatar === data ? styles.activeAvatar : ""}`} src={UserData[data].image} alt="" /></button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default Testimonials;

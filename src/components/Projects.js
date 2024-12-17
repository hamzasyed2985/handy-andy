import { useState } from "react";
import Coast from "../assets/Coast.avif";
import Peak from "../assets/Peak.avif";
import Oasis from "../assets/Oasis.avif";
import Zen from "../assets/Zen.avif";

const Projects = () => {
    const projects = [
        { name: "Coast Villa", image: Coast },
        { name: "Peak Villa", image: Peak },
        { name: "Oasis Retreat", image: Oasis },
        { name: "Zen Haven", image: Zen },
    ];

    return (
        <div id="Projects" className="bg-whtie">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-[20px] shadow-lg"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute items-center bottom-0 left-0 bg-white w-[100%] opacity-100  lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex p-4">
                            <span className="text-black text-2xl font-semibold">
                                {project.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

import React from "react";
import { skills } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";
function Skills() {
  return (
    <div className="flex flex-col text-left justify-between relative">
      <div id="learnmore">
        <SectionTitle title="Explore my skills and tech stack." />
      </div>
      <div className="flex flex-col md:flex-row justify-between relative">

      {/* <h2 className=" max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-xl mb-10 pt-4 md:pt-0 md:w-max">
          Programming language:
        </h2> */}
        {/* <div id="learnmore">
          <SectionTitle title="Programing language:" />
        </div> */}
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
          {skills.slice(0, 30).map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-xs text-fun-black font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Skills;

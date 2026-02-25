"use client";

import { useState } from "react";
import CareerTabs from "./CareerTabs";

import Direction from "./career_tabs/Direction";
import Writer from "./career_tabs/Writer";
import Musical from "./career_tabs/Musical";
import Editor from "./career_tabs/Editor";
import Stunt from "./career_tabs/Stunt";
import Makeup from "./career_tabs/Makeup";
import Art from "./career_tabs/Art";
import Costume from "./career_tabs/Costume";
import Graphic from "./career_tabs/Graphic";
import Cinematography from "./career_tabs/Cinematography";

export default function Career() {
  const [activeTab, setActiveTab] = useState("direction");

  return (
    <section id="career" className="bg-black text-white lg:min-h-screen pt-[80px] px-6 py-4 lg:px-[90px] lg:py-[50px]">
      <div className="lg:max-w-[1050px] xl1:max-w-[1200px] mx-auto px-6">
       {/* Heading Row */}
    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 mb-12">
      
      {/* Big Title */}
      <h1 className="text-center lg:w-[600px] text-[60px] sm:text-[80px] lg:text-[110px] font-[900] lg:text-left text-red-600 leading-none tracking-wider">
        CAREER
      </h1>

      {/* Description */}
      <p className="max-w-[590px] text-center lg:text-left text-gray-300 text-sm sm:text-base lg:text-[24px] leading-relaxed">
        From concept to final cut, be part of the creative journey. 
        Grow your career in a space built for cinema lovers.
      </p>

    </div>

        <CareerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Divider Line */}
        

        <div className="mt-10">
          {activeTab === "direction" && <Direction />}
          {activeTab === "writing" && <Writer/>}
          {activeTab === "music" && <Musical/>}
          {activeTab === "editing" && <Editor />}
          {activeTab === "stunt" && <Stunt/>}
          {activeTab === "makeup" && <Makeup/>}
          {activeTab === "art" && <Art />}
          {activeTab === "costume" && <Costume/>}
          {activeTab === "graphic" && <Graphic/>}
          {activeTab === "cinematography" && <Cinematography/>}
        </div>
      </div>
    </section>
  );
}

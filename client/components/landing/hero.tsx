"use client";
import React from "react";
import { SparklesCore } from "@/ui/sparkles";
import Image from "next/image";

export function Hero() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
        <Image src="/hero.jpg" layout="fill"   quality={100} alt="Hero Image" className="opacity-70 " />
      <h1 className="md:text-7xl text-4xl lg:text-5xl font-bold text-center text-white relative z-20">
      Fuel Your Imagination in the Ultimate Innovation Battle! 
      </h1>
      <div className="w-[40rem] h-4 relative">
        {/* Gradients */}
        <br></br>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

       
        
      </div>

      <p className="">Unleash your creativity, push boundaries, and code your way to victory in the hackathon that defines the future!</p>
     
      <div className="pt-32">
  <button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-16 py-4 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent">
      Register Here
    </div>
  </button>
</div>



    </div> 

     
    
  );
}

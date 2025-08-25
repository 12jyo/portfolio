import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Frontend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5 pl-4 pr-4 lg:pl-16">
        <h4 className=" text-lg font-normal text-designColor">WELCOME TO MY SHOWCASES</h4>
        <div className='flex flex-row' style={{alignItems:'center'}}>
          <h1 className="text-3xl lg:text-6xl font-bold text-white flex flex-row">
            Hi, I'm <span className="text-designColor capitalize">&nbsp;Jyoti Gupta</span>
          </h1>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Creative Frontend Developer specializing in React.js, with a strong eye for design and user experience. I excel at building responsive, high-performance web applications using modern tools like React, Redux, and Tailwind CSS. Passionate about translating complex ideas into intuitive interfaces, I focus on clean code, reusability, and scalability. Let's craft engaging user experiences—one component at a time!
        </p>
      </div>
    </div>
  );
}

export default LeftBanner
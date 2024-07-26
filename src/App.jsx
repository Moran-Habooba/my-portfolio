import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useRef } from "react";
function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav
        className="bg-purpleBold text-white font-bold min-h-[50px] text-gray-100"
        ref={homeRef}
      >
        <div className="flex flex-wrap justify-between mx-8 ">
          <div className=" w-full lg:w-1/2 text-left mt-4 ">
            Moran Habooba🩷Full-stack developer
          </div>
          <div className=" w-full lg:w-1/2 text-right mt-4">בס"ד</div>
        </div>

        <div className="container center min-h-[50px] font-handwriting text-2xl  ">
          <ul className="flex space-x-3">
            <li>
              {/* <a href="#">Home</a> */}
              <a href="#home" onClick={() => scrollToSection(homeRef)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection(aboutRef)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className=" bg-purple text-gray-100 min-h-[150px] center">
        <div className="container ">
          <div className="flex flex-col items-center">
            <video
              className="w-full lg:w-auto "
              width="960"
              height="315"
              autoPlay
              muted
              loop
            >
              <source
                src="/Blue Minimalist Game Developer LinkedIn Banner.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-pink min-h-[300px] center flex flex-col items-center justify-center pb-5">
          <h2 className="center text-gray text-3xl py-3 font-handwriting">
            Welcome to my portfolio. Take a look at some of my projects below.
          </h2>
          <button className="border rounded-md p-2 bg-purple border-transparent text-gray text-[20px] mt-4 font-handwriting ">
            Projects
          </button>
          <hr className="border-gray-300 my-4 w-full" />
          <div className="text-left mt-10 px-10  text-gray">
            {/* <h1 className="text-4xl mb-1 animate-fall">Nice to meet you</h1> */}
            <h1 className="text-4xl mb-1 animate-fall" ref={aboutRef}>
              Nice to meet you
            </h1>
            <p className="text-[20px]">
              Hello, I'm Moran, a graduate of a Full Stack development course. I
              am passionate about exploring new technologies and building
              quality web applications.
              <br />I am proficient in a variety of development tools. What
              truly drives me is the ability to turn ideas into reality.
              <br /> I enjoy the process of analyzing problems, Finding
              solutions, and bringing them to life through elegant and
              functional code.
              <br /> I strive to write clean and maintainable code,and I believe
              that teamwork and effective communication are vital in delivering
              successful projects.
              <br /> I'm always eager to learn from others, contribute to team
              efforts, and embrace new challenges. I continuously strive to
              improve my skills and follow industry best practices.
            </p>
          </div>
        </div>
      </div>

      <main className="bg-green min-h-[800px] center">
        <div className="container">
          <div className="border">dfdf</div>
        </div>
        {/* <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="box-top w-full lg:w-1/3 bg-yellow-400 center">
              box1
            </div>
            <div className="box-top w-full lg:w-1/3 bg-orange-400 center">
              box2
            </div>
            <div className="box-top w-full lg:w-1/3 bg-green-500 center">
              box3
            </div>
            <div className="box-bottom w-full lg:w-[48%] bg-blue-500 center">
              box4
            </div>
            <div className="box-bottom w-full lg:w-[48%] bg-white text-black center ">
              box5
            </div>
          </div>
        </div> */}
      </main>
      <footer className="bg-purpleBold text-white  min-h-[80px] center">
        <div className="container">
          🕯️🕯️אתר שומר שבת
          <br />© 2024 Moran 🩷 Habooba . All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;

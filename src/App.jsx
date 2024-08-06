import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import ProjectsList from "./ProjectsList";

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const ProjectsRef = useRef(null);
  const contactsRef = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const icons = [
    "/icons/axios-svgrepo-com.svg",
    "/icons/bcrypt-svgrepo-com.svg",
    "/icons/bootstrap-svgrepo-com.svg",
    "/icons/css-3-svgrepo-com.svg",
    "/icons/express-svgrepo-com.svg",
    "/icons/formik-svgrepo-com.svg",
    "/icons/github-svgrepo-com.svg",
    "/icons/html-5-svgrepo-com.svg",
    "/icons/javascript-svgrepo-com.svg",
    "/icons/jsonwebtoken-svgrepo-com.svg",
    "/icons/mongodb-svgrepo-com.svg",
    "/icons/mongoose-svgrepo-com.svg",
    "/icons/nextjs-svgrepo-com.svg",
    "/icons/nodejs-svgrepo-com.svg",
    "/icons/prisma-svgrepo-com.svg",
    "/icons/react-router-svgrepo-com.svg",
    "/icons/react-svgrepo-com.svg",
    "/icons/sass-svgrepo-com.svg",
    "/icons/tailwind-svgrepo-com.svg",
    "/icons/typescript-svgrepo-com.svg",
    "/icons/vscode-svgrepo-com.svg",
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "The message was sent successfully",
          text: "Thank you for contacting us, we will get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "error",
          text: "There was an error sending the message, please try again later.",
        });
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isFormValid = () => {
    return formValues.name && formValues.email && formValues.message;
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
            {/* <li>
              <a href="#home" onClick={() => scrollToSection(homeRef)}>
                Home
              </a>
            </li> */}
            <li>
              <a href="#about" onClick={() => scrollToSection(aboutRef)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={() => scrollToSection(ProjectsRef)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => scrollToSection(contactsRef)}>
                Contact-Me
              </a>
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
        <div className="bg-pink min-h-[300px] center flex flex-col items-center justify-center pb-10 ">
          <h2 className="center text-black text-3xl  sm:text-2xl py-3 font-handwriting ">
            Welcome to my portfolio. Take a look at some of my projects below.
          </h2>
          <button className="border rounded-md p-2 bg-purple border-transparent text-black text-[20px] mt-4 font-handwriting hover:bg-purpleBold hover:text-white ">
            Projects
          </button>
          <hr className="border-purpleBold my-4 w-full" ref={aboutRef} />
          <div className="text-left mt-10 px-10  text-black">
            {/* <h1 className="text-4xl mb-1 animate-fall">Nice to meet you</h1> */}
            <h1 className="text-4xl mb-1 animate-fall font-bold font-handwriting">
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
      <main className="bg-green min-h-[350px] flex items-start justify-center pt-4 overflow-hidden ">
        <div className=" ">
          <h1 className="center text-4xl mb-10 mt-5  font-handwriting ">
            Used Technologies
          </h1>
          <div className="whitespace-nowrap animate-marquee ">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="inline-block flex justify-center items-center h-32 w-32 mx-2"
              >
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="h-20 w-18 "
                />
              </div>
            ))}
          </div>
          <h1
            className="center text-4xl mb-7 mt-16 font-handwriting inherit"
            ref={ProjectsRef}
          >
            my projects
          </h1>
        </div>
      </main>
      <ProjectsList />
      {/* <div className=" my-10 center">
        <div className=" flex space-x-8 ">
          <div className="max-w-sm rounded-lg  overflow-hidden border-2 border-white shadow-lg ">
            <img
              className=" h-40  w-full"
              src="/image project/1_Im0.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm rounded-lg  overflow-hidden  border-2 border-white shadow-lg  ">
            <img
              className=" h-40 w-full"
              src="/image project/51okr7JU0KL.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm  rounded-lg overflow-hidden  border-2 border-white shadow-lg  ">
            <img
              className=" h-40  w-full"
              src="/image project/Calculator-project.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm rounded-lg  overflow-hidden border-2 border-white shadow-lg ">
            <img
              className=" h-40  w-full"
              src="/image project/1_Im0.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
        </div>
      </div> */}
      {/* ------------------------------------------------ */}
      {/* <div className=" my-10 center">
        <div className=" flex space-x-8 ">
          <div className="max-w-sm rounded-lg  overflow-hidden border-2 border-white shadow-lg ">
            <img
              className=" h-40  w-full"
              src="/image project/1_Im0.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm rounded-lg  overflow-hidden  border-2 border-white shadow-lg  ">
            <img
              className=" h-40 w-full"
              src="/image project/51okr7JU0KL.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm  rounded-lg overflow-hidden  border-2 border-white shadow-lg  ">
            <img
              className=" h-40  w-full"
              src="/image project/Calculator-project.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
          <div className="max-w-sm rounded-lg  overflow-hidden border-2 border-white shadow-lg ">
            <img
              className=" h-40  w-full"
              src="/image project/1_Im0.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-[#CB8CB6]">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button class="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
              Try it out
            </button>
            <span className="center my-2">
              <a
                className="text-blueviolet font-bold hover:underline"
                href="https://github.com/Moran-Habooba/shabbat-time"
                target="_blank"
              >
                <i className="bi bi-github"></i> Github Repo
              </a>
            </span>
          </div>
        </div>
      </div> */}
      {/* ************************************** */}

      <div
        className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center items-center  sm:py-12"
        ref={contactsRef}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto  max-w-xs  mx-4 ">
          <div className="absolute inset-0 bg-gradient-to-r from-purpleBold to-purpleBold shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-banana shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6 text-purpleBold font-bold">
              <h1 className="text-3xl ">Get in touch</h1>

              <p class="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mqazqjwa"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input
                className="shadow mb-4 appearance-none border rounded w-full  py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
              />

              <input
                // className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                className="shadow mb-4 appearance-none border rounded  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline "
                type="text"
                placeholder="Type your message here..."
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                // style={"height: 121px;"}
              ></textarea>

              <div className="flex justify-between">
                <input
                  className={`shadow ${
                    isFormValid()
                      ? "bg-indigo-500 hover:bg-indigo-700"
                      : "bg-indigo-500 cursor-not-allowed"
                  } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="submit"
                  value="Send"
                  disabled={!isFormValid()}
                />
                <input
                  className="shadow bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                  value="Reset"
                  onClick={() => {
                    setFormValues({ name: "", email: "", message: "" });
                  }}
                />
              </div>
              <div className="mt-8 flex justify-between space-x-1 text-[20px]">
                <a
                  href="https://github.com/Moran-Habooba?tab=repositories"
                  className=" text-purpleBold font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i> MY-GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/moran-habooba"
                  className=" text-purpleBold  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i> My-LinkedIn
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
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

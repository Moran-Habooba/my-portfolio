import React, { useState } from "react";

const projects = [
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/51okr7JU0KL.jpg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/Calculator-project.jpg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/image project/ball.jpg",
    link: "https://github.com/Moran-Habooba/shabbat-time",
  },
  // Add more project objects as needed
];

const ProjectsList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  // Create an array of arrays, each subarray contains 4 projects
  const projectChunks = [];
  for (let i = 0; i < visibleProjects; i += 4) {
    projectChunks.push(projects.slice(i, i + 4));
  }

  return (
    <div className="my-10 text-center space-x-5">
      {projectChunks.map((chunk, index) => (
        <div key={index} className="flex flex-wrap justify-center mb-4">
          {chunk.map((project, subIndex) => (
            <div
              key={subIndex}
              className="max-w-sm rounded-lg overflow-hidden border-2 border-white shadow-lg m-4"
            >
              <img
                className="h-60 w-full"
                src={project.image}
                alt={project.title}
              />
              <div className="px-6 py-4 bg-[#CB8CB6]">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-white text-base">{project.description}</p>
              </div>
              <button className="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
                Try it out
              </button>
              <span className="center my-2">
                <a
                  className="text-blueviolet font-bold hover:underline"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i> Github Repo
                </a>
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="border rounded-md p-2 bg-purple border-transparent text-black text-[20px] font-handwriting hover:bg-purpleBold hover:text-white"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProjectsList;

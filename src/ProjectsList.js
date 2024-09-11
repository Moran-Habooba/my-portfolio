import React, { useState } from "react";

const projects = [
  {
    title: "Mp3 player",
    description:
      "Basic music player built with HTML, CSS, and JavaScript. It lets users play, pause, adjust volume, and track progress for songs in a playlist. The interface shows the current song's title, description, and image",
    image: "/image project/1_Im0.jpeg",
    link: "https://github.com/Moran-Habooba/mp3-player2",
    website:
      "https://mp3-player2-qcu9l1sod-moran-haboobas-projects.vercel.app/",
  },
  {
    title: "Country App",
    description:
      "Country App that allows users to select a country and view detailed information, including timezone, population, capital, and more. The app integrates with external APIs to deliver up-to-date data in an easy-to-navigate interface",
    image: "/image project/51okr7JU0KL.jpg",
    link: "https://github.com/Moran-Habooba/countryApp",
    website: "https://moran-habooba.github.io/countryApp/",
  },
  {
    title: "Drawing App",
    description:
      "Drawing App using HTML5 Canvas, allowing users to create and customize digital drawings with ease. The app includes features like color selection, brush size adjustment, and an intuitive user interface, providing a smooth and creative experience.",
    image: "/image project/Drawing-App.jpg",
    link: "https://github.com/Moran-Habooba/Drawing-App-2",
    website:
      "https://drawing-app-2-ap8kj95ef-moran-haboobas-projects.vercel.app/",
  },
  {
    title: "Rock,Paper,Scissors",
    description:
      "game with a simple and interactive interface. Players can compete against the computer, and the app tracks results to enhance the gameplay experience.",
    image: "/image project/rock paper scissors.jpg",
    link: "https://github.com/Moran-Habooba/game-Rock--Paper--Scissors",
    website: "https://moran-habooba.github.io/game-Rock--Paper--Scissors/",
  },
  {
    title: "Budget App",
    description:
      "Budget App using canvas for visualizations and local storage for saving data. It helps users track expenses, set budgets, and manage finances efficiently.",
    image: "/image project/top-budget-categories-1024x683.jpg",
    link: "https://github.com/Moran-Habooba/Budget-App",
    website: "https://moran-habooba.github.io/Budget-App/",
  },
  {
    title: "A memory game of your choice",
    description:
      "I created a memory game using an API to fetch images, where players can choose a theme, set the number of pairs, track high scores, and save usernames for a personalized experience",
    image: "/image project/memory.jpg",
    link: "https://github.com/Moran-Habooba/Memory-game-API",
    website: "https://moran-habooba.github.io/Memory-game-API/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe game that tracks player moves and announces the winner at the end of each round for a fun and competitive experience.",
    image: "/image project/איקס עיגול.png",
    link: "https://github.com/Moran-Habooba/tic-tac-toe-game",
    website: "https://moran-habooba.github.io/tic-tac-toe-game/",
  },
  {
    title: "Simple Calculator",
    description:
      "simple Calculator with sound effects and support for keyboard input, offering a smooth and interactive user experience",
    image: "/image project/Calculator-project.jpg",
    link: "https://github.com/Moran-Habooba/--Calculator-project-------",
    website: "https://moran-habooba.github.io/--Calculator-project-------/",
  },
  {
    title: "Random joke generator",
    description:
      "Random Joke Generator that fetches jokes from an API, providing users with a fun and easy way to get a laugh with each click.",
    image: "/image project/סמיילי.jpg",
    link: "https://github.com/Moran-Habooba/Random-Joke-Generator",
    website: "https://moran-habooba.github.io/Random-Joke-Generator/",
  },
  {
    title: "Shabbat time",
    description:
      "Shabbat Time app that lets users select a region via an API to receive candle-lighting times and the weekly Torah portion (Parashat HaShavua)",
    image: "/image project/parashat-hashavua-16-1.png",
    link: "https://github.com/Moran-Habooba/shabbat-time",
    website: "https://moran-habooba.github.io/shabbat-time/",
  },
  {
    title: "Ping Pong Game",
    description:
      "Ping Pong Game featuring sound effects, keyboard or mouse controls, and score tracking for an engaging and interactive experience",
    image: "/image project/ShowImage.jpeg",
    link: "https://github.com/Moran-Habooba/Ping-Pong-Game",
    website: "https://moran-habooba.github.io/Ping-Pong-Game/",
  },
  {
    title: "A Caramel memory game",
    description:
      "A memory game themed around Carmel the cat, featuring sound effects, username saving, and score tracking for a fun and personalized experience",
    image: "/image project/כראמל.jpg",
    link: "https://github.com/Moran-Habooba/A-caramel-memory-game--typescript",
    website:
      "https://moran-habooba.github.io/A-caramel-memory-game--typescript/",
  },
  {
    title: "A weekly Torah newsletter",
    description:
      "I write the weekly newsletter 'תורתך שעשועי,' focused on the weekly Torah portion (Parashat HaShavua), distributed every week with an option to download.",
    image: "/image project/עלון תורתך שעשועי.jpg",
    link: "https://github.com/Moran-Habooba/Torah-project-----",
    website: "https://moran-habooba.github.io/Torah-project-----/",
  },
  {
    title: "Previous portfolio",
    description:
      "My previous portfolio features apps and games, including a Drawing App, Country Info App, and Budget Manager, highlighting my skills in API integration, canvas, and interactive design",
    image: "/image project/Previous portfolio.jpg",
    link: "https://github.com/Moran-Habooba/my-web",
    website: "https://my-ot7y15xxb-moran-haboobas-projects.vercel.app/",
  },
  // {
  //   title: "A shop for Judaica products",
  //   description:
  //     "My previous portfolio features apps and games, including a Drawing App, Country Info App, and Budget Manager, highlighting my skills in API integration, canvas, and interactive design",
  //   image: "/image project/Previous portfolio.jpg",
  //   link: "https://github.com/Moran-Habooba/my-web",
  //   website: "https://my-ot7y15xxb-moran-haboobas-projects.vercel.app/",
  // },
  // Add more project objects as needed
];

const ProjectsList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

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
              <a
                href={project.website} // Add link to project website
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-purpleBold hover:bg-purple text-white font-bold my-2 py-2 px-4 rounded-full">
                  Try it out
                </button>
              </a>
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

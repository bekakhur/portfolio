import React from "react";

const Projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis laborum similique at ratione.",
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis laborum similique at ratione.",
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis laborum similique at ratione.",
  },
];

const ProjectCard = () => {
  return (
    <div
      id="projects"
      className="flex pt-10 px-10 flex-col gap-16 items-center justify-center"
    >
      <h1 className="text-4xl font-bold">PROJECTS</h1>
      <div className="lg:flex gap-10">
        {Projects.map((item) => (
          <div
            key={item.title}
            className="flex flex-col mb-6 text-center items-center justify-center gap-5"
          >
            <div className="h-80 w-full bg-red-400"></div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="flex w-full justify-around">
              <button>GITHUB</button>
              <button>LINK</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

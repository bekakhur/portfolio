import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="gap-20 flex min-h-[800px] lg:min-h-[600px] flex-col lg:flex-row-reverse h-screen items-center w-full pb-10 justify-center">
      <div className="h-[300px] min-h-[300px] w-[300px] md:w-[22rem] md:h-[22rem] bg-red-400 rounded-full"></div>
      <div className="flex flex-col px-8 lg:w-[47%] max-w-[600px] items-center text-center gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold">John Jones Jr</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          obcaecati adipisci illo ullam sed, iusto vel delectus, explicabo
          maiores numquam harum quod iure dignissimos!
        </p>
        <div className="flex gap-8">
          <Link
            href="#projects"
            className="bg-slate-200 align-middle px-6 py-2 rounded-2xl"
          >
            Projects
          </Link>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

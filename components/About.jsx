import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center w-full">
      <div className="w-[300px] h-[300px] bg-yellow-200"></div>
      <p className="flex items-center max-w-[500px] justify-center text-center px-6 text-xl h-[50%]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex
        facilis, ducimus blanditiis deserunt iste mollitia sint possimus dolorem
        fuga nemo deleniti aspernatur eligendi.
      </p>
    </div>
  );
};

export default About;

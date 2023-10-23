import React from "react";

const stackList = [1, 2, 3, 4, 5, 6, 7, 8];

const Stack = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 text-2xl font-bold">
      <h2>Tech Stack</h2>
      <div className="flex gap-4 mt-8">
        {stackList.map((item) => (
          <div key={item} className="h-24 w-24 rounded-lg bg-blue-200"></div>
        ))}
      </div>
    </div>
  );
};

export default Stack;

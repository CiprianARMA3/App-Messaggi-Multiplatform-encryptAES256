import React from "react";

function Team() {
  return (
    <div className="mb-auto flex items-start justify-center pt-16 mt-[100px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
          {/* Team Member Card */}
          <div className="rounded-2xl shadow-[0_0_10px_#ffffff] shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300 backdrop-blur-xl rounded-lg">
            <img
              src="https://avatars.githubusercontent.com/u/122694408?v=4"
              alt="Ciprian"
              className="w-32 h-32 rounded-full mb-4 border-2 border-gray-700"
            />
            <h2 className="text-xl font-semibold text-white">Ciprian Mariuta</h2>
            <p className="text-gray-400 mb-2">Founder & Developer</p>
            <p className="text-gray-300 text-sm">
                Hi! I'm Ciprian and i made this project as a goalstone for the languages i'm learning.   
            </p>
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="https://github.com/CiprianARMA3" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

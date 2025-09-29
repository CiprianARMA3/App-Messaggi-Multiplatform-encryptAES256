import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home(){

useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
  <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl  md:text-6xl font-extrabold mb-6 max-w-4xl text-white [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">
      Talk Freely , No-one is listening
    </h1>
    <p className="text-gray-300 max-w-2xl mb-10">
      End-to-end encryption keeps your convesations private, we provide industry standard user privacy.Remember, not even the your goverment needs to know what you're talking about.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link to="/"
         className="px-8 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
         Register
      </Link>
      <Link to="/learnmore"
         className="px-8 py-3 rounded-md border border-gray-500 hover:bg-gray-800 transition">
         Learn More
      </Link>
    </div>


    <div className="relative inline-block">
  <div className="absolute inset-0 -m-1 rounded-lg bg-gradient-to-r from-blue-500 via-red-500 to-green-500 blur-xl"></div>

  <button 
    className="relative px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-800 transition" >
    Click Me
  </button>
</div>
  </main>
    </>
  );
}
export default Home;
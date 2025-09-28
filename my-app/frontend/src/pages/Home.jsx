import { Link } from "react-router-dom";
import { useEffect } from "react";

function HomePage(){

useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
  <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl">
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
  </main>
    </>
  );
}
export default HomePage;
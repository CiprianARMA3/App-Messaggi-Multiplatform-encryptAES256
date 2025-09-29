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
    <div className="flex flex-col  sm:flex-row gap-4 ">
      <div className="flex flex-col  sm:flex-row gap-4  ">
      <Link to="/"
  className="px-8 py-3 relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-bold shadow-[0_0_80px_-2px_rgba(168,85,247,1)] hover:shadow-[0_0_80px_-2px_rgba(59,130,246,1)] transition">
         Register
      </Link>
      </div>
<Link
  to="/learnmore"
  className="relative px-8 py-3 rounded-3xl border-[2px] border-gray-600 
             bg-black text-white font-bold
             before:absolute before:inset-0 before:rounded-3xl 
             before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 
             before:-z-10 
             shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] 
             hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] 
             transition"
>
  Learn More
</Link>
    </div>

    {/* <div className="relative inline-block">
  <div className="absolute inset-0 -m-1 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 blur-xl"></div>
  <button 
    className="relative px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-grey-800 transition  backdrop-blur-3xl" >
    Test
  </button>
</div> */}


  </main>
    </>
  );
}
export default Home;
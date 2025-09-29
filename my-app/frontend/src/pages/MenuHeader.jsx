import { Link } from "react-router-dom";

function MenuHeader(){
    return(
        <>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none "></div>

  <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-grey/10 backdrop-blur-md">
    <div className="text-xl font-bold tracking-wide">CIPHERGRAM</div> 
    <nav className="hidden md:flex space-x-8 text-gray-300">
      <Link to="/" className="hover:text-white ">Home</Link>
      <Link to="/safety" className="hover:text-white">Safety</Link>
      <Link to="/team" className="hover:text-white">Team</Link>
      <Link to="/support" className="hover:text-white">Support</Link>
    </nav>
        <Link 
        to="/support" 
        className="ml-6 px-4 py-2 rounded-md bg-cyan-400/20 text-white font-semibold backdrop-blur-3xl hover:bg-cyan-600 transition "
        >
        Get Started
        </Link>
  </header>

  </>
    );
}

export default MenuHeader;
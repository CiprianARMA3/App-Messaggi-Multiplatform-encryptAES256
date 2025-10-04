import { Link } from "react-router-dom";

function MenuHeader(){
    return(
        <>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none "></div>

  <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-grey/10 backdrop-blur-md">
    <div className="text-xl font-bold tracking-wide">CIPHERGRAM</div> 
    <nav className="hidden md:flex space-x-8 text-gray-300">
      <Link to="/" className="hover:text-white ">Home</Link>
      <Link to="/pricing" className="hover:text-white">Pricing</Link>
      <Link to="/team" className="hover:text-white">Team</Link>
      <Link to="/support" className="hover:text-white">Support</Link>
    </nav>
        <Link 
        to="/login" 
  className="relative px-8 py-3 rounded-3xl border-[2px] border-gray-600 
             bg-black text-white font-bold
             before:absolute before:inset-0 before:rounded-3xl 
             before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 
             before:-z-10 
             shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] 
             hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] 
             transition">
        
        Get Started
        </Link>
  </header>

  </>
    );
}

export default MenuHeader;
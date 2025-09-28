
import { Routes, Route } from "react-router-dom";
import MenuHeader from "./pages/MenuHeader.jsx";
import Home from "./pages/Home.jsx";
import Safety from "./pages/Safety.jsx";
import Team from "./pages/Team.jsx";
import Support from "./pages/Support.jsx";
import Footer from "./pages/Footer.jsx";
import LearnMore from "./pages/LearnMore.jsx";

function App(){
    return( 
        <div className="bg-radial min-h-screen flex flex-col text-white relative overflow-hidden">
            <MenuHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/team" element={<Team />} />
                <Route path="/support" element={<Support />} />
                <Route path="/learnmore" element={<LearnMore />}/>
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
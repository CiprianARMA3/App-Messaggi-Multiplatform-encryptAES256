import { useEffect } from "react";
function Support(){
    return(
<main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div>
            <h1> ancora da modificare</h1>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6"></div>

            <div className="font-extrabold mb-6 text-white text-5xl [text-shadow:0_0_8px_rgba(255,255,255,0.5)]">
                <h1>Free to use</h1>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6"></div>
            <div>
                <p className="text-2xl">
                    The service we provide is free to use.
                </p>
                <p className="text-2xl text-red-400 mt-[20px]">
                    If you wish to contribute to this project by donating, please contact:
                </p>
                <p className="text-2xl text-red-400 mt-[20px]">
                    email@provider.where
                </p>
            </div>
        </div>
    </main>   
     );
}
export default Support;
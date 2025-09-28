import { useEffect, useRef } from "react";

function LearnMore() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cities = ["Amsterdam", "4fQZgySwk3si2ukoUvnasg==","Berlin","DHiqlk3lcwz42gdAwXsOvw==","Rome","YYtcMz7H2NCeFDoo+zqghg====","Paris","/v4fJCVWT+I1lKJHempVjQ=="];
    let cityIndex = 0;
    let charIndex = 0;
    let currentText =  "";
    let isDeleting = false;

    function typeEffect() {
      const fullText = cities[cityIndex % cities.length];

      if (isDeleting) {
        charIndex--;
        currentText = fullText.substring(0, charIndex);
      } else {
        charIndex++;
        currentText = fullText.substring(0, charIndex);
      }

      if (textRef.current) {
        textRef.current.textContent = currentText;
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => (isDeleting = true), 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        cityIndex++;
      }

      const speed = isDeleting ? 40 : 60;
      setTimeout(typeEffect, speed);
    }

    typeEffect();

    const cursorInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle("hidden");
      }
    }, 500);
    document.title="Learn More";
    // Cleanup on unmount
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
      <div className="py-8 sm:py-6">
        <p className="mx-auto mt-1 max-w-4xl text-center text-5xl font-medium tracking-tight text-gray-300 sm:text-6xl">
          Everything you need to know before using our service
        </p>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-gray-300">Users worldwide</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">0</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-gray-300">Updates</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">1</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-gray-300">Developers actively working</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">1</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-6 justify-center mt-16 ">
                    <div className="relative w-80 p-6 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg overflow-hidden transition-transform-shadow duration-500 ease-in-out hover:scale-y-100 hover:translate-y-[-13px]   hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-white/10 blur-xl transform rotate-12"></div>
            </div>

            <h3 className="text-gray-100 text-xl font-semibold mb-4">
              <i className="fa-solid fa-lock mr-[10px]" style={{ opacity: 0.7}}></i> End to End encryption
            </h3>

            <p className="text-gray-300 text-m">
              Your messages are secured with modern cryptography. No one — not even us — can read them.<br></br> <br></br>
            </p> 
            <span className="inline-block w-64 text-center">
                <span ref={textRef} className="text-gray text-base"></span>
                <span ref={cursorRef} className="cursor"> |  </span>
            </span>
            <p className="text-gray-300 text-m"> <br></br>That's how we take care of your information.</p>
          </div>

                    <div className="relative w-80 p-6 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg overflow-hidden transition-transform-shadow duration-500 ease-in-out hover:scale-y-100 hover:translate-y-[-13px]   hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-white/10 blur-xl transform rotate-12"></div>
            </div>

            <h3 className="text-gray-100 text-xl font-semibold mb-4"> <i class="fa-solid fa-bolt mr-[10px]" style={{ opacity: 0.7}}></i>Reliable</h3>

            <p className="text-gray-300 text-m">
              
              Built with modern languages such as React and Electron which grant a pleasant experience for the users.
            </p>
                      <img 
            src="/react.png" 
            className=" w-full h-full object-cover blur-[6px] scale-x-125 scale-y-80 select-none pointer-events-none " />  
          </div>

                    <div className="relative w-80 p-6 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg overflow-hidden transition-transform-shadow duration-500 ease-in-out hover:scale-y-100 hover:translate-y-[-13px]   hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-white/10 blur-xl transform rotate-12"></div>
            </div>

            <h3 className="text-gray-100 text-xl font-semibold mb-4"> <i class="fa-solid fa-globe mr-[10px]" style={{ opacity: 0.7}}></i>Connect Anywhere</h3>

            <p className="text-gray-300 text-m">
              Works across devices, keeping your chats synced without compromising security.
            </p>
          <img 
            src="/globe.png" 
            className="w-full h-full object-cover blur-[2px] scale-x-125 scale-y-80 select-none pointer-events-none" />          
          </div>
                    <div className="relative w-80 p-6 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg overflow-hidden transition-transform-shadow duration-500 ease-in-out hover:scale-y-100 hover:translate-y-[-13px]   hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-white/10 blur-xl transform rotate-12"></div>
            </div>

            <h3 className="text-gray-100 text-xl font-semibold mb-4"> <i class="fa-solid fa-user-shield mr-[10px]" style={{ opacity: 0.7}}></i>Privacy First</h3>

            <p className="text-gray-300 text-m">
              We don’t track you, sell data, or store keys. Your conversations belong only to you.
            </p>
          {/* <img 
            src="" 
            className="w-full h-full object-cover blur-[2px] scale-x-125 scale-y-80 " />           */}
            
          </div>
        </div>
      </div>
    <h1 className="text-white text-2xl [text-shadow:0_0_8px_rgba(255,255,255,0.5)] mt-[100px]">
      More in the safety page
    </h1>
    </main>
  );
}

export default LearnMore;

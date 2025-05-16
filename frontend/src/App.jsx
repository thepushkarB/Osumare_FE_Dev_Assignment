

function App() {

  return (
    <div className="w-screen h-[100px">
      {/* navbar */}
      <div className="flex flex-row justify-center items-center">

        {/* logo */}
        <div className="flex items-start pr-16">
          <img src="/logo.png" alt="log img"
           className="w-[170px] h-[100px] object-cover"/>
        </div>

        {/* pages */}
        <div className="flex ml-40 mr-14 items-end gap-8">
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">More Option</a>
          <a href="">Contact</a>
        </div>
        
        {/* buttons */}
        {/* <div className="w-[130px] h-[44px] flex ml-4 gap-3 border-2 border-amber-400"> */}
        <div className="w-auto h-[44px] flex gap-3.5">
          <button className="border-1 rounded-md border-rose-500 text-rose-500 px-9 cursor-pointer">Log In</button>
          <button className="text-white rounded-md peachRed px-9 cursor-pointer">Sign Up</button>
        </div>
      </div>

      {/* hero-section */}
      <div className=" bg-gray-100 w-screen h-[1131px] flex flex-col items-center">
        {/* heading */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-auto font-extrabold text-5xl/snug text-center mt-7">Simplify Your Life with<br/> Our Todo App</h1>

          <p className="text-slate-500 mt-6 mb-1 text-center">Stay organized and boost your productivity with our intuitive todo website.<br/> Experience a modern approach to task management that fits your lifestyle.</p>
        </div>

        {/* buttons */}
        <div className="w-auto h-[44px] flex justify-center my-4 gap-3.5">
          <button className="text-white rounded-full peachRed peachRedHover px-9 cursor-pointer transition ease-in-out duration-100"> Get Started</button>
          <button className="rounded-full border-rose-500 text-rose-500 px-9 cursor-pointer">Learn More</button>
        </div>

        {/* rectangle */}
        {/* <div className="w-2/3 h-[640px] border-1 border-sky-400 mt-8"> */}
        <div className="w-[1100px] h-[auto] flex mt-10">
          {/* big Card */}
          <div className="w-2/3 h-full peachRed rounded-3xl p-11 pb-7">
            {/* big texts */}
            <h1 className="text-[80px] leading-20 text-white/50 ">Organize.</h1>
            <h1 className="text-[80px] leading-20 text-white/80 ">Achieve.</h1>
            <h1 className="text-[80px] leading-20 text-white/80 ">Relax.</h1>

            <p className="text-[20px] text-white/80 mt-11 font-light">Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
            
            {/* buttons */}
            <div className="w-auto h-[44px] flex justify-start my-4 gap-3.5 mt-[75px]">
              <button className="text-black bg-slate-50 rounded-full px-9 cursor-pointer text-sm"> Get Started Today</button>
              <button className="rounded-full bg-rose-400 text-slate-50 px-9 cursor-pointer text-sm">Discover Features</button>
            </div>
          </div>

          {/* small Card */}
          <div className="w-[45%] h-[auto] ml-4 rounded-3xl overflow-hidden relative shadow-lg">
            <img
              src="/smCard.png"
              alt="testimonial"
              className="w-full h-full object-cover"
            />
            
            {/* resish hue overlay */}
            <div className="absolute inset-0 bg-rose-500/40 mix-blend-multiply"></div>

            {/* White bottom gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

            <div className="absolute inset-0 bg-rose-100/10 px-8 py-6 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-semibold">
                  <span className="text-white/60">Your Tasks.</span>
                  <br />
                  Our Tools.
                </h2>
              </div>

              {/* Three dots */}
              <div className="absolute top-8 right-5 flex space-x-2 z-30">
                <div className="h-3 w-3 rounded-full bg-white/80"></div>
                <div className="h-3 w-3 rounded-full border border-white/80"></div>
                <div className="h-3 w-3 rounded-full border border-white/80"></div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <img src="/logoipsum.png" alt="logo" className="h-7 mb-4" />

                  <p className="text-[20px] text-black mt-2 font-light leading-5">
                    Freddie Halvorson<br /><span className="text-xs text-black/60 font-light">Chief Productivity Enthusiast</span>
                  </p>
                </div>
                <button className="h-[50px] w-[50px] ml-auto bg-black text-whilte p-3.5 rounded-full shadow-lg text-center">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
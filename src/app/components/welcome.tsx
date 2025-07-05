export default function Welcome() {
    return(
           <div className="min-h-screen overflow-hidden pt-20 bg-black text-white relative flex flex-col items-center">
      
      <div className="text-center font-bold px-4">
        <h1 className="text-3xl drop-shadow-[0_0_10px_white]">Welcome To</h1>
        <h1 className="text-5xl text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] mt-2">
          Dev - Book
        </h1>
        <h2 className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          A collection of everything I’ve learned
        </h2>
      </div>
      
      <div className="mt-10 text-center max-w-3xl px-6">
        <h2 className="text-2xl font-semibold mb-2 text-white drop-shadow-[0_0_5px_cyan]">
          Why I Built Dev - Book
        </h2>
        <h3 className="text-gray-300 font-bold leading-relaxed">
          As I learn, I build. As I build, I forget. Dev-Book is my way of documenting everything — so I never lose track of my dev journey.
          It's also a place for other devs to learn real-world things, just raw code and logic.
        </h3>
      </div>

        <div className="absolute bottom-0 left-1/3 transform  -translate-x-1/4">
           <img src="/homepic.png" alt="UI" className="drop-shadow-[10px_-40px_50px_rgba(0,200,255,0.5)]" />
        </div>
        
        </div>
    );
}
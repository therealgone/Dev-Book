export default function Welcome() {
    return(
           <div className="min-h-screen overflow-hidden pt-20 bg-dark text-white relative flex flex-col items-center">
      
      <div className="text-center font-bold px-4 tracking-wider">
        <h1 className="text-6xl drop-shadow-[0_0_2px_white] tracking-widest">Welcome To</h1>
        <h1 className="text-7xl text-[#007ACC]  text-shadow-[0_0_10px_#007ACC] mt-4">
          Dev-Book
        </h1>
        <h2 className="text-3xl  text-shadow-[0_0_2px_white] mt-4">
          A collection of everything I’ve learned
        </h2>
      </div>
      
      <div className="mt-10 text-center max-w-3xl px-6">
       
        <h3 className="text-gray-300 font-bold leading-relaxed">
          As I learn, I build. As I build, I forget. Dev-Book is my way of documenting everything — so I never lose track of my dev journey.
          It's also a place for other devs to learn real-world things, just raw code and logic.
        </h3>
      </div>

        <div className="absolute bottom-0 left-1/4 transform  -translate-x-1/6  ">
           <img src="/homepic.png" alt="UI" className="drop-shadow-[0_0_30px_#007ACC] drop-shadow-[0_0_60px_#007ACC]" />
        </div>
        
        </div>
    );
}
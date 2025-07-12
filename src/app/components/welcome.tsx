/**
 * Welcome Component
 * 
 * This is the hero section of the Dev-Book website. It serves as the main landing page
 * that introduces visitors to the project and its purpose.
 * 
 * Features:
 * - Large, bold typography with glowing text effects
 * - Centered layout with proper spacing
 * - Background image positioned at the bottom
 * - Responsive design for different screen sizes
 * 
 * @component
 * @returns {JSX.Element} The welcome section with title, subtitle, and description
 */
export default function Welcome() {
    return(
        <div className="min-h-screen overflow-hidden pt-20 bg-dark text-white relative flex flex-col items-center">
        
          {/* Main Title Section */}
          <div className="text-center font-bold px-4 tracking-wider">
            {/* Primary Welcome Text */}
            <h1 className="text-6xl drop-shadow-[0_0_2px_white] tracking-widest">
              Welcome To 
            </h1>
            
            {/* Main Brand Name with Blue Glow Effect */}
            <h1 className="text-7xl text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mt-4">
              Dev - Book
            </h1>
            
            {/* Subtitle with Subtle Glow */}
            <h2 className="text-3xl text-shadow-[0_0_2px_white] mt-4">
              A collection of everything I&apos;ve learned
            </h2>
          </div>
       
          {/* Description Section */}
          <div className="mt-10 text-center max-w-3xl px-6">
            {/* Project Description */}
            <h3 className="text-gray-300 font-bold leading-relaxed">
              As I learn, I build. As I build, I forget. Dev-Book is my way of documenting everything — so I never lose track of my dev journey.
              It&apos;s also a place for other devs to learn real-world things, just raw code and logic.
            </h3>
          </div>

          {/* Background Image Section */}
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/6">
            {/* Hero Image with Blue Glow Effect */}
            <img 
              src="/homepic.png" 
              alt="UI" 
              className="drop-shadow-[0_0_30px_#007ACC] drop-shadow-[0_0_60px_#007ACC]" 
            />
          </div>
        
        </div>
    );
}
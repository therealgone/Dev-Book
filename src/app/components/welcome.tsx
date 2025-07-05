export default function Welcome() {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center section-padding relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="text-center z-10 animate-fade-in">
          <div className="mb-8">
            <h1 className="heading-primary mb-4">Welcome To</h1>
            <h1 className="heading-primary text-gradient mb-6">Dev - Book</h1>
            <h2 className="heading-tertiary text-gray-300">A collection of everything I've learned</h2>
          </div>
        </div>
       
        <div className="glass-effect-strong rounded-3xl p-8 max-w-4xl mx-auto z-10 animate-slide-up">
          <h2 className="heading-secondary mb-6 text-center text-gradient-accent">Why I Built Dev - Book</h2>
          <p className="text-body text-center leading-relaxed">
            As I learn, I build. As I build, I forget. Dev-Book is my way of documenting everything — so I never lose track of my dev journey. It's also a place for other devs to learn real-world things, just raw code and logic
          </p>
        </div>
        
        </div>
    );
}
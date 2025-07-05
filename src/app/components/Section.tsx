import React from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-20 px-4 ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {id === "welcome" ? "Welcome" : "Feature"}
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div className="section-fade-in" style={{ animationDelay: "0.2s" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Add fade-in animation
// In globals.css, add:
// .fade-in-section { opacity: 0; transform: translateY(40px); animation: fadeInUp 0.8s forwards; }
// @keyframes fadeInUp { to { opacity: 1; transform: none; } } 
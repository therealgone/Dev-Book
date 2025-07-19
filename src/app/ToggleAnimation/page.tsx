"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * Toggle Animation Example
 *
 * Demonstrates a toggle switch animation using Framer Motion in React.
 *
 * Features:
 * - Animated toggle switch with spring transition
 * - State management for toggle on/off
 *
 * Learning Concepts Demonstrated:
 * - useState for toggle state
 * - Framer Motion's motion.div for animation
 * - Spring-based layout animation
 * - Conditional class application
 *
 * @component
 * @returns {JSX.Element} Toggle switch with animation
 */
import { motion } from "framer-motion";
import { useState } from "react";

export default function ToggleAnimation() {
  // State for toggle switch
  const [isOn, setIsOn] = useState(false);

  // Toggle handler
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[350px] h-[350px] bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
        {/* Toggle switch with animated knob */}
        <button
          className={"w-[150px] h-[70px] bg-[#007ACC] rounded-full flex items-center transition-all ${"isOn ? justify-start : justify-end"}"}
          onClick={toggle}
        >
          <motion.div
            layout
            className="w-[68px] h-[68px] bg-white rounded-full"
            transition={{ type: "spring", duration: 0.4, bounce: 0.4 }}
          />
        </button>
      </div>
    </div>
  );
}
`;

function ToggleAnimationCode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Toggle Animation Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates a toggle switch animation using Framer Motion in React, with detailed comments for learning.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{margin:0,borderRadius:'1rem',fontSize:'14px',lineHeight:'1.7'}}>{codeString}</SyntaxHighlighter>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => window.history.back()} className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">← Back to Components</button>
        </div>
      </div>
    </div>
  );
}

export default ToggleAnimationCode; 
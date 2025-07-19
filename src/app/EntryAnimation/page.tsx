"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * Animation Component
 *
 * Demonstrates various UI animation techniques using Framer Motion in React.
 * Includes entry animation, toggle animation, hover/click effects, and text open animation.
 *
 * Features:
 * - Entry animation with reload
 * - Toggle switch animation
 * - Hover and click scaling animation
 * - Animated text reveal with shape morph
 *
 * Learning Concepts Demonstrated:
 * - useState for animation state
 * - Framer Motion's motion components
 * - Animation props: initial, animate, transition, whileHover, whileTap
 * - Conditional rendering and event handling
 *
 * @component
 * @returns {JSX.Element} Animated UI examples
 */
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Animation() {
  // State for reloading entry animation
  const [relaodAnimation, setReloadAnimation] = useState(0);
  // State for toggle switch
  const [isOn, setIsOn] = useState(false);
  // State for text open animation
  const [dom, setDom] = useState(false);

  // Toggle switch handler
  const toggle = () => {
    setIsOn(!isOn);
  };

  // Reload entry animation handler
  const reanimation = () => {
    setReloadAnimation(prev => prev + 1);
  };

  return (
    <div className="min-h-screen tracking-wide">
      {/* Entry Animation Example */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
        <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4">
          Show Code
        </button>
        <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Entry Animation</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[350px] h-[350px] bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
            {/* Animated box appears with scale and opacity transition */}
            <motion.h1
              key={relaodAnimation}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1, ease: "easeInOut", scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 } }}
              className="w-[150px] h-[150px] bg-[#007ACC] rounded-2xl"
            />
          </div>
          {/* Reload button triggers reanimation by changing key */}
          <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-4" onClick={reanimation}>
            RELOAD
          </button>
        </div>
      </div>

      {/* Toggle Animation Example */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
        <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4">
          Show Code
        </button>
        <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Toggle Animation</h2>
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
      </div>

      {/* Hover & Click Animation Example */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
        <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4">
          Show Code
        </button>
        <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Hover & Click Animation</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[350px] h-[350px] bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
            {/* Box scales up on hover and down on click */}
            <motion.div
              className="w-[150px] h-[150px] bg-[#007ACC] rounded-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Text Open Animation Example */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
        <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4">
          Show Code
        </button>
        <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Text Open Animation</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[350px] h-[350px] bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
            {/* Animated shape morphs and reveals text on click */}
            <motion.div
              layout
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
              className={"bg-[#007ACC] flex flex-col justify-center items-center ${"dom?  w-[200px] h-[200px] rounded-2xl : w-[150px] h-[150px] rounded-full"}"}
              onClick={() => setDom(!dom)}
            >
              <motion.span
                className="text-2xl text-center"
                key={dom ? "click" : "welcome"}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
              >
                {dom ? (
                  <>Welcome<br />to<br />Dev-Book</>
                ) : (
                  <>Click<br />Me</>
                )}
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

function AnimationCode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Animation Component Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates various UI animation techniques using Framer Motion in React, with detailed comments for learning.</p>
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

export default AnimationCode; 
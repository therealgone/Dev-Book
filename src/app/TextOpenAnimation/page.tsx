"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * Text Open Animation Example
 *
 * Demonstrates a shape-morphing and text-revealing animation using Framer Motion in React.
 *
 * Features:
 * - Animated shape morphs between circle and square
 * - Text content changes and animates in/out
 * - Click to toggle between states
 *
 * Learning Concepts Demonstrated:
 * - useState for toggling state
 * - Framer Motion's motion.div and motion.span
 * - layout, initial, animate, exit, and transition props
 * - Conditional rendering and event handling
 *
 * @component
 * @returns {JSX.Element} Animated shape and text reveal
 */
import { motion } from "framer-motion";
import { useState } from "react";

export default function TextOpenAnimation() {
  // State for toggling shape and text
  const [dom, setDom] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[350px] h-[350px] bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
        {/* Animated shape morphs and reveals text on click */}
        <motion.div
          layout
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          className={"bg-[#007ACC] flex flex-col justify-center items-center ${"dom ? w-[200px] h-[200px] rounded-2xl : w-[150px] h-[150px] rounded-full"}}
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
  );
}
`;

function TextOpenAnimationCode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Text Open Animation Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates a shape-morphing and text-revealing animation using Framer Motion in React, with detailed comments for learning.</p>
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

export default TextOpenAnimationCode; 
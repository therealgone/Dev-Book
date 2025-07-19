"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * Hover & Click Animation Example
 *
 * Demonstrates scaling animation on hover and click using Framer Motion in React.
 *
 * Features:
 * - Box scales up on hover
 * - Box scales down on click (tap)
 * - Smooth transition for user feedback
 *
 * Learning Concepts Demonstrated:
 * - Framer Motion's motion.div for animation
 * - whileHover and whileTap props
 * - Custom transition duration
 *
 * @component
 * @returns {JSX.Element} Animated box with hover and click effects
 */
import { motion } from "framer-motion";

export default function HoverClickAnimation() {
  return (
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
  );
}
`;

function HoverClickAnimationCode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Hover & Click Animation Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates scaling animation on hover and click using Framer Motion in React, with detailed comments for learning.</p>
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

export default HoverClickAnimationCode; 
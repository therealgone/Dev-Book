"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `/**
 * Text Limiter Component
 * 
 * A text analysis tool that demonstrates string manipulation, word counting,
 * and character limit validation. This component showcases real-time text
 * processing and user input validation with visual feedback.
 * 
 * Features:
 * - Real-time word counting
 * - Character counting
 * - Custom character limit setting
 * - Limit exceeded warnings
 * - Clear functionality to reset all data
 * - Input validation and processing
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for managing multiple text states
 * - Real-time input processing with onChange events
 * - String manipulation (split, filter, trim)
 * - Array methods for word counting
 * - Conditional rendering for warnings
 * - Form validation and user feedback
 * - Number conversion and validation
 * 
 * @component
 * @returns {JSX.Element} Text analysis tool with word/character counting and limit validation
 */
import { useState } from "react";

export default function Text() {
    const [limit, setLimit] = useState("")
    const [text, setText] = useState(0)
    const [len, setLen] = useState(0)

    const handelinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value)
        const a = limit.trim().split(" ").filter(word => word !== "").length
        setText(a);
    }

    const handelLen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLen(Number(e.target.value))
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Text Limiter
            </h1>
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Character & Word Counter</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-300 text-lg mb-2">Enter your text:</label>
                            <input 
                                type="text"
                                value={limit}
                                onChange={handelinput}
                                placeholder="Type your text here..."
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-lg mb-2">Set character limit:</label>
                            <input
                                type="number"
                                value={len}
                                onChange={handelLen}
                                placeholder="Enter limit..."
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                            <div className="grid grid-cols-2 gap-6 text-center mb-4">
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Words</p>
                                    <p className="text-3xl font-bold text-white">{text}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Characters</p>
                                    <p className="text-3xl font-bold text-white">{limit.length}</p>
                                </div>
                            </div>
                            {limit.length > len && len > 0 && (
                                <div className="text-center">
                                    <span className="text-red-400 text-lg font-semibold">⚠️ Limit exceeded!</span>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <button 
                                onClick={() => { setLimit(""); setText(0); }}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                                Clear All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}`;

export default function TextLimitCode() {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Text Limiter Component Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates a text analysis tool with word/character counting and limit validation in React.</p>
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
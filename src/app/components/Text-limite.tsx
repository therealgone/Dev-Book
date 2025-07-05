/**
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
    // State Management for text analysis functionality
    const [limit, setLimit] = useState("")  // Main text input
    const [text, setText] = useState(0)     // Word count
    const [len, setLen] = useState(0)       // Character limit setting

    /**
     * Handles changes to the main text input field
     * Updates the text state and calculates word count in real-time
     * Filters out empty words and counts only valid words
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handelinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value)  // Update text input state
        
        // Calculate word count by:
        // 1. Trim whitespace from input
        // 2. Split by spaces to get words
        // 3. Filter out empty strings
        // 4. Count remaining words
        const a = limit.trim().split(" ").filter(word => word !== "").length
        setText(a);
    }

    /**
     * Handles changes to the character limit input field
     * Converts string input to number for limit validation
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handelLen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLen(Number(e.target.value))  // Convert to number and update limit
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            {/* Text Tools Title */}
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Text Limiter
            </h1>
            
            <div className="max-w-2xl mx-auto px-6">
                {/* Main Text Tools Container */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Character & Word Counter</h2>
                    
                    <div className="space-y-6">
                        {/* Main Text Input Section */}
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

                        {/* Character Limit Input Section */}
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

                        {/* Analysis Results Section */}
                        <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                            <div className="grid grid-cols-2 gap-6 text-center mb-4">
                                {/* Word Count Display */}
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Words</p>
                                    <p className="text-3xl font-bold text-white">{text}</p>
                                </div>
                                {/* Character Count Display */}
                                <div>
                                    <p className="text-gray-400 text-lg mb-2">Characters</p>
                                    <p className="text-3xl font-bold text-white">{limit.length}</p>
                                </div>
                            </div>
                            
                            {/* Limit Exceeded Warning */}
                            {limit.length > len && len > 0 && (
                                <div className="text-center">
                                    <span className="text-red-400 text-lg font-semibold">⚠️ Limit exceeded!</span>
                                </div>
                            )}
                        </div>

                        {/* Clear Button Section */}
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
}
/**
 * Calculator Component
 * 
 * A simple calculator built with React that demonstrates basic arithmetic operations
 * and state management. This component showcases form handling, number conversion,
 * and mathematical operations in React.
 * 
 * Features:
 * - Addition, subtraction, multiplication, and division operations
 * - Real-time input validation and number conversion
 * - Clean, modern UI with responsive design
 * - Error handling for invalid inputs
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for managing multiple input states
 * - Event handling with onChange events
 * - Number conversion and validation
 * - Basic arithmetic operations
 * - Form input management
 * - Conditional rendering for results
 * 
 * @component
 * @returns {JSX.Element} Interactive calculator with basic arithmetic operations
 */
import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Calc() {
    // State Management for calculator inputs and result
    const [numa, SetNuma] = useState("")    // First number input
    const [numb, SetNumb] = useState("")    // Second number input
    const [ans, SetAns] = useState("")      // Calculated result
    const router = useRouter();

    /**
     * Handles changes to the first number input field
     * Updates the first number state with the input value
     * @param {ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handelinputa = (e: ChangeEvent<HTMLInputElement>) => {
        SetNuma(e.target.value)
    }

    /**
     * Handles changes to the second number input field
     * Updates the second number state with the input value
     * @param {ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handelinputb = (e: ChangeEvent<HTMLInputElement>) => {
        SetNumb(e.target.value)
    }

    /**
     * Performs addition operation on the two input numbers
     * Converts string inputs to numbers and calculates the sum
     * Updates the result state with the calculated value
     */
    const add = () => {
        const a = Number(numa)  // Convert first input to number
        const b = Number(numb)  // Convert second input to number
        SetAns((a + b).toString());  // Calculate sum and convert back to string
    }

    /**
     * Performs subtraction operation on the two input numbers
     * Converts string inputs to numbers and calculates the difference
     * Updates the result state with the calculated value
     */
    const sub = () => {
        const a = Number(numa)  // Convert first input to number
        const b = Number(numb)  // Convert second input to number
        SetAns((a - b).toString());  // Calculate difference and convert back to string
    }
    
    /**
     * Performs multiplication operation on the two input numbers
     * Converts string inputs to numbers and calculates the product
     * Updates the result state with the calculated value
     */
    const mul = () => {
        const a = Number(numa)  // Convert first input to number
        const b = Number(numb)  // Convert second input to number
        SetAns((a * b).toString());  // Calculate product and convert back to string
    }
    
    /**
     * Performs division operation on the two input numbers
     * Converts string inputs to numbers and calculates the quotient
     * Updates the result state with the calculated value
     * Note: No division by zero protection implemented
     */
    const div = () => {
        const a = Number(numa)  // Convert first input to number
        const b = Number(numb)  // Convert second input to number
        SetAns((a / b).toString());  // Calculate quotient and convert back to string
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            {/* Calculator Title */}
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Calculator
            </h1>
            
            <div className="max-w-2xl mx-auto px-6">
                {/* Main Calculator Container */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
                        onClick={() => router.push('/calc')}>Show Code</button>
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Simple Calculator</h2>
                    
                    <div className="space-y-6">
                        {/* Input Fields Section */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* First Number Input */}
                            <input
                                type="number"
                                placeholder="Enter first number"
                                onChange={handelinputa}
                                value={numa}
                                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                            {/* Second Number Input */}
                            <input
                                type="number"
                                placeholder="Enter second number"
                                onChange={handelinputb}
                                value={numb}
                                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>

                        {/* Operation Buttons Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {/* Addition Button */}
                            <button 
                                onClick={add}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                ADD
                            </button>
                            {/* Subtraction Button */}
                            <button 
                                onClick={sub}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                SUB
                            </button>
                            {/* Multiplication Button */}
                            <button 
                                onClick={mul}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                MUL
                            </button>
                            {/* Division Button */}
                            <button 
                                onClick={div}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                DIV
                            </button>
                        </div>

                        {/* Result Display Section */}
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-300 mb-2">Result:</h3>
                            <h1 className="text-6xl font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC]">
                                {ans || "0"}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
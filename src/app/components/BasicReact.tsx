/**
 * BasicReact Component
 * 
 * A comprehensive React fundamentals playground that demonstrates core React concepts
 * including state management, event handling, conditional rendering, and user interactions.
 * 
 * Features:
 * - Counter with increment and reset functionality
 * - Real-time input display
 * - Show/Hide conditional rendering
 * - Theme toggle (dark/light background)
 * - Todo list with add/delete functionality
 * - Color picker with dynamic background changes
 * 
 * Learning Concepts Demonstrated:
 * - useState hook for state management
 * - Event handlers (onClick, onChange, onKeyDown)
 * - Conditional rendering with && operator
 * - Array manipulation (filter, spread operator)
 * - Dynamic styling with conditional classes
 * - Form handling and input validation
 * 
 * @component
 * @returns {JSX.Element} Interactive React fundamentals playground
 */
"use client";

import { useState } from "react";

export default function BasicReact() {
    // State Management for different features
    const [count, setCount] = useState(0);           // Counter state
    const [input, SetInput] = useState("");          // Input field state
    const [show, SetShow] = useState(false);         // Show/Hide toggle state
    const [mode, SetMode] = useState(false);         // Theme toggle state
    const [todo, SetTodo] = useState<string[]>([]);  // Todo list array state
    const [color, SetColor] = useState("");          // Color picker state

    /**
     * Handles input field changes and updates the input state
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handelinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetInput(e.target.value)
    }

    /**
     * Handles Enter key press in input fields to trigger todo addition
     * @param {React.KeyboardEvent<HTMLInputElement>} e - Keyboard event
     */
    const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            Addtodo();
        }
    }

    /**
     * Toggles the theme between light and dark modes
     * Changes the background gradient of the component
     */
    const handelbg = () => {
        SetMode(!mode)
    }

    /**
     * Increments the counter by 1
     * Demonstrates basic state updates
     */
    const handelclick = () => {
        setCount(count + 1);
    }

    /**
     * Adds a new todo item to the list
     * Validates that input is not empty before adding
     * Clears the input field after adding
     */
    const Addtodo = () => {
        if (input.trim() === "")
            return;
        SetTodo([...todo, input])  // Spread operator to add new item
        SetInput("");              // Clear input field
    }

    /**
     * Removes a todo item by its index
     * Uses filter to create a new array without the specified item
     * @param {number} index - Index of the todo item to delete
     */
    const handeldelete = (index: number) => {
        const update = todo.filter((_, i) => i !== index);
        SetTodo(update)
    }

    /**
     * Placeholder function for clearing all todos
     * Can be implemented to clear the entire todo list
     */
    const DeleteAll = () => {
        // Logic for delete all - can be implemented as needed
    }

    return (
        <div className={`min-h-screen text-white pt-20 transition-all duration-300 ${
            mode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-transparent'
        }`}>
            {/* Component Title */}
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                React Ground Zero
            </h1>
            
            <div className="max-w-4xl mx-auto px-6 space-y-12">
                {/* Counter Section - Demonstrates basic state updates */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Counter</h2>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <button
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            onClick={handelclick}>
                            ADD
                        </button>
                        <button
                            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            onClick={() => setCount(0)}>
                            Clear
                        </button>
                    </div>
                    <h1 className="text-6xl text-center font-bold text-white">{count}</h1>
                </div>

                {/* Input Display Section - Shows real-time state updates */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Input Display</h2>
                    <div className="flex flex-col items-center gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={handelinput}
                            placeholder="Enter text here..."
                            className="w-full max-w-md px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                        />
                        <h1 className="text-2xl font-semibold text-gray-300">{input}</h1>
                    </div>
                </div>

                {/* Show/Hide Section - Demonstrates conditional rendering */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Show/Hide</h2>
                    <div className="flex flex-col items-center gap-4">
                        <button
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            onClick={() => SetShow(!show)}>
                            {show ? "HIDE" : "SHOW"}
                        </button>
                        {/* Conditional rendering using && operator */}
                        {show && (
                            <h1 className="text-2xl font-semibold text-[#007ACC] text-shadow-[0_0_5px_#007ACC]">
                                THIS IS SECRET TEXT
                            </h1>
                        )}
                    </div>
                </div>

                {/* Theme Toggle Section - Dynamic styling based on state */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Theme Toggle</h2>
                    <div className="flex justify-center">
                        <button
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            onClick={handelbg}>
                            {mode ? "Light Theme" : "Dark Theme"}
                        </button>
                    </div>
                </div>

                {/* Todo List Section - Array manipulation and CRUD operations */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Todo List</h2>
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <input
                            type="text"
                            value={input}
                            onChange={handelinput}
                            onKeyDown={Enter}
                            placeholder="Add a new todo..."
                            className="w-full max-w-md px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                        />
                        <button 
                            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            onClick={Addtodo}>
                            Add Todo
                        </button>
                    </div>
                    
                    {/* Todo items list with delete functionality */}
                    <div className="space-y-2">
                        {todo.map((item, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                                <span className="text-white font-medium">{item}</span>
                                <button 
                                    className="text-red-400 hover:text-red-300 transition-colors"
                                    onClick={() => handeldelete(index)}>
                                    ❌
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Color Changer Section - Dynamic styling with conditional classes */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Color Changer</h2>
                    <div className="flex flex-col items-center gap-6">
                        {/* Color display box with dynamic background */}
                        <div className={`w-64 h-64 border-2 border-gray-600 rounded-xl transition-colors
                            ${color === "red" ? "bg-red-500" : ""}
                            ${color === "green" ? "bg-green-500" : ""}
                            ${color === "blue" ? "bg-blue-500" : ""}
                            ${color === "orange" ? "bg-orange-500" : ""}
                            ${color === "purple" ? "bg-purple-600" : ""}
                            ${!color ? "bg-gray-700" : ""}
                        `} />
                        
                        {/* Color selection buttons */}
                        <div className="flex flex-wrap justify-center gap-2">
                            <button 
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                onClick={() => SetColor("red")}>RED</button>
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                onClick={() => SetColor("green")}>GREEN</button>
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                onClick={() => SetColor("blue")}>BLUE</button>
                            <button 
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                onClick={() => SetColor("orange")}>ORANGE</button>
                            <button 
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                                onClick={() => SetColor("purple")}>PURPLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



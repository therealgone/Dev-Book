import { ChangeEvent, useState } from "react";

export default function calc() {

    const [numa, SetNuma] = useState("")
    const [numb, SetNumb] = useState("")
    const [ans, SetAns] = useState("")

    const handelinputa = (e: ChangeEvent<HTMLInputElement>) => {
        SetNuma(e.target.value)
    }

    const handelinputb = (e: ChangeEvent<HTMLInputElement>) => {
        SetNumb(e.target.value)
    }

    const add = () => {
        const a = Number(numa)
        const b = Number(numb)
        SetAns((a + b).toString());
    }

    const sub = () => {
        const a = Number(numa)
        const b = Number(numb)
        SetAns((a - b).toString());
    }
    
    const mul = () => {
        const a = Number(numa)
        const b = Number(numb)
        SetAns((a * b).toString());
    }
    
    const div = () => {
        const a = Number(numa)
        const b = Number(numb)
        SetAns((a / b).toString());
    }

    return (
        <div className="min-h-screen bg-dark text-white pt-20">
            <h1 className="text-7xl text-center font-bold text-[#007ACC] text-shadow-[0_0_10px_#007ACC] mb-16">
                Calculator
            </h1>
            
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-[#007ACC] mb-8 text-center">Simple Calculator</h2>
                    
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="number"
                                placeholder="Enter first number"
                                onChange={handelinputa}
                                value={numa}
                                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                            <input
                                type="number"
                                placeholder="Enter second number"
                                onChange={handelinputb}
                                value={numb}
                                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button 
                                onClick={add}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                ADD
                            </button>
                            <button 
                                onClick={sub}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                SUB
                            </button>
                            <button 
                                onClick={mul}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                MUL
                            </button>
                            <button 
                                onClick={div}
                                className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                DIV
                            </button>
                        </div>

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
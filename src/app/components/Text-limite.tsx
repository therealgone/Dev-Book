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
}
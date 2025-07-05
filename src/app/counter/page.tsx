/**
 * Counter Code Page
 * 
 * Displays the source code for the Counter component with syntax highlighting.
 * This page shows how to implement a basic counter using React hooks.
 * 
 * @component
 * @returns {JSX.Element} Code display page for the Counter component
 */
"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CounterCode() {
  const codeString = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handelclick() {
    setCount(count + 1);
  }

  return (
    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
      <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Counter</h2>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          onClick={handelclick}
        >
          ADD
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          onClick={() => setCount(0)}
        >
          Clear
        </button>
      </div>
      <h1 className="text-6xl text-center font-bold text-white">{count}</h1>
    </div>
  );
}`;

  return (
    <div className="min-h-screen  text-white pt-20">
      <div className="max-w-9xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Counter Component Code</h1>
          <p className="text-gray-300 text-lg">
            This demonstrates basic React state management using the useState hook.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <SyntaxHighlighter 
            language="tsx" 
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: '1rem',
              fontSize: '2px',
              lineHeight: '1.9'
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.history.back()}
            className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            ← Back to Components
          </button>
        </div>
      </div>
    </div>
  );
} 
"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ColorChangerCode() {
  const codeString = `const [color, setColor] = useState("");

<div className={\`w-64 h-64 border-2 border-gray-600 rounded-xl transition-colors
  \${color === "red" ? "bg-red-500" : ""}
  \${color === "green" ? "bg-green-500" : ""}
  \${color === "blue" ? "bg-blue-500" : ""}
  \${color === "orange" ? "bg-orange-500" : ""}
  \${color === "purple" ? "bg-purple-600" : ""}
  \${!color ? "bg-gray-700" : ""}
\`} />

<button onClick={() => setColor("red")}>RED</button>
<button onClick={() => setColor("green")}>GREEN</button>
<button onClick={() => setColor("blue")}>BLUE</button>
<button onClick={() => setColor("orange")}>ORANGE</button>
<button onClick={() => setColor("purple")}>PURPLE</button>`;

  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Color Changer Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates dynamic styling and conditional classes in React.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{margin:0,borderRadius:'1rem',fontSize:'16px',lineHeight:'1.7'}}>{codeString}</SyntaxHighlighter>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => window.history.back()} className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">← Back to Components</button>
        </div>
      </div>
    </div>
  );
} 
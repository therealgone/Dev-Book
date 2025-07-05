"use client";

export default function StopwatchCode() {
  const codeString =
    'import { useEffect, useState } from "react";\n' +
    '\n' +
    'export default function Stopwatch() {\n' +
    '  const [time, setTime] = useState(0);\n' +
    '  const [isRunning, setIsRunning] = useState(false);\n' +
    '\n' +
    '  useEffect(() => {\n' +
    '    if (!isRunning) return;\n' +
    '    const interval = setInterval(() => {\n' +
    '      setTime(prev => prev + 1);\n' +
    '    }, 1000);\n' +
    '    return () => clearInterval(interval);\n' +
    '  }, [isRunning]);\n' +
    '\n' +
    '  const handleReset = () => setTime(0);\n' +
    '  const min = Math.floor(time / 60);\n' +
    '  const sec = time % 60;\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Stopwatch</h1>\n' +
    '      <div>\n' +
    '        <h2>Timer</h2>\n' +
    '        <div>\n' +
    '          <h1>{min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}</h1>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '          <button\n' +
    '            onClick={() => setIsRunning(!isRunning)}\n' +
    '          >\n' +
    '            {isRunning ? "Stop" : "Start"}\n' +
    '          </button>\n' +
    '          <button onClick={handleReset}>Reset</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  );\n' +
    '}\n';

  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Stopwatch Component Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates a functional stopwatch with start, stop, and reset in React.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 overflow-x-auto">
          <pre className="text-sm leading-6 whitespace-pre-wrap"><code>{codeString}</code></pre>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => window.history.back()} className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold transition-colors">← Back to Components</button>
        </div>
      </div>
    </div>
  );
}
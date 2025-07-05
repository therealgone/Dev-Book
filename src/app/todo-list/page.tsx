"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TodoListCode() {
  const codeString = `const [todo, setTodo] = useState<string[]>([]);
const [input, setInput] = useState("");

function addTodo() {
  if (input.trim() === "") return;
  setTodo([...todo, input]);
  setInput("");
}

function deleteTodo(index: number) {
  setTodo(todo.filter((_, i) => i !== index));
}

<input
  type="text"
  value={input}
  onChange={e => setInput(e.target.value)}
  onKeyDown={e => e.key === "Enter" && addTodo()}
  placeholder="Add a new todo..."
/>
<button onClick={addTodo}>Add Todo</button>
{todo.map((item, index) => (
  <div key={index}>
    <span>{item}</span>
    <button onClick={() => deleteTodo(index)}>❌</button>
  </div>
))}`;

  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007ACC] mb-4">Todo List Code</h1>
          <p className="text-gray-300 text-lg">This demonstrates array manipulation and CRUD operations in React.</p>
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
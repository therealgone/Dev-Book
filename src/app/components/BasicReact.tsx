"use client";

import { useState } from "react";

export default function BasicReact() {
    const [count, setCount] = useState(0);
    const [input, SetInput] = useState("");
    const [show, SetShow] = useState(false)
    const [mode, SetMode] = useState(false)
    const [todo, SetTodo] = useState<string[]>([]);
    const [color, SetColor] = useState("");

    const handelinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetInput(e.target.value)
    }

    const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            Addtodo();
        }
    }

    const handelbg = () => {
        SetMode(!mode)
    }

    const handelclick = () => {
        setCount(count + 1);
    }

    const Addtodo = () => {
        if (input.trim() === "")
            return;
        SetTodo([...todo, input])
        SetInput("");
    }

    const handeldelete = (index: number) => {
        const update = todo.filter((_, i) => i !== index);
        SetTodo(update)
    }

    const DeleteAll = () => {
    }

    return (
        <div className={`min-h-screen ${mode ? "bg-black text-white" : "bg-white text-black"}`}>
            <div>
                <h1>-Count-</h1>

                <button
                    className=" bg-black text-white"
                    onClick={handelclick}>
                    ADD
                </button>
                <button
                onClick={() => setCount(0)}>Clear</button>
                <h1>{count}</h1>
            </div>

            <div>

                <input
                    type="text"
                    value={input}
                    onChange={handelinput}
                    placeholder="Enter"
                >

                </input>
                <h1>{input}</h1>
            </div>

            <div>
                <button
                    onClick={() => SetShow(!show)}> {show ? "HIDE" : "SHOW"}</button>
                <h1>{show && "THIS IS SECERT TEXT"}</h1>
            </div>
            <button
                onClick={handelbg}
            >
                {mode ? "LIGHT MODE" : "DARK MODE"}
            </button>

            <div>
                <input
                    type="text"
                    value={input}
                    onChange={handelinput}
                    onKeyDown={Enter}>
                </input>
                <button onClick={Addtodo}>add</button>

                {todo.map((item, index) => (
                    <ul key={index}>

                        <li>{item} <button onClick={() => handeldelete(index)}> ❌ </button></li>
                    </ul>

                ))}

            </div>

            <div>
                <h1 className={`w-[500px] h-[500px] border
                ${color === "red" ? "bg-red-500" : ""}
                ${color === "green" ? "bg-green-500" : ""}
                ${color === "blue" ? "bg-blue-500" : ""}
                ${color === "orange" ? "bg-orange-500" : ""}
                ${color === "purple" ? "bg-purple-600" : ""}
                `} >
                </h1>
                <button onClick={() => SetColor("red")}>RED</button>
                <button onClick={() => SetColor("green")}>GREEN</button>
                <button onClick={() => SetColor("blue")}>BLUE</button>
                <button onClick={() => SetColor("orange")}>ORANGE</button>
                <button onClick={() => SetColor("purple")}>PRUPLE</button>

            </div>

        </div>

    );

}



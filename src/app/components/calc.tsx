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
        <div>
            <div>
                <h1> CAlCULATOR</h1>
                <input
                    type="text"
                    placeholder="NUM 1"
                    onChange={handelinputa}
                    value={numa}>
                </input>
                <input
                    type="text"
                    placeholder="NUM 2"
                    onChange={handelinputb}
                    value={numb}>
                </input>

                <button onClick={add}>ADD</button>
                <button onClick={sub}>SUB</button>
                <button onClick={mul}>MUL</button>
                <button onClick={div}>DIV</button>

                <h1>{ans}</h1>
            </div>
        </div>
    );
}
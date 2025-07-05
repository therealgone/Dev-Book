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

        <div>
            <input type="text"
                value={limit}
                onChange={handelinput}
                placeholder="Type - Here" />

            <input
                type="text"
                value={len}
                onChange={handelLen}
                placeholder="Set Limit"></input>

            <h1>Word = {text}
                Length = {limit.length}

                {limit.length > len && (
                    <span style={{ color: "red" }}>Limit exceeded!</span>
                )}

                <button onClick={() => { setLimit(""); setText(0); }}>Clear </button>
            </h1>
        </div>

    );
}
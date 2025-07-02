import { useEffect, useState } from "react";

export default function stopwatch() {

    const [time,SetTime] = useState(0)
    const [mode,SetMode] = useState(false)

   useEffect(()=>{

    if(mode === false) return ;

    const interval= setInterval(() => {
        SetTime(prev => prev + 1)
        
    },1000);


return()=> clearInterval(interval);

    

   },[mode]);

    return(
        <div>
        <button
        onClick={()=>{SetMode(!mode);}}
        className={`border-2 text-black ${mode? "bg-red-700":"bg-green-300"}`}>{mode ? "Stop" : "Start"}</button>
        <h1>{time}</h1>
        </div>
    );
}
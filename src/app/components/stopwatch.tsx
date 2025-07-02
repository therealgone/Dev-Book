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
        onClick={()=>{SetMode(!mode);}}>{mode ? "Stop" : "Start"}</button>
        <h1>{time}</h1>
        </div>
    );
}
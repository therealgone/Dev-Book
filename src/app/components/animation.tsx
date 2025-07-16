import React from "react";
import { motion } from "motion/react"
import { useState } from "react";
export default function animation() {

    const [relaodAnimation,setReloadAnimation]= useState(0)

    const reanimation = () => {
        setReloadAnimation(prev => prev +1)
    }
    return (



        <div className=" min-h-screen tracking-wide ">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <button className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold  transition-colors mb-4"
                >Show Code</button>
                <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Entry Animation</h2>
                <div className="flex flex-col items-center gap-4  ">
                    <div className="w-[350px] h-[350px]  bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">

                    <motion.h1
                    key={relaodAnimation}
                    

                    initial={{ opacity:0 , scale:0}}
                    animate={{opacity:1, scale:1.2}}
                    transition={{ duration:1,ease:"easeInOut", scale:{ type:"spring", visualDuration:0.5 , bounce:0.5}}}
                    className="w-[150px] h-[150px] bg-[#007ACC] rounded-2xl ">
                    </motion.h1>


                    </div>
                <button className=" bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold  transition-colors mt-4 " onClick={reanimation}> RELOAD</button>
                </div>
            </div>
            
        </div>

    );
}
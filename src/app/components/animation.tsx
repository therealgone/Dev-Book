import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Animation() {

    const [relaodAnimation, setReloadAnimation] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [dom, setDom] = useState(false)
    const router = useRouter();

    const toggle = () => {
        setIsOn(!isOn)
    }

    const reanimation = () => {
        setReloadAnimation(prev => prev + 1)
    }
    return (
        <div className=" min-h-screen tracking-wide  ">
            {/* Entry Animation */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
                <button
                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold  transition-colors mb-4"
                    onClick={() => router.push('/EntryAnimation')}
                >Show Code</button>
                <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Entry Animation</h2>
                <div className="flex flex-col items-center gap-4  ">
                    <div className="w-[350px] h-[350px]  bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
                        <motion.h1
                            key={relaodAnimation}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 1, ease: "easeInOut", scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 } }}
                            className="w-[150px] h-[150px] bg-[#007ACC] rounded-2xl ">
                        </motion.h1>
                    </div>
                    <button className=" bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-3 rounded-lg font-semibold  transition-colors mt-4 " onClick={reanimation}> RELOAD</button>
                </div>
            </div>
            {/* Toggle Animation */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
                <button
                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold  transition-colors mb-4"
                    onClick={() => router.push('/ToggleAnimation')}
                >Show Code</button>
                <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Toggle Animation</h2>
                <div className="flex flex-col items-center gap-4  ">
                    <div className="w-[350px] h-[350px]  bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
                        <button
                            className={`w-[150px] h-[70px] bg-[#007ACC] rounded-full flex items-center transition-all ${isOn ? "justify-start" : "justify-end"}`}
                            onClick={toggle}
                        >
                            <motion.div
                                layout
                                className="w-[68px] h-[68px] bg-white rounded-full"
                                transition={{
                                    type: "spring",
                                    duration: 0.4,
                                    bounce: 0.4,
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* Hover & Click Animation */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
                <button
                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold  transition-colors mb-4"
                    onClick={() => router.push('/Hover&ClickAnimation')}
                >Show Code</button>
                <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Hover & Click Animation</h2>
                <div className="flex flex-col items-center gap-4  ">
                    <div className="w-[350px] h-[350px]  bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
                       <motion.div
                       className="w-[150px] h-[150px] bg-[#007ACC] rounded-2xl  "
                       whileHover={{scale:1.2}}
                       whileTap={{scale:0.8}}
                       transition={{duration:0.2}}>
                       </motion.div>
                    </div>
                </div>
            </div>
            {/* Text Open Animation */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mt-10 mb-10">
                <button
                    className="bg-[#007ACC] hover:bg-[#005a99] text-white px-6 py-2 rounded-lg font-semibold  transition-colors mb-4"
                    onClick={() => router.push('/TextOpenAnimation')}
                >Show Code</button>
                <h2 className="text-3xl font-bold text-[#007ACC] mb-6 text-center">Text Open Animation</h2>
                <div className="flex flex-col items-center gap-4  ">
                    <div className="w-[350px] h-[350px]  bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-4 rounded-2xl">
                      <motion.div
                      layout
                      whileHover={{scale:1.2}}
                      whileTap={{scale:1}}
                      transition={{duration:0.5, ease:"easeInOut", type:"spring" }}
                      className={`bg-[#007ACC] flex flex-col justify-center items-center ${ dom ? "w-[200px] h-[200px] rounded-2xl" : "w-[150px] h-[150px] rounded-full "}`}
                      onClick={() => setDom(!dom)}
                      >
                        <motion.span
                        className=" text-2xl text-center "
                         key={dom ? "click" : "welcome"}
                        layout
                        initial={{opacity:0 , scale:0.8}}
                        animate={{opacity:1, scale:1}}
                       exit={{opacity:0}}
                       transition={{duration:0.3, ease:"easeInOut" , type:"spring"}}
                       >
                            {dom ?  (<>Welcome<br />  to<br /> Dev-Book</>) : (<>Click<br />Me</>)}
                        </motion.span>
                      </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
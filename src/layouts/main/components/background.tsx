"use client";

import { m } from "framer-motion";


export default function Background() {
    return (
        <div className="z-0">
            <m.div
                animate={{ rotate: [0, 360] }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="fixed top-0 right-0 translate-x-1/2 inset-0 pointer-events-none"
            >
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full 
                    bg-cyan-500/20 blur-[150px]" />
            </m.div>
            <m.div
                animate={{ rotate: [0, -360] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="fixed top-0 left-0 -translate-x-1/2 inset-0 pointer-events-none"
            >
                <div className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full 
                    bg-red-500/20 blur-[150px]" />
            </m.div>
        </div>
    )
}
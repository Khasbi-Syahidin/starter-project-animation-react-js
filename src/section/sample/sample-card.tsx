"use client";

import SpotlightCard from "@/components/react-bits/spotlight-card";
import { m, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    code?: string;
    description?: string;
    variants?: any;
}

export default function CardDemoAnimation({
    children,
    className,
    title,
    code,
    description,
    variants,
}: Props) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    const handleRePlay = async () => {
        await controls.start("initial");
        await controls.start("animate");
    };

    return (
        <m.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={className}
        >
            <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.10)"
                className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300 h-full" >
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl" />
                </div>


                <div className="flex flex-col justify-center items-center gap-3 relative z-10">

                    <h4 className="text-white text-center font-semibold! drop-shadow-sm" >
                        {title}
                    </h4>

                    {/* Code Box */}
                    <div
                        className="px-4 py-2 rounded-xl border border-white/20 w-fit bg-slate-700/50 shadow-sm backdrop-blur-md" >
                        <p className="text-cyan-200 text-center font-mono tracking-wide" >
                            {code}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-center max-w-sm leading-relaxed" >
                        {description}
                    </p>
                </div>

                {children}
            </SpotlightCard>
        </m.div>
    );
}

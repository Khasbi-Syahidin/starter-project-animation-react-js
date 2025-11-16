"use client";

import { m } from "framer-motion";
import { MotionViewport, varBounce, varFlip, varZoom } from "@/components/animate";
import SampleCardAnimation from "./sample-animation-card";



export default function SampleListCard() {
    const bounce = varBounce();
    const zoom = varZoom();
    const flip = varFlip();
    return (
        <div>
            <MotionViewport>
                <div className="flex flex-col gap-4">
                    <m.div variants={bounce.inUp}>
                        <SampleCardAnimation title="Bounce In Up" code="varBounce().inUp" description="Animasi masuk dari bawah dengan efek pantulan." />
                    </m.div>
                    <m.div variants={flip.inX}>
                        <SampleCardAnimation title="Flip In X" code="varFlip().inX" description="Animasi masuk dengan efek membalik pada sumbu X." />
                    </m.div>
                    <m.div variants={zoom.inUp}>
                        <SampleCardAnimation title="Zoom In Up" code="varZoom().inUp" description="Animasi masuk dari bawah dengan efek zoom." />
                    </m.div>
                </div>
            </MotionViewport>
        </div>
    );
}
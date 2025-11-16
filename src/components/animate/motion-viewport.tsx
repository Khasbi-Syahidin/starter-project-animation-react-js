"use client"

import { m, MotionProps } from 'framer-motion';
import React from 'react';
import { varContainer } from './variants';

// ----------------------------------------------------------------------

type IProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

interface Props extends IProps {
  children: React.ReactNode;
}

export default function MotionViewport({
  children,
  ...other
}: Props) {

  return (
    <m.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </m.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const offsets = { up: { y: 36, x: 0 }, down: { y: -36, x: 0 }, left: { x: 36, y: 0 }, right: { x: -36, y: 0 } };

export default function AnimateOnScroll({ children, className = "", delay = 0, direction = "up" }: Props) {
  const offset = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

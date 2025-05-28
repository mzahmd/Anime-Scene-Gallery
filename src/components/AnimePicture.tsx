import { motion } from "motion/react"

import type { MousePosition, AnimePictureEntry } from "../lib/type";

interface AnimePictureProps {
  title: string;
  item: AnimePictureEntry;
  mousePosition: MousePosition;
}

export function AnimePicture({ title, item, mousePosition }: AnimePictureProps) {
  return (
    <motion.div
      className="absolute w-60 overflow-hidden rounded-xl shadow-2xl"
      initial={{
        scale: 0,
        opacity: 0,
        x: item.x,
        y: item.y
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: item.rotate,
        x: item.x + (mousePosition.x / 6),
        y: item.y + (mousePosition.y / 6)
      }}
      exit={{
        scale: 0,
        opacity: 0
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        mass: 0.5,
        damping: 15,
      }}
    >
      <img src={item.src} alt={title} className="object-cover" />
    </motion.div>
  )
}
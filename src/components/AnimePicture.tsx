import { motion } from "motion/react"

import { type Image } from "../lib/constant";

interface AnimePictureProps {
  title: string;
  item: Image,
  mousePosition: {
    x: number;
    y: number;
  }
}

export function AnimePicture({ title, item, mousePosition }: AnimePictureProps) {
  return (
    <motion.div
      className="absolute w-60 overflow-hidden rounded-2xl shadow-2xl"
      initial={{
        scale: 0,
        opacity: 0,
        x: item.initial.x,
        y: item.initial.y
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: item.animate.rotate,
        x: item.animate.x + (mousePosition.x / 6),
        y: item.animate.y + (mousePosition.y / 6)
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
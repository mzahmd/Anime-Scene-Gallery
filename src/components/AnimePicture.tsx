import { motion } from "motion/react"

import { type Image } from "../lib/data";

interface AnimePictureProps {
  title: string;
  item: Image
}

export function AnimePicture({ title, item }: AnimePictureProps) {
  return (
    <motion.div
      className="absolute w-75 overflow-hidden top-70 left-20 rounded-2xl rotate-355"
      initial={{ opacity: 0, x: item.initial.x, y: item.initial.y }}
      animate={{ opacity: 1, rotate: item.animate.rotate, x: item.animate.x, y: item.animate.y }}
      exit={{ opacity: 0 }}
    >
      <img src={item.src} alt={title} className="object-cover" />
    </motion.div>
  )
}
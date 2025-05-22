import { motion } from "motion/react"

import p1 from "../tmp/p1.png";

interface AnimePictureProps {
  title: string;
}

export function AnimePicture({ title }: AnimePictureProps) {
  return (
    <motion.div
      className="absolute w-80 overflow-hidden top-70 left-5 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={p1} alt={title} className="object-cover"/>
    </motion.div>
  )
}
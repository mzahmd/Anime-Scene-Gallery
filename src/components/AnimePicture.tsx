import { motion } from "motion/react"

interface AnimePictureProps {
  title: string;
  item: {
    src: string;
  };
}

export function AnimePicture({ title, item }: AnimePictureProps) {
  return (
    <motion.div
      className="absolute w-75 overflow-hidden top-70 left-20 rounded-2xl rotate-355"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={item.src} alt={title} className="object-cover" />
    </motion.div>
  )
}
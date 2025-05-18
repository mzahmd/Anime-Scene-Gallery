import { motion } from "motion/react"

interface AnimeTitleProps {
  title: string;
}

export function AnimeTitle({title}: AnimeTitleProps) {
  return (
    <motion.h1 
      className="font-bold text-white pb-2"
      animate={{}}
      whileHover={{ scale: 1.1 }}
      >
        {title}
    </motion.h1>
  )
} 
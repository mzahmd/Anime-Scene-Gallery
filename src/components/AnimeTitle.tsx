import { motion } from "motion/react"

interface AnimeTitleProps {
  title: string;
}

export function AnimeTitle({ title }: AnimeTitleProps) {
  return (
    <motion.span
      className="font-bold text-7xl text-white pb-2 transition-colors duration-300 ease-in-out hover:text-gray-400"
      animate={{}}
      whileHover={{ scaleY: 1.2 }}
      transition={{ type: "spring", mass: 0.5, damping: 5 }}
    >
      {title}
    </motion.span>
  )
}
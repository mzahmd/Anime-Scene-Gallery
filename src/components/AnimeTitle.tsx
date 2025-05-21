import { motion } from "motion/react"

interface AnimeTitleProps {
  title: string;
}

export function AnimeTitle({ title }: AnimeTitleProps) {
  return (
    <motion.span
      className="font-bold text-7xl text-white pb-2 transition ease-in-out hover:text-gray-400"
      animate={{}}
      whileHover={{}}
    >
      {title}
    </motion.span>
  )
}
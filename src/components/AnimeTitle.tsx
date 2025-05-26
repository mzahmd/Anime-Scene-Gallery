import { motion } from "motion/react"

interface AnimeTitleProps {
  title: { id: string, name: string };
  onHover: (title: string | null) => void;
}

export function AnimeTitle({ title, onHover }: AnimeTitleProps) {
  return (
    <motion.span
      // data-text={title}
      className="font-bold text-7xl text-slate-200 pb-2 transition-colors duration-300 ease-in-out hover:text-slate-400"
      animate={{}}
      whileHover={{ scaleY: 1.2 }}
      transition={{ type: "spring", mass: 0.5, damping: 5 }}
      onHoverStart={() => onHover(title.id)}
      onHoverEnd={() => onHover(null)}
    // onClick={(e) => console.log(e.currentTarget.dataset.text)}
    >
      {title.name}
    </motion.span>
  )
}
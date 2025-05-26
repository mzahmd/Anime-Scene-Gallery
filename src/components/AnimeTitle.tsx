import { motion } from "motion/react"

interface AnimeTitleProps {
  title: { id: string, name: string };
  onHover: (title: string | null) => void;
}

export function AnimeTitle({ title, onHover }: AnimeTitleProps) {
  return (
    <motion.span
      // data-text={title}
      className="font-bold text-7xl text-slate-200 hover:text-slate-400 transition-colors duration-300 ease-in-out pb-2"
      whileHover={{
        scaleY: 1.2
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        mass: 0.5,
        damping: 10,
        bounce: 0.2,
      }}
      onHoverStart={() => onHover(title.id)}
      onHoverEnd={() => onHover(null)}
    // onClick={(e) => console.log(e.currentTarget.dataset.text)}
    >
      {title.name}
    </motion.span>
  )
}
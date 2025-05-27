import { motion } from "motion/react"

import { useMousePosition } from "../hooks/useMousePosition"


export function CustomCursor({ isActive }: { isActive: boolean }) {
  const mousePosition = useMousePosition()

  if (!isActive) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 top-0 left-0 bg-slate-100 rounded-full z-10"
        initial={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
      </motion.div>
    </>
  )
}
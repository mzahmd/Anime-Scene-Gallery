import { useEffect, useState } from "react"
import { motion } from "motion/react"


export function CustomCursor({ isActive }: { isActive: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    if(isActive)
      window.addEventListener("mousemove", (e) => handleMouseMove(e))

    return () => window.removeEventListener("mousemove", (e) => handleMouseMove(e))
  }, [isActive])

  if(!isActive) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 top-0 left-0 bg-slate-100 rounded-full z-10"
        initial={{
          x: position.x,
          y: position.y,
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
      >
      </motion.div>
    </>
  )
}
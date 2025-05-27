import "./App.css";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { AnimeTitle } from "./components/AnimeTitle";
import { AnimePicture } from "./components/AnimePicture";
import { CustomCursor } from "./components/CustomCursor";

import { ANIME_TITLES, data } from "./lib/constant";
import { useMousePosition } from "./hooks/useMousePosition";

function App() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [showCursor, setShowCursor] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <>
      <div className="relativ flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-screen cursor-none" onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
          <CustomCursor isActive={showCursor} mousePosition={mousePosition} />
          {ANIME_TITLES.map(title =>
            <AnimeTitle key={title.id} title={title} onHover={setHoveredText} />
          )}
        </div>
        {hoveredText && (
          <AnimatePresence>
            {data[hoveredText].map((item, index) => <AnimePicture key={index} title={hoveredText} item={item} mousePosition={mousePosition} />)}
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default App;

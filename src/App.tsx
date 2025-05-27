import "./App.css";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { AnimeTitle } from "./components/AnimeTitle";
import { AnimePicture } from "./components/AnimePicture";

import { ANIME_TITLES, data } from "./lib/constant";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [showCursor, setShowCursor] = useState(false);

  return (
    <>
      <div className="relativ flex justify-center">
        <div className="flex flex-col items-center justify-center w-screen cursor-none" onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
          <CustomCursor isActive={showCursor} />
          {ANIME_TITLES.map(title =>
            <AnimeTitle key={title.id} title={title} onHover={setHoveredText} />
          )}
        </div>
        {hoveredText && (
          <AnimatePresence>
            {data[hoveredText].map((item, index) => <AnimePicture title={hoveredText} item={item} key={index} />)}
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default App;

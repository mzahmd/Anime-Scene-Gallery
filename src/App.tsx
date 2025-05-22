import "./App.css";

import { useState } from "react";

import { AnimeTitle } from "./components/AnimeTitle";
import { AnimePicture } from "./components/AnimePicture";

import { ANIME_TITLES } from "./lib/constant";

function App() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  return <>
    <div className="w-screen flex flex-col items-center justify-center">
      {ANIME_TITLES.map((title, index) => (
        <AnimeTitle key={index} title={title} onHover={setHoveredText} />
      ))}
    </div>
    {hoveredText && (<AnimePicture title={hoveredText} />
    )}
  </>
}

export default App;

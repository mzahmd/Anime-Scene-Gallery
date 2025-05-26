import "./App.css";

import { useState } from "react";

import { AnimeTitle } from "./components/AnimeTitle";
import { AnimePicture } from "./components/AnimePicture";

import { ANIME_TITLES } from "./lib/constant";
import { data } from "./lib/data";

function App() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  return (
    <div>
      <div className="w-screen flex flex-col items-center justify-center">
        {ANIME_TITLES.map((title, index) => (
          <AnimeTitle key={index} title={title} onHover={setHoveredText} />
        ))}
      </div>
      {hoveredText && (
        data[hoveredText].map((item, index) => <AnimePicture title={hoveredText} item={item} key={index} />)
      )}
    </div>
  )
}

export default App;

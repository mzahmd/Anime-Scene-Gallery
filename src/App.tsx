import "./App.css";

import { AnimeTitle } from "./components/AnimeTitle";

import { ANIME_TITLES } from "./lib/constant";

function App() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      {ANIME_TITLES.map((title, index) => (
        <AnimeTitle title={title} key={index} />
      ))}
    </div>
  );
}

export default App;

import "./App.css";

import { AnimeTitle } from "./components/AnimeTitle";

import { animeTitile } from "./lib/constant";

function App() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      {animeTitile.map((title, index) => (
        <AnimeTitle title={title} key={index} />
      ))}
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { fetchGifs, handleFetch } from "./utils";
import { useState, useEffect } from "react";
function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    fetchGifs(setGifs);
  }, []);
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs} />
        <br />
        {gifs && <GifContainer gifs={gifs} />}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import API_KEY from "./config";

const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handleFetch(url);
        setData(response);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
            
      <NavBar color="black" title="Giphy Search" />
            
      <div className="ui container">
                
        <GifSearch setData={setData} />
                
        <GifContainer gifs={data} />
              
      </div>
          
    </div>
  );
}

export default App;

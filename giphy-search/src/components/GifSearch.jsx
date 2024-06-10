import React, { useState } from "react";
import { handleFetch } from "../utils";
import API_KEY from "../config";
function GifSearch({ setData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&rating=g`;

      const response = await handleFetch(searchUrl);
      setData(response);
      setSearchTerm("");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={searchTerm}
        onChange={handleChange}
      />
            
      <button type="submit" className="btn btn-success">
                Search       
      </button>
          
    </form>
  );
}

export default GifSearch;

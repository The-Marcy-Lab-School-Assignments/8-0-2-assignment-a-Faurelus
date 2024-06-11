import { useState, useEffect } from "react";
import { fetchGifs, handleFetch } from "../utils";

function GifSearch({ setGifs }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGifs([]);
    fetchGifs(setGifs, query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        className="form-control"
        id="searchInput"
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

export default GifSearch;

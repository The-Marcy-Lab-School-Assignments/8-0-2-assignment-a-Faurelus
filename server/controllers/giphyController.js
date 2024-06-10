const { fetchData } = require("../utils");

exports.serveGifs = async (req, res) => {
  const { search } = req.query;
  const API_KEY = process.env.API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: "API key not found" });
  }

  const API_URL = search
    ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=3&rating=g`
    : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

  try {
    const [data, error] = await fetchData(API_URL);
    if (error) {
      throw new Error(error);
    }
    res.send(data);
  } catch (error) {
    console.error("Error serving GIFs:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

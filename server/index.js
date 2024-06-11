const express = require("express");
const dotenv = require("dotenv");
const { serveGifs, searchGifs } = require("./controllers/giphyController");
const path = require("path");
dotenv.config();
const app = express();
const port = process.env.PORT || 8090;
app.use(express.static(path.join(__dirname, "../giphy-search", "dist")));

app.get("/api/gifs", serveGifs);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
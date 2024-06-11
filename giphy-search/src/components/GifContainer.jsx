function GifContainer({ gifs }) {
  return (
    <ul id="gif-contain">
      {gifs.map((gif) => {
        return (
          <div className="img">
            <img width="200px" heigh="200px" src={gif.img}></img>
          </div>
        );
      })}
    </ul>
  );
}

export default GifContainer;

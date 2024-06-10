GifContainer.jsx;

function GifContainer({ gifs }) {
  if (!gifs || !Array.isArray(gifs)) {
    return <div>No GIFs found.</div>;
  }

  console.log(gifs);

  return (
    <ul>
      {gifs[0]?.data.map((gif, index) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={`${gif.title}`} />
        </li>
      ))}
    </ul>
  );
}

export default GifContainer;

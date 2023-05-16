import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { artContext } from "./ArtContext";

function Main() {
  const [artworks, setArtworks] = useState([]);
  const [message, setMessage] = useState("");
  const { handleFavorites } = useContext(artContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchArtworks = event.target.elements.search.value;
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchArtworks}&fields=id,title,image_id,artist_display,thumbnail.width,thumbnail.height,artwork_type_title,place_of_origin`
    )
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  const handleAddToFavorites = (artwork) => {
    handleFavorites(artwork);
    setMessage(`${artwork.title} added to your favorites!`);
  };

  return (
    <div className='main'>
      <div className='header'>
        <h1>Search The Art Institute of Chicago Works of Art</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Type to search a Works of Art'
            name='search'
          />
          <button type='submit' id='search-btn'>
            <i className='fa-brands fa-searchengin'></i>
          </button>
        </form>
      </div>
      <div className='artCard'>
        {message && <p id='addToFavorite-message'>{message}</p>}
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          centerMode={true}
          variableWidth={true}
        >
          {artworks.map((artwork) => {
            if (!artwork.image_id) {
              return null;
            }
            return (
              <div key={artwork.id} className='card'>
                <div className='card-wrapper'>
                  <button
                    id='add-btn'
                    onClick={() => handleAddToFavorites(artwork)}
                  >
                    <i className='fa-regular fa-square-plus'></i>
                  </button>
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                    alt={artwork.title}
                  />
                  <h3 id='artist'>Title: {artwork.title}</h3>
                  <p id='artist'>{artwork.artist_display}</p>
                  <p id='artist'>Origin: {artwork.place_of_origin}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Main;

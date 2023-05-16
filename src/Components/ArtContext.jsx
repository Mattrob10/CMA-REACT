import React, { useState } from "react";

const artContext = React.createContext();

function ArtContextProvider(props) {
  const [favoriteArt, setFavoriteArt] = useState([]);
  const handleFavorites = (artwork) => {
    const alreadyInFavorites = favoriteArt.some((favorite) => favorite.id === artwork.id);
    
    if (alreadyInFavorites) {
      alert("ARTWORK is in your favorites");
    } else {
      const newFavorite = {
        id: artwork.id,
        title: artwork.title,
        image_id: artwork.image_id,
        artist_display: artwork.title,
      };
      setFavoriteArt([...favoriteArt, newFavorite]);
      
    }
  };
  

  const handleDelete = (id) => {
    const updatedFavorites = favoriteArt.filter((artwork) => artwork.id !==id);
    setFavoriteArt(updatedFavorites)
  }

  return (
    <artContext.Provider
      value={{
        handleFavorites,
        favoriteArt,
        setFavoriteArt,
        handleDelete,
      }}
    >
      {props.children}
    </artContext.Provider>
  );
}

export { artContext, ArtContextProvider };

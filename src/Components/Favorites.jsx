import { artContext } from "./ArtContext";

function Favorites() {
  return (
    <div className='favorites'>
      <h2>Favorites</h2>
      <div className='collection'>
        <artContext.Consumer>
          {(context) =>
            context.favoriteArt.length ? (
              <ul>
                {context.favoriteArt.map((artwork) => (
                  <li key={artwork.id}>
                    <img
                      id='favorite-img'
                      src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                      alt={artwork.title}
                    />
                    <button
                      id='delete-btn'
                      onClick={() => context.handleDelete(artwork.id)}
                    >
                      {/* insert modal Component */}
                      <i className='fa-regular fa-trash-can'></i>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p id='favorite-status'>CURRENTLY YOU HAVE NO FAVORITE ART</p>
            )
          }
        </artContext.Consumer>
      </div>
    </div>
  );
}

export default Favorites;

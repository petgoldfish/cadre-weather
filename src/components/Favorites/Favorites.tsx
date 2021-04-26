import { ReactElement, useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { LocationContext } from "../../context/LocationContext";
import "./Favorites.css";

function Favorites(): ReactElement {
  const { favorites } = useContext(FavoriteContext);
  const { location, handleLocation } = useContext(LocationContext);

  return (
    <div className="card favorites">
      <h3 className="favorites__title">Favorites</h3>
      {favorites.map((favorite, index) => (
        <p
          // highlight if the current location is a favourite
          className={
            "favorite card " +
            (favorite.address !== location?.address
              ? " card--no-shadow"
              : "card--secondary")
          }
          key={index}
          onClick={() => handleLocation(favorite)}
        >
          {favorite.address}
        </p>
      ))}
    </div>
  );
}

export default Favorites;

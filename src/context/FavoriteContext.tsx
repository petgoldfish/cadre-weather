import React, { createContext, useState, useEffect } from "react";
import { Location } from "./LocationContext";

interface FavoriteContextType {
  favorites: Array<Location>;
  handleFavorite: Function;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  handleFavorite: (favorite: Location) => {},
});

// Favorites store
const FavoriteContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Array<Location>>([]);

  function handleFavorite(favorite: Location) {
    const updatedFavs = [...favorites, favorite];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  }

  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    setFavorites(favorites);
  }

  // load favourites only on initial component load
  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorites, handleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

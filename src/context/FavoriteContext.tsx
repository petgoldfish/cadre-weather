import React, { createContext, useState, useEffect } from "react";
import { Location } from "./LocationContext";

interface FavoriteContextType {
  favorites: Array<Location>;
  handleFavourite: Function;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  handleFavourite: (favorite: Location) => {},
});

const FavoriteContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Array<Location>>([]);

  function handleFavourite(favorite: Location) {
    const updatedFavs = [...favorites, favorite];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  }

  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    setFavorites(favorites);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorites, handleFavourite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

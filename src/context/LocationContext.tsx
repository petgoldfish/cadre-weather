import React, { createContext, useState } from "react";

interface Location {
  lat: number;
  lng: number;
}

interface LocationContextType {
  location: Location | null;
  handleLocation: Function;
}

export const LocationContext = createContext<LocationContextType>({
  location: null,
  handleLocation: (location: Location) => {},
});

const LocationContextProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<Location | null>(null);

  const handleLocation = (location: Location) => {
    setLocation(location);
  };

  return (
    <LocationContext.Provider value={{ location, handleLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;

import { useState, ReactElement, useEffect, useContext } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { FavoriteContext } from "../../context/FavoriteContext";
import { LocationContext } from "../../context/LocationContext";
import "./Location.css";

interface Address {
  label: string;
}

function Location(): ReactElement {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY!;

  const { location, handleLocation } = useContext(LocationContext);
  const { handleFavorite } = useContext(FavoriteContext);

  const [address, setAddress] = useState<Address>();

  useEffect(() => {
    // get coordinates of selected location
    if (address) {
      geocodeByAddress(address.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) =>
          handleLocation({ lat, lng, address: address.label })
        );
    }
  }, [address]);

  return (
    <div className="search">
      {/* Setting a debounce here so the API isn't spammed */}
      <GooglePlacesAutocomplete
        apiKey={API_KEY}
        debounce={300}
        selectProps={{
          value: address,
          onChange: setAddress,
          placeholder: "Enter Location...",
          styles: {
            container: (provided: any) => ({
              ...provided,
              marginBottom: 16,
            }),
          },
        }}
        minLengthAutocomplete={3}
      />
      <button className="add-button" onClick={() => handleFavorite(location)}>
        Add to Favorites
      </button>
    </div>
  );
}

export default Location;

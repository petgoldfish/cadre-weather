import { useState, ReactElement, useEffect, useContext } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { FavoriteContext } from "../../context/FavoriteContext";
import { LocationContext } from "../../context/LocationContext";
import "./Location.css";

interface Loc {
  label: string;
}

function Location(): ReactElement {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY!;

  const { location, handleLocation } = useContext(LocationContext);
  const { handleFavourite } = useContext(FavoriteContext);

  const [loc, setLoc] = useState<Loc>();

  useEffect(() => {
    if (loc) {
      geocodeByAddress(loc.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) =>
          handleLocation({ lat, lng, address: loc.label })
        );
    }
  }, [loc]);

  return (
    <div className="search">
      <GooglePlacesAutocomplete
        apiKey={API_KEY}
        debounce={300}
        selectProps={{
          value: loc,
          onChange: setLoc,
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
      <button className="add-button" onClick={() => handleFavourite(location)}>
        Add to Favorites
      </button>
    </div>
  );
}

export default Location;

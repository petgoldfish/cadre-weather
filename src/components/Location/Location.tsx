import { useState, ReactElement, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import "./Location.css";

interface Loc {
  label: string;
}

function Location(): ReactElement {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY!;

  const [location, setLocation] = useState<Loc>();

  useEffect(() => {
    if (location) {
      geocodeByAddress(location.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => console.log(lat, lng));
    }
  }, [location]);

  return (
    <GooglePlacesAutocomplete
      apiKey={API_KEY}
      debounce={300}
      selectProps={{
        value: location,
        onChange: setLocation,
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
  );
}

export default Location;

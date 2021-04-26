import Header from "../Header/Header";
import Location from "../Location/Location";
import Favorites from "../Favorites/Favorites";
import Weather from "../Weather/Weather";
import LocationContextProvider from "../../context/LocationContext";
import FavoriteContextProvider from "../../context/FavoriteContext";
import "./App.css";

function App() {
  return (
    <div className="App flex-column">
      <Header />
      <main className="main flex-column">
        <LocationContextProvider>
          <FavoriteContextProvider>
            <Location />
            <Favorites />
          </FavoriteContextProvider>
          {/* The actual weather component does not need to know the favourites */}
          <Weather />
        </LocationContextProvider>
      </main>
    </div>
  );
}

export default App;

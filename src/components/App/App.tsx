import Header from "../Header/Header";
import Location from "../Location/Location";
import "@reach/tabs/styles.css";
import "./App.css";
import LocationContextProvider from "../../context/LocationContext";
import Weather from "../Weather/Weather";
import Favorites from "../Favorites/Favorites";
import FavoriteContextProvider from "../../context/FavoriteContext";

function App() {
  return (
    <LocationContextProvider>
      <FavoriteContextProvider>
        <div className="App flex-column">
          <Header />
          <main className="main flex-column">
            <Location />
            <Favorites />
            <Weather />
          </main>
        </div>
      </FavoriteContextProvider>
    </LocationContextProvider>
  );
}

export default App;

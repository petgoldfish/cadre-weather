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
    <div className="App flex-column">
      <Header />
      <main className="main flex-column">
        <LocationContextProvider>
          <FavoriteContextProvider>
            <Location />
            <Favorites />
          </FavoriteContextProvider>
          <Weather />
        </LocationContextProvider>
      </main>
    </div>
  );
}

export default App;

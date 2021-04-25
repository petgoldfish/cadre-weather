import Header from "../Header/Header";
import Location from "../Location/Location";
import "@reach/tabs/styles.css";
import "./App.css";
import LocationContextProvider from "../../context/LocationContext";
import Weather from "../Weather/Weather";

function App() {
  return (
    <LocationContextProvider>
      <div className="App flex-column">
        <Header />
        <main className="main flex-column">
          <Location />
          <Weather />
        </main>
      </div>
    </LocationContextProvider>
  );
}

export default App;

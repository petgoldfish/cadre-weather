import Header from "../Header/Header";
import Hourly from "../Hourly/Hourly";
import Location from "../Location/Location";
import Weekly from "../Weekly/Weekly";
import "./App.css";

function App() {
  return (
    <div className="App flex-column">
      <Header />
      <main className="main flex-column">
        <Location />
        <Hourly />
        <Weekly />
      </main>
    </div>
  );
}

export default App;

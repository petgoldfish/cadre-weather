import Header from "../Header/Header";
import Hourly from "../Hourly/Hourly";
import Location from "../Location/Location";
import Weekly from "../Weekly/Weekly";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import "./App.css";
import LocationContextProvider from "../../context/LocationContext";

function App() {
  return (
    <LocationContextProvider>
      <div className="App flex-column">
        <Header />
        <main className="main flex-column">
          <Location />
          <Tabs className="card">
            <TabList>
              <Tab>Hourly Forecast</Tab>
              <Tab>Weekly Forecast</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Hourly />
              </TabPanel>
              <TabPanel>
                <Weekly />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      </div>
    </LocationContextProvider>
  );
}

export default App;

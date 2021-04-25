import { ReactElement, useContext, useEffect, useState } from "react";
import Periods from "../Periods/Periods";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { LocationContext } from "../../context/LocationContext";
import "./Weather.css";

function Weather(): ReactElement {
  const { location } = useContext(LocationContext);

  const [hourly, setHourly] = useState(null);
  const [weekly, setWeekly] = useState(null);

  useEffect(() => {
    if (location) {
      fetch(`https://api.weather.gov/points/${location.lat},${location.lng}`)
        .then((res) => res.json())
        .then((result) => {
          fetch(result.properties.forecastHourly)
            .then((res) => res.json())
            .then((value) => {
              const today = value.properties.periods.filter(
                (period: any) =>
                  new Date(period.startTime).getDate() === new Date().getDate()
              );
              setHourly(today);
            });
          fetch(result.properties.forecast)
            .then((res) => res.json())
            .then((value) => setWeekly(value.properties.periods));
        });
    }
  }, [location]);

  return (
    <Tabs className="card flex-column tabs">
      <TabList>
        <Tab>Hourly Forecast</Tab>
        <Tab>Weekly Forecast</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Periods data={hourly} />
        </TabPanel>
        <TabPanel>
          <Periods data={weekly} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Weather;

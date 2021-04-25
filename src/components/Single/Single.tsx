import { ReactElement } from "react";
import {
  WiDayRain,
  WiCloudy,
  WiDaySunny,
  WiStrongWind,
  WiThermometer,
  WiNightClear,
} from "react-icons/wi";
import "./Single.css";

interface Period {
  name: string;
  startTime: string;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  shortForecast: string;
  isDaytime: boolean;
}

interface Props {
  period: Period;
}

function Single({
  period: {
    name,
    startTime,
    temperature,
    temperatureUnit,
    windSpeed,
    windDirection,
    shortForecast,
    isDaytime,
  },
}: Props): ReactElement {
  const forecastIcon = shortForecast.includes("Cloudy") ? (
    <WiCloudy size="3em" />
  ) : shortForecast.includes("Sunny") ? (
    <WiDaySunny size="3em" />
  ) : shortForecast.includes("Rain") ? (
    <WiDayRain size="3em" />
  ) : isDaytime ? (
    <WiDaySunny size="3em" />
  ) : (
    <WiNightClear size="3em" />
  );

  return (
    <div className="card single flex-column">
      <small>
        <strong>
          {name ? name : new Date(startTime).toLocaleTimeString()}
        </strong>
      </small>
      <p>
        {forecastIcon} {shortForecast}
      </p>
      <p>
        <WiThermometer size="1.5em" /> {temperature} {temperatureUnit}
      </p>
      <p>
        <WiStrongWind size="1.5em" /> {windSpeed} {windDirection}
      </p>
    </div>
  );
}

export default Single;

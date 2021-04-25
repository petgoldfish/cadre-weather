import React, { ReactElement } from "react";

interface Period {
  number: number;
  name: string;
  startTime: string;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  shortForecast: string;
}

interface Props {
  period: Period;
}

function Single({
  period: {
    name,
    number,
    startTime,
    temperature,
    temperatureUnit,
    windSpeed,
    windDirection,
    shortForecast,
  },
}: Props): ReactElement {
  return (
    <div className="card">
      {name ? <p>{name}</p> : <p>{new Date(startTime).toLocaleTimeString()}</p>}

      <p>{shortForecast}</p>
    </div>
  );
}

export default Single;

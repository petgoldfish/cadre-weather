import { ReactElement } from "react";
import Single from "../Single/Single";
import "./Periods.css";

interface PropTypes {
  data: Array<any> | null;
}

function Periods({ data }: PropTypes): ReactElement {
  return !data ? (
    <div>Forecast</div>
  ) : (
    <div className="flex periods">
      {data.map((period) => {
        return <Single period={period} key={period.number} />;
      })}
    </div>
  );
}

export default Periods;

import { ReactElement } from "react";
import "./Location.css";

function Location(): ReactElement {
  return (
    <form className="flex-column">
      <input
        className="card search"
        type="search"
        placeholder="Search location..."
      />
    </form>
  );
}

export default Location;

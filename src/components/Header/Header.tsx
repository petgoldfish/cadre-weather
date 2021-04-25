import { ReactElement } from "react";
import "./Header.css";

function Header(): ReactElement {
  return (
    <div className="header">
      <div className="header__title">weather</div>
    </div>
  );
}

export default Header;

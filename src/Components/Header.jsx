import { Link } from "react-router-dom";

export const Header = () => (
  <header style={{ backgroundColor: "skyblue" }}>
    <ul>
      <li>
        <Link to="/contactUs">contact us</Link>
      </li>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/careers">careers</Link>
      </li>
    </ul>
  </header>
);

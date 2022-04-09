import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <Link to="/dinner">
        <h2>BIRTHDAY DINNER</h2>
      </Link>
      <Link to="/vacation">
        <h2>VACATION</h2>
      </Link>
      <Link to="/birthday">
        <h2>BIRTHDAY OUTFITS</h2>
      </Link>
    </nav>
  );
}

export default NavBar;

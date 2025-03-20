import "./../css/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="navbar-links"></div>
      <Link to={"/"} className="nav-link">
        Home
      </Link>
      <Link to={"/fav"} className="nav-link">
        Favourites
      </Link>
    </nav>
  );
}

export default NavBar;

import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png" alt="Parks Walks logo" />
          </Link>
        </div>

        <Link to="/" className="nav-title-link">
          <h1 className="nav-name">PARKS WALKS</h1>
        </Link>

        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <Link to="/#service-grid">Services</Link>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
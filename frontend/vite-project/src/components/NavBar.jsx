import {Link} from "react-router-dom"

function NavBar(){
  return (
    <nav className="navbar">
      <div className="logo">Nasheto Logo</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/register">REGISTER</Link></li>s
      </ul>
    </nav>
  );
}

export default NavBar;

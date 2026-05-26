import { Link } from "react-router-dom";

export default function GuestNavbar() {
  return (
    <div className="navbar">
      <h3 className="navbar-text">Realworld Blog</h3>
      <div className="navbar-links">
         <Link className="navbar-link" to="/">
        Home
      </Link>
      <Link className="navbar-link" to="/login">
        Sign in
      </Link>
      <Link className="navbar-link" to="logout">
        Sign out
      </Link>
      </div>
     
    </div>
  );
}

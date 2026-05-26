import { Link } from "react-router-dom"

export default function UserNavbar() {
    return(
        <div className="navbar">
            <h3 className="navbar-text">Realworld Blog</h3>
<div className="navbar-links">
     <Link className="navbar-link">Home</Link>
               <Link className="navbar-link">New Post</Link>
                  <Link className="navbar-link">Settings</Link>
                     <Link className="navbar-link">Profile</Link>
</div>
           
        </div>
    )
}
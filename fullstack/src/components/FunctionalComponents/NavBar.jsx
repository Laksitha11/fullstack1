import "react";
import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/About" className="link">About</Link></li>
                    <li><Link to="/Contact" className="link">Contact</Link></li>
                    <li><Link to="/Gallery" className="link">Gallery</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;
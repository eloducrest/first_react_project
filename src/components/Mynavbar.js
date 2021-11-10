import logo from '../img/logo.svg';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const Mynavbar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div className="Mynavbar">
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top" aria-label="Fourth navbar example">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className="logo-nav" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarsExample04"
                                aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample04">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className={`nav-link  ${splitLocation[1] === "" ? "active" : ""}`} aria-current="page" to="/">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  ${splitLocation[1] === "gallery" ? "active" : ""}`} to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  ${splitLocation[1] === "contact" ? "active" : ""}`} to="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Mynavbar;

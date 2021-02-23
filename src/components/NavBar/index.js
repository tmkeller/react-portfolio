import React from 'react';
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1>Timothy Michael Keller</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/contact" className={ location.pathname === "/contact" ? "nav-link active" : "nav-link" }>
                        Contact
                    </Link>
                    <Link to="/portfolio" className={ location.pathname === "/portfolio" ? "nav-link active" : "nav-link" }>
                        Portfolio
                    </Link>
                    <Link to="/" className={ location.pathname === "/" ? "nav-link active" : "nav-link" }>
                        About
                    </Link>
                </ul>
            </section>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import "./style.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1>Timothy Michael Keller</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">About<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default NavBar;
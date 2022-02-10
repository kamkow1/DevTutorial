import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DevTutorial</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">strona główna</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projekty</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <a href="https://github.com/kamkow1" target="_blank">autor</a>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
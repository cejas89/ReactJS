import React from "react";
import './NavBar.css'

export const MiPrimerComponente = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid nav-container">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="logo" width="60" height="60"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link nav-destination" aria-current="page" href="pages/destination.html">Destinos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-about" href="pages/about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-faqs" href="pages/FAQs.html">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-contact" href="pages/contact.html">Contacto</a>
                </li>
              </ul>
    
            </div>
          </div>
        </nav>
      </header>

    )
}
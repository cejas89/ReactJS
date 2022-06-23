import React from "react";
import logo from './logo.png'
import carrito from './carrito.png'
import './NavBar.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid nav-container">
            <Link to={'/'}><a className="navbar-brand" href="index.html">
              <img className="navbar-logo" src= {logo} alt="logo" width="60" height="60"/>
            </a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to={'/productos'}>
                  <a className="nav-link nav-destination" aria-current="page" href="productos.html">Productos</a></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-about" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-faqs" href="FAQs.html">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-contact" href="contact.html">Contacto</a>
                </li>
              </ul>
              <a className="navbar-brand" href="index.html">
              <img className="navbar-logo" src= {carrito} alt="logo" width="50" height="50"/>
              </a>
    
            </div>
          </div>
        </nav>
      </header>

    )
}

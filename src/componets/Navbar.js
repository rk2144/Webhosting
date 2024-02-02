import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showHostingOptions, setShowHostingOptions] = useState(false);

  const toggleHostingOptions = () => {
    setShowHostingOptions(!showHostingOptions);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbar-expand-dark" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">TpHOST</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/domain" className="nav-link">Domain</Link></li>

              <li className={`nav-item dropdown ${showHostingOptions ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#" onClick={toggleHostingOptions}>
                  Hosting
                </a>
                <ul className={`dropdown-menu ${showHostingOptions ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/sharedHosting">Shared Hosting</Link></li>
                  <li><Link className="dropdown-item" to="/cloudHosting">Cloud Hosting</Link></li>
                  <li><Link className="dropdown-item" to="/resellerHosting">Reseller Hosting</Link></li>
				  <li><Link className="dropdown-item" to="/vps">VPS Hosting</Link></li>
                  {/* Add more dropdown items here if needed */}
                </ul>
              </li>

              <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item cta"><Link to="/contact" className="nav-link"><span>Get started</span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className="App">
     
     <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">TpHOST</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate">
                <Link to="#">
                  <span className="icon-twitter" />
                </Link>
              </li>
              <li className="ftco-animate">
                <Link to="#">
                  <span className="icon-facebook" />
                </Link>
              </li>
              <li className="ftco-animate">
                <Link to="#">
                  <span className="icon-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Unseful Links</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="py-2 d-block">
                  Servers
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Windos Hosting
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  OS Servers
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Linux Servers
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Navigational</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="py-2 d-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/domain" className="py-2 d-block">
                  Domain
                </Link>
              </li>
              <li>
                <Link to="/hosting" className="py-2 d-block">
                  Hosting
                </Link>
              </li>
              <li>
                <Link to="/about" className="py-2 d-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-2 d-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="py-2 d-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Office</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    Vijay Nagar Indore, (M.P)
                  </span>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon icon-phone" />
                    <span className="text">+91 9864068717</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@tphost.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" The Power Host "}
            <i className="icon-heart" aria-hidden="true" /> by{" "}
            <Link to="https://colorlib.com" target="_blank">
              Colorlib
            </Link>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>

    </div>
  );
}

export default Footer;
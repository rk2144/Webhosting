import React from 'react'
import Navbar from '../../componets/Navbar';
import Footer from '../../componets/Footer';
import { Link } from 'react-router-dom';

function ShareHost(){
return(
    
    <>
    <Navbar/>
  <section className="home-slider owl-carousel">
    <div
      className="slider-item bread-item"
      style={{ backgroundImage: "url(assets/images/bg_1.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="container-fluid">
        <div
          className="row slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div
            className="col-md-8 mt-5 text-center col-sm-12 ftco-animate"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <p
              className="breadcrumbs"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              <span className="mr-2">
                <Link to="/">Home</Link>
              </span>{" "}
              <span>Web Hosting</span>
            </p>
            <h1
              className="mb-3 bread"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Web Hosting
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center ftco-animate">
          <div className="steps">
            <div className="icon mb-4 d-flex justify-content-center align-items-center">
              <span className="flaticon-cloud-computing-1" />
            </div>
            <h3>Choose Your Plan </h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center ftco-animate">
          <div className="steps">
            <div className="icon mb-4 d-flex justify-content-center align-items-center">
              <span className="flaticon-account" />
            </div>
            <h3>Create Your Account</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center ftco-animate">
          <div className="steps">
            <div className="icon mb-4 d-flex justify-content-center align-items-center">
              <span className="flaticon-web-page" />
            </div>
            <h3>Launch</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-4">Our Best Pricing in Share Hosting</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-3 col-md-6 ftco-animate">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Free</h2>
              <span className="price">
                <sup>$</sup> <span className="number">0</span>
              </span>
              <span className="excerpt d-block">100% free. Forever</span>
              <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
              <ul className="pricing-text mb-4">
                <li>
                  <strong>150 GB</strong> Bandwidth
                </li>
                <li>
                  <strong>100 GB</strong> Storage
                </li>
                <li>
                  <strong>$1.00 / GB</strong> Overages
                </li>
                <li>All features</li>
              </ul>
              <Link to="/" className="btn btn-primary d-block px-3 py-3 mb-4">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ftco-animate">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Startup</h2>
              <span className="price">
                <sup>$</sup> <span className="number">19</span>
              </span>
              <span className="excerpt d-block">All features are included</span>
              <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
              <ul className="pricing-text mb-4">
                <li>
                  <strong>450 GB</strong> Bandwidth
                </li>
                <li>
                  <strong>400 GB</strong> Storage
                </li>
                <li>
                  <strong>$2.00 / GB</strong> Overages
                </li>
                <li>All features</li>
              </ul>
              <Link to="/" className="btn btn-primary d-block px-3 py-3 mb-4">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ftco-animate">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Premium</h2>
              <span className="price">
                <sup>$</sup> <span className="number">49</span>
              </span>
              <span className="excerpt d-block">All features are included</span>
              <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
              <ul className="pricing-text mb-4">
                <li>
                  <strong>250 GB</strong> Bandwidth
                </li>
                <li>
                  <strong>200 GB</strong> Storage
                </li>
                <li>
                  <strong>$5.00 / GB</strong> Overages
                </li>
                <li>All features</li>
              </ul>
              <Link to="/" className="btn btn-primary d-block px-3 py-3 mb-4">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ftco-animate">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Pro</h2>
              <span className="price">
                <sup>$</sup> <span className="number">99</span>
              </span>
              <span className="excerpt d-block">All features are included</span>
              <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
              <ul className="pricing-text mb-4">
                <li>
                  <strong>450 GB</strong> Bandwidth
                </li>
                <li>
                  <strong>400 GB</strong> Storage
                </li>
                <li>
                  <strong>$20.00 / GB</strong> Overages
                </li>
                <li>All features</li>
              </ul>
              <Link to="/" className="btn btn-primary d-block px-3 py-3 mb-4">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2 className="mb-4">Your Question</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div id="accordion">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menuone"
                      aria-expanded="true"
                      aria-controls="menuone"
                    >
                      What is your Share domain name?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menuone" className="collapse show">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menutwo"
                      aria-expanded="false"
                      aria-controls="menutwo"
                    >
                      How long is my Share domain name valid?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menutwo" className="collapse">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menu3"
                      aria-expanded="false"
                      aria-controls="menu3"
                    >
                      Can I sell my Share domain name?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menu3" className="collapse">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menu4"
                      aria-expanded="false"
                      aria-controls="menu4"
                    >
                      Can I cancel a Share domain?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menu4" className="collapse">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menu5"
                      aria-expanded="false"
                      aria-controls="menu5"
                    >
                      How do I transfer a Share domain name?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menu5" className="collapse">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Link
                      className="card-link"
                      data-toggle="collapse"
                      to="/menu6"
                      aria-expanded="false"
                      aria-controls="menu6"
                    >
                      How do I setup URL forwarding?{" "}
                      <span className="collapsed">
                        <i className="icon-plus-circle" />
                      </span>
                      <span className="expanded">
                        <i className="icon-minus-circle" />
                      </span>
                    </Link>
                  </div>
                  <div id="menu6" className="collapse">
                    <div className="card-body">
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 <Footer/>
  {/* loader */}
  <div id="ftco-loader" className="show fullscreen">
    <svg className="circular" width="48px" height="48px">
      <circle
        className="path-bg"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        stroke="#eeeeee"
      />
      <circle
        className="path"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        strokeMiterlimit={10}
        stroke="#F96D00"
      />
    </svg>
  </div>
</>

    
    
);
}
export default ShareHost;

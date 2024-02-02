import React, { Fragment } from 'react'
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
import { Link } from 'react-router-dom';


function Contact(){
    return(
        <Fragment>
           <>
  <Navbar/>
  {/* END nav */}
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
                <Link href="index.html">Home</Link>
              </span>{" "}
              <span>Contact</span>
            </p>
            <h1
              className="mb-3 bread"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section contact-section ftco-degree-bg">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-12 mb-4">
          <h2 className="h4">Contact Information</h2>
        </div>
        <div className="w-100" />
        <div className="col-md-3">
          <p>
            <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
            10016
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span>Phone:</span> <Link href="tel://1234567920">+91 9864068717</Link>
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span>Email:</span>{" "}
            <Link href="mailto:info@yoursite.com">info@tphos.com</Link>
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span>Website</span> <Link href="#">yoursite.com</Link>
          </p>
        </div>
      </div>
      <div className="row block-9">
        <div className="col-md-6 pr-md-5">
          <form action="#">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6" id="map" />
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

        </Fragment>
    )
}
export default Contact;
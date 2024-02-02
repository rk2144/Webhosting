import React, { Fragment } from 'react'
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';


function Blog(){
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
              <span>Blog</span>
            </p>
            <h1
              className="mb-3 bread"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Read Blog
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("assets/images/image_1.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("assets/images/image_2.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("assets/images/image_3.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_4.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_5.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <Link
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_6.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link href="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link href="#">Admin</Link>
                </div>
                <div>
                  <Link href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <Link href="#">&lt;</Link>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li>
                <Link href="#">4</Link>
              </li>
              <li>
                <Link href="#">5</Link>
              </li>
              <li>
                <Link href="#">&gt;</Link>
              </li>
            </ul>
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

        </Fragment>
    )
}
export default Blog;
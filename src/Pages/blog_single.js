import React, { Fragment } from 'react'
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';


function Blog_single(){
    return(
        <Fragment>
           <>
  <Navbar/>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div
      className="slider-item bread-item"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
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
                <Link to="/index">Home</Link>
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_1.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_2.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_3.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_4.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_5.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
              to="blog-single "
              className="block-20"
              style={{ backgroundImage: 'url("images/image_6.jpg")' }}
            ></Link>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <Link to="#">Sep. 20, 2018</Link>
                </div>
                <div>
                  <Link to="#">Admin</Link>
                </div>
                <div>
                  <Link to="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </Link>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <Link to="#">
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
                <Link to="#">&lt;</Link>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">4</Link>
              </li>
              <li>
                <Link to="#">5</Link>
              </li>
              <li>
                <Link to="#">&gt;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">WebHost</h2>
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
                <Link to="#" className="py-2 d-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Domain
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Hosting
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="py-2 d-block">
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
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon icon-phone" />
                    <span className="text">+2 392 3929 210</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
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
            Copyright © All rights reserved | This template is made with{" "}
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
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="index ">
        WebHost
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="index " className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about " className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="domain " className="nav-link">
              Domain
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="hosting ">
              Hosting
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="blog " className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact " className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item cta">
            <Link to="contact " className="nav-link">
              <span>Get started</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div
      className="slider-item bread-item"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
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
                <Link to="index ">Home</Link>
              </span>{" "}
              <span className="mr-2">
                <Link to="blog ">Blog</Link>
              </span>{" "}
              <span>Blog Details</span>
            </p>
            <h1
              className="mb-3 bread"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Blog Details
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8 ftco-animate">
          <h2 className="mb-3">#1. We Love WordPress Themes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
            perferendis et doloribus unde architecto optio laboriosam porro
            adipisci sapiente officiis nemo accusamus ad praesentium? Esse
            minima nisi et. Dolore perferendis, enim praesentium omnis, iste
            doloremque quia officia optio deserunt molestiae voluptates soluta
            architecto tempora.
          </p>
          <p>
            <img src="images/image_6.jpg" alt="" className="img-fluid" />
          </p>
          <p>
            Molestiae cupiditate inventore animi, maxime sapiente optio, illo
            est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum
            magni reiciendis qui voluptate quisquam voluptatem soluta illo eum
            ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur
            dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima
            esse vero ut ea, repudiandae suscipit!
          </p>
          <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
          <p>
            Temporibus ad error suscipit exercitationem hic molestiae totam
            obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
            maiores ex architecto voluptatum aut officia doloremque. Error
            dolore voluptas, omnis molestias odio dignissimos culpa ex earum
            nisi consequatur quos odit quasi repellat qui officiis reiciendis
            incidunt hic non? Debitis commodi aut, adipisci.
          </p>
          <p>
            <img src="images/image_8.jpg" alt="" className="img-fluid" />
          </p>
          <p>
            Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
            reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
            tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
            consectetur suscipit veritatis nulla quos quia aspernatur
            perferendis, libero sint. Error, velit, porro. Deserunt minus,
            quibusdam iste enim veniam, modi rem maiores.
          </p>
          <p>
            Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo
            velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur,
            ipsa vel nisi in dolorum consequatur, veritatis porro explicabo
            soluta commodi libero voluptatem similique id quidem? Blanditiis
            voluptates aperiam non magni. Reprehenderit nobis odit inventore,
            quia laboriosam harum excepturi ea.
          </p>
          <p>
            Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam
            quidem, dolor distinctio similique asperiores voluptas enim,
            exercitationem ratione aut adipisci modi quod quibusdam iusto,
            voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur
            totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis.
            Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
          </p>
          <p>
            Voluptas dolores dignissimos dolorum temporibus, autem aliquam
            ducimus at officia adipisci quasi nemo a perspiciatis provident
            magni laboriosam repudiandae iure iusto commodi debitis est
            blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit.
            Error provident, pariatur cupiditate soluta doloremque aut ratione.
            Harum voluptates mollitia illo minus praesentium, rerum ipsa
            debitis, inventore?
          </p>
          <div className="tag-widget post-tag-container mb-5 mt-5">
            <div className="tagcloud">
              <Link to="#" className="tag-cloud-link">
                Life
              </Link>
              <Link to="#" className="tag-cloud-link">
                Sport
              </Link>
              <Link to="#" className="tag-cloud-link">
                Tech
              </Link>
              <Link to="#" className="tag-cloud-link">
                Travel
              </Link>
            </div>
          </div>
          <div className="about-author d-flex p-5 bg-light">
            <div className="bio align-self-md-center mr-5">
              <img
                src="images/person_1.jpg"
                alt="Image placeholder"
                className="img-fluid mb-4"
              />
            </div>
            <div className="desc align-self-md-center">
              <h3>Lance Smith</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
          <div className="pt-5 mt-5">
            <h3 className="mb-5">6 Comments</h3>
            <ul className="comment-list">
              <li className="comment">
                <div className="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder" />
                </div>
                <div className="comment-body">
                  <h3>John Doe</h3>
                  <div className="meta">Sept. 24, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <Link to="#" className="reply">
                      Reply
                    </Link>
                  </p>
                </div>
              </li>
              <li className="comment">
                <div className="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder" />
                </div>
                <div className="comment-body">
                  <h3>John Doe</h3>
                  <div className="meta">Sept. 24, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <Link to="#" className="reply">
                      Reply
                    </Link>
                  </p>
                </div>
                <ul className="children">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">Sept. 24, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link to="#" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img
                            src="images/person_1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">Sept. 24, 2018 at 2:21pm</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <Link to="#" className="reply">
                              Reply
                            </Link>
                          </p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img
                                src="images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">
                                Sept. 24, 2018 at 2:21pm
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <Link to="#" className="reply">
                                  Reply
                                </Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="comment">
                <div className="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder" />
                </div>
                <div className="comment-body">
                  <h3>John Doe</h3>
                  <div className="meta">Sept. 24, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <Link to="#" className="reply">
                      Reply
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
            {/* END comment-list */}
            <div className="comment-form-wrap pt-5">
              <h3 className="mb-5">Leave a comment</h3>
              <form action="#" className="p-5 bg-light">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name=""
                    id="message"
                    cols={30}
                    rows={10}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Post Comment"
                    className="btn py-3 px-4 btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* .col-md-8 */}
        <div className="col-md-4 sidebar ftco-animate">
          <div className="sidebar-box">
            <form action="#" className="search-form">
              <div className="form-group">
                <div className="icon">
                  <span className="icon-search" />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
            </form>
          </div>
          <div className="sidebar-box ftco-animate">
            <div className="categories">
              <h3>Categories</h3>
              <li>
                <Link to="#">
                  Food <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Dish <span>(22)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Desserts <span>(37)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Drinks <span>(42)</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  Ocassion <span>(14)</span>
                </Link>
              </li>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Recent Blog</h3>
            <div className="block-21 mb-4 d-flex">
              <Link
                className="blog-img mr-4"
                style={{ backgroundImage: "url(images/image_1.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <Link to="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
                <div className="meta">
                  <div>
                    <Link to="#">
                      <span className="icon-calendar" /> July 12, 2018
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-person" /> Admin
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-chat" /> 19
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <Link
                className="blog-img mr-4"
                style={{ backgroundImage: "url(images/image_2.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <Link to="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
                <div className="meta">
                  <div>
                    <Link to="#">
                      <span className="icon-calendar" /> July 12, 2018
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-person" /> Admin
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-chat" /> 19
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <Link
                className="blog-img mr-4"
                style={{ backgroundImage: "url(images/image_3.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <Link to="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </Link>
                </h3>
                <div className="meta">
                  <div>
                    <Link to="#">
                      <span className="icon-calendar" /> July 12, 2018
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-person" /> Admin
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <span className="icon-chat" /> 19
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Tag Cloud</h3>
            <div className="tagcloud">
              <Link to="#" className="tag-cloud-link">
                dish
              </Link>
              <Link to="#" className="tag-cloud-link">
                menu
              </Link>
              <Link to="#" className="tag-cloud-link">
                food
              </Link>
              <Link to="#" className="tag-cloud-link">
                sweet
              </Link>
              <Link to="#" className="tag-cloud-link">
                tasty
              </Link>
              <Link to="#" className="tag-cloud-link">
                delicious
              </Link>
              <Link to="#" className="tag-cloud-link">
                desserts
              </Link>
              <Link to="#" className="tag-cloud-link">
                drinks
              </Link>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Paragraph</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  {/* .section */}
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
export default Blog_single;
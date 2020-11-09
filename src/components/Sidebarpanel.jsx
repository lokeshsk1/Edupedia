import React from "react";
import ReactDOM from "react-dom";

function Sidebarpanel() {
  return (
    <div>
      <div className="sidebarpanel">
      <ul id="slide-out" className="collapsible side-nav">
        <li className="list-top">
          <div className="user-view">
            <img
              className="responsive-img"
              src="images/testimonial1.png"
              alt=""
            />
            <h4>Lokesh S</h4>
            <span>Chennai</span>
          </div>
        </li>
        <li>
          <a href="http://www.google.com">
            {" "}
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="course.html">
            <i className="fa fa-graduation-cap"></i>Course
          </a>
        </li>
        <li>
          <a href="teacher.html">
            <i className="fa fa-user"></i>Teacher
          </a>
        </li>
        <li>
          <a href="event.html">
            <i className="fa fa-calendar-alt"></i>Event
          </a>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="fa fa-clone"></i>Student Blog
            <span>
              <i className="fa fa-angle-right right"></i>
            </span>
          </div>
          <div className="collapsible-body">
            <ul>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-single.html">Blog Single</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="fa fa-clone"></i>Pages
            <span>
              <i className="fa fa-angle-right right"></i>
            </span>
          </div>
          <div className="collapsible-body">
            <ul>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="features.html">Features</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="page-not-found.html">Page Not Found</a>
              </li>
              <li>
                <a href="pricing-table.html">Pricing</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="contact.html">
            <i className="fa fa-envelope"></i>Contact
          </a>
        </li>
        <li>
          <a href="login.html">
            <i className="fa fa-sign-in-alt"></i>Login
          </a>
        </li>
        <li>
          <a href="register.html">
            <i className="fa fa-user-plus"></i>Register
          </a>
        </li>
        <li>
          <a href="index.html">
            <i className="fa fa-sign-out-alt"></i>Log Out
          </a>
        </li>
      </ul>
    </div>
    </div>
    
  );
}

export default Sidebarpanel;

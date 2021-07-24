import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          {/* All details about my page and some extra information. */}
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Home</h2>
            <Link to="/Home">Home Page</Link>
          </div>
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/About">Abount</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/Contact">Contact Me</Link>
          </div>
          <div class="footer-link-items">
            <h2>How it Works</h2>
            <Link to="/HowItWorks">How it Works</Link>
          </div>
          <div class="footer-link-items">
            <h2>Joing the Hive</h2>
            <Link to="/JoingHive">Joing the Hive</Link>
          </div>
        </div>
      </div>
      {/* <div class="social-icons">
        <a
          class="social-icon-link"
          href="https://github.com/RenanBuzzi"
          target="#"
          aria-label="GitHub"
        >
          <i class="fa fa-github" />
        </a>
        <a
          class="social-icon-link"
          href="https://www.linkedin.com/in/renangasparbuzzi"
          target="#"
          aria-label="Linkedin"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo"></div>
          <small class="website-rights">talk2bee © 2021</small>
          <div class="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

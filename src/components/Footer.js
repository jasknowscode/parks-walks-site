import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="Parks Walks dog logo"
            className="footer-dog-logo"
          />
          <h2 className="footer-logo-text">Parks Walks</h2>

          <p className="footer-tagline">
            Reliable, insured pet care for Chicago pets and their people.
          </p>

          <div className="footer-bonded">
            <img
            src={`${process.env.PUBLIC_URL}/assets/footer-badge.png`}
            alt="insured and bonded badge"
            className="footer-badge"
            />
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="/#top">Home</a></li>
            <li><a href="/#service-grid">Services</a></li>
            <li><a href="/#how-it-works">How It Works</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get In Touch</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:inquiries@parkswalks.com">inquiries@parkswalks.com</a>
            </li>
            <li>Chicago, Illinois</li>
            <li>Available for walks, drop-ins, overnights, hotel stays, and events.</li>
          </ul>
        </div>

        <div className="footer-col footer-social-col">
          <h3>Follow</h3>
          <div className="footer-social">
            <a
              href="https://instagram.com/parkswalks"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/parkswalks"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Parks Walks. All rights reserved.</p>
      </div>
    </footer>
  );
}
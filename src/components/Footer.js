import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-title">Parks Walks</p>
          <p className="footer-copy">
            Reliable, insured pet care in Chicago.
          </p>
        </div>

        <div className="footer-contact">
          <a href="mailto:inquiries@parkswalks.com" className="footer-link">
             Email Us at Inquiries@ParksWalks.Com
          </a>
          <img
             src={`${process.env.PUBLIC_URL}/assets/bonded-insured-badge.png`}
             alt="Bonded and insured"
             className="footer-badge-image"
           />

        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Parks Walks. All rights reserved.</p>
      </div>
    </footer>
  );
}
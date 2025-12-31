import React, { useEffect } from 'react'; // ✅ useEffect ADDED
import './Footer.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, faTwitter, faLinkedinIn, 
  faInstagram, faPinterest, faSkype 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelopeOpen, 
  faChevronUp           // ✅ ADDED
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  // ✅ ADDED (NO existing code touched)
  useEffect(() => {
    const goTop = document.querySelector('.go-to-top');
    if (!goTop) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        goTop.classList.add('active');
      } else {
        goTop.classList.remove('active');
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    goTop.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      goTop.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main-content">
            
            {/* Section 1: Brand & Social */}
            <div className="footer-column brand-info">
              <div className="footer-logo">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <p className="footer-description">
                ABOQ India is the leading one stop Company catering to all your IT requirements. 
                We offer an array of services like Website Designing, Development, and Branding.
              </p>
              <div className="footer-social-links">
                <span>Follow us</span>
                <div className="social-icons">
                  <Link to="#" className="icon-box fb"><FontAwesomeIcon icon={faFacebookF} /></Link>
                  <Link to="#" className="icon-box tw"><FontAwesomeIcon icon={faTwitter} /></Link>
                  <Link to="#" className="icon-box insta"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link to="#" className="icon-box ln"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                </div>
              </div>
            </div>

            {/* Section 2: Quick Links */}
            <div className="footer-column links-widget">
              <div className="footer-heading">
                <h3>Quick Links</h3>
              </div>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/services">Privacy & Policy</Link></li>
                <li><Link to="/development">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div className="footer-column links-widget">
              <div className="footer-heading">
                <h3>Services</h3>
              </div>
              <ul className="footer-links-list">
                <li><Link to="/web-designing">Web Designing</Link></li>
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/graphics-designing">Graphics Designing</Link></li>
                <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
                <li><Link to="/google-ads">Google Ads</Link></li>
              </ul>
            </div>

            {/* Section 3: Contact Info */}
            <div className="footer-column contact-info">
              <div className="footer-heading">
                <h3>Contact Us</h3>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <div className="contact-text">
                  <h4>Find us</h4>
                  <span>A-01 Basement, ABC, New Delhi, 201009</span>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <div className="contact-text">
                  <h4>Call us</h4>
                  <span>(+91) 0987654321</span>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="contact-icon" />
                <div className="contact-text">
                  <h4>Mail us</h4>
                  <span>info@aboqindia.in</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container">
            <p>Copyright © {currentYear}, ABOQ India | All Right Reserved.</p>
          </div>
        </div>
      </footer>

      {/* ✅ ADDED WITHOUT TOUCHING FOOTER */}
      <div className="go-to-top">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </>
  );
}

export default Footer;

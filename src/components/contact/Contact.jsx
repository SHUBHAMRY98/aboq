import React, { useState } from 'react';
import './Contact.css';


import DesktopBanner from '../../assets/img/contact-desktop.png'
import MobileBanner from '../../assets/img/contact-mobile.png'


const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API Call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (

    <>

      <section className="banner-section">
                <picture>
                 
              <source media="(max-width: 768px)" srcSet={MobileBanner} />
                  
                  
                  <img src={DesktopBanner} alt="Banner" className="responsive-banner" />
                </picture>
                
                
              </section>




    <section className="contact-contact-container">
      <div className="contact-content-wrapper">
        

              <section className="how-it-works-section-contact" >
        <div className="hiw-container">
        {/* Header Section */}
        <div className="hiw-header fadeInUp">
          <span className="hiw-subtitle">CONTACT US</span>
          <h2 className="hiw-main-title">
           Let's Start a  <span>Conversation</span>.
          </h2>
        </div>
 <div className="hiw-grid">
     <div className="contact-info-column">
          
          <p className="contact-subtext">
            Have a question or ready to start a project? We’re here to help. 
            Fill out the form, and we’ll get back to you within 24 hours.
          </p>

          <div className="contact-contact-list">
            <ContactItem 
              icon="📧" 
              label="Email" 
              value="aboqindia@gmail.com" 
              note="We respond within 24 hours" 
            />
            <ContactItem 
              icon="📞" 
              label="Phone" 
              value="9319289888" 
              note="Mon-Fri, 10:30AM-7:30PM" 
            />
            <ContactItem 
              icon="📍" 
              label="Office" 
              value="Gaur City Center, 4-Murti, Greater Noida, India" 
            />
          </div>

        
        </div>
      </div>
      
      </div>
</section>
   
        {/* Left Side: Information */}
       

        {/* Right Side: Form */}
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="John Kumar" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" placeholder="+91 " required />
              </div>
            </div>

            <div className="form-group">
              <label>How can we help you? *</label>
              <select required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Website Design & Development</option>
                <option>AI Performance Marketing</option>
                <option>PPC Advertising</option>
                <option>Social Media Marketing</option>
                <option>SEO</option>
              </select>
            </div>

            <div className="form-group">
              <label>Monthly Marketing Budget</label>
              <select defaultValue="">
                <option value="" disabled>Select budget range</option>
                <option>₹ 10 - ₹ 25K</option>
                <option>₹ 25 - ₹ 50K</option>
                <option>₹ 50 - ₹ 75K</option>
                <option>₹ 100K+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tell us about your goals (Optional)</label>
              <textarea placeholder="Tell us about your business goals..." rows="4"></textarea>
            </div>

            <button type="submit" className="contact-btn-primary">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>

      </div>
    </section>

<div class="map-container">

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.5653841076314!2d77.42593597549981!3d28.605616375679475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1341438e9d%3A0x5f7dd3497a8f0d0a!2sGaur%20City%20Center!5e1!3m2!1sen!2sin!4v1766991414223!5m2!1sen!2sin" height="250px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

</>

  );
};

const ContactItem = ({ icon, label, value, note }) => (
  <div className="contact-contact-item">
    <span className="contact-icon">{icon}</span>
    <div className="contact-text">
      <strong>{label}</strong>
      <p>{value}</p>
      {note && <span>{note}</span>}
    </div>
  </div>
);

export default Contact;

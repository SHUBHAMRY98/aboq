import React, { useState, useEffect } from 'react';
import './Testimonial.css';


import Test1 from '../../assets/img/testimonial1.jfif'
import Test2 from '../../assets/img/testimonial2.jfif'
import Test3 from '../../assets/img/testimonial3.jfif'



const Testimonial= () => {
    const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Priya Khosla",
      role: "Client",
      img: Test1,
      text: "I have a lovely experience with Digital Top Guns as far as my social media and website maintenance is concerned. Satisfied with the services and quick response!"
    },
    {
      name: "Mansie Dewan",
      role: "Client",
      img: Test2,
      text: "Very customer focused! They understand requirements easily and are quick to deliver. Kudos to the technical team for a speedy turnaround."
    },
    {
      name: "Lakshmi",
      role: "Client",
      img:Test3,
      text: "Excellent work and they understand the customer requirements very well. Strongly recommend this company for Web design and hosting."
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);


  
  return (
       <section className="testimonial-section">
      <div className="testimonial-container">
        
        {/* Left Side: Content */}
        <div className="testimonial-text-side">
          <div className="section-title">
            <h2>Our Pride rests in our Customers satisfaction!</h2>
            <div className="heading-line"></div>
            <p>
              Be it a small start up Company or an Individual website, 
              We work with same zeal and creativity. We are overwhelmed with 
              gratitude for our clients for their trust and support!
            </p>
          </div>
          <div className="void"></div>
        </div>

        {/* Right Side: Slider Box */}
        <div className="testimonial-slider-box">
          <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img src={testimonials[current].img} alt="client" />
              </div>
            <div className="card-inner">
              <div className="testimonial-caption">
                <h6>{testimonials[current].name}</h6>
                <span>{testimonials[current].role}</span>
              </div>
              <div className="testimonial-message">
                <p>"{testimonials[current].text}"</p>
              </div>
            
            </div>

            {/* Dots Navigation */}
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === current ? 'active' : ''}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Testimonial;
import React, { useEffect, useRef } from 'react';
import  './About.css'
import  '../home/Home.css'
import Stats from '../stats/Stats';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import DesktopBanner from '../../assets/img/about-desktop.png'
import MobileBanner from '../../assets/img/about-mobile.png'

import AboutImg from '../../assets/img/1.webp';// adjust path if needed


import DigitalMar from '../../assets/img/digital-marketing.png';
import WebDesign from '../../assets/img/web-design.jpg'
import WebDevlopment from '../../assets/img/web-development.png'
import Graphics from '../../assets/img/graphic-design.png'
import GoogleADS from '../../assets/img/google-ads.png'
import SEO from '../../assets/img/seo.png'
import SMM from '../../assets/img/smm.png'


function About() {

    
  
    const missions = [
    {
      id:"01",
      title: "Research",
      description: "We carefully understand and document your business goals, target audience, design preferences, and branding requirements. ",
      
    },
    {
      id:"02",
      title: "Planning",
      description: "Our experts craft a tailored digital strategy that aligns with your goals, audience, and brand identity.",
      
    },
    {
     id:"03",
      title: "Design",
      description: "With data-driven execution, we turn your challenges into measurable success — more traffic, leads, and conversions.",
      
    }
  ];
  
  
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const animatedElements = sectionRef.current.querySelectorAll('.reveal');
      animatedElements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);

  return (
    
    <>

            <section className="banner-section">
           <picture>
            
         <source media="(max-width: 768px)" srcSet={MobileBanner} />
             
             
             <img src={DesktopBanner} alt="Banner" className="responsive-banner" />
           </picture>
           
           
         </section>





            <section className="how-it-works-section" ref={sectionRef}>
        <div className="hiw-container">
        {/* Header Section */}
        <div className="hiw-header fadeInUp">
          <span className="hiw-subtitle">ABOUT US</span>
          <h2 className="hiw-main-title">
            Best website <span>designing</span> & <span>Development</span> company, Delhi-NCR.
          </h2>
        </div>
 <div className="hiw-grid">
   <section className="about-main-section">
        <div className="custom-container">
          {/* Title Section */}
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>

          <div className="about-grid">
            {/* Left Content */}
            <motion.div
              className="about-text-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="about-details">
                <p>
                  ABOQ India is the <strong>Best website designing Company in Delhi-NCR</strong>.
                  We make sure that the services we offer meet our clients' expectations and help them grow their businesses. We have expertise meeting the demands of a wide variety of customers.
                </p>
                <p>
                  If you are looking for a <strong>“website designer near me”</strong>,
                  ABOQ India is definitely the right destination for you. We consider every detail of your job and create the most user-friendly website design for your company.
                </p>
              </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={AboutImg} alt="ABOQ India" className="responsive-img" />
            </motion.div>
          </div>
        </div>
      </section>
      </div>
      
      </div>
</section>
   

        <section className="how-it-works-section" ref={sectionRef}>
        <div className="hiw-container">
        {/* Header Section */}
        <div className="hiw-header fadeInUp">
          <span className="hiw-subtitle">OUR MISSION</span>
          <h2 className="hiw-main-title">
            <span>Transparency</span> and <span>performance</span>, the core of everything we do.
            
          </h2>
          <p className="hiw-description">
           Our Mission is to empower ambitious businesses with honest strategies, measurable results, and clear communication. We focus on building long-term partnerships by delivering data-driven digital marketing solutions that create real, sustainable growth.
           </p>
        </div>

         {/* missions Grid */}
        <div className="hiw-grid">
          {missions.map((mission, index) => (
          // <Link to="/contact"> 
           <div 
              key={mission.id} 
              className={`hiw-item  fadeInUp`} 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Content Card */}

              <div className="hiw-card">
                <h3 className="hiw-card-title">{mission.title}</h3>
                <p className="hiw-card-text">{mission.description}</p>
                {/* <span className="hiw-card-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 43 43" fill="none">
                    <path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path>
                  </svg>
                </span> */}
              </div>

            </div>
            // </Link>


          ))}
        </div>
      
      </div>
</section>

     <Stats/>

      <section className="choice-section">
        <div className="choice-wrapper">

          {/* Left Content Side */}
          <motion.div
            className="choice-content-side"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="choice-text-container">
              <h1 className="choice-title">Best Website Design Company</h1>
              <p className="choice-description">
                ABOQ India is the Right Choice for all types of Websites. If you are planning
                to start up your Company, or just a recently start up Company, or running your
                own store or shop for selling products, then ABOQ India is the perfect choice
                to turn your dreams into reality.
              </p>

              <div className="choice-btn-group">
                <Link to="/web-designing" className="btn-solid">Read More</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div
            className="choice-image-side"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="choice-img-box">
              <img src={WebDesign} alt="Best Website Design" className="img-fluid" />
            </div>
          </motion.div>

        </div>
      </section>


      <section className="revamp-section">
        <div className="revamp-wrapper">

          {/* Left Side: Image */}
          <motion.div
            className="revamp-image-side"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="revamp-img-container">
              <img src={WebDevlopment} alt="Revamp your site" className="img-responsive" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="revamp-content-side"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="revamp-text-wrapper">
              <h1 className="revamp-title">Best Web Development Company</h1>
              <p className="revamp-description">
                Get a quote from our Web Development Team today to see how we can improve the functionality of your site!
              </p>
              <div className="revamp-btn-container">
                <Link to="/web-development" className="revamp-quote-btn">Read More</Link>
                <Link to="/contact" className="revamp-quote-btn">Contact Us</Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>



      <section className="choice-section">
        <div className="choice-wrapper">

          {/* Left Content Side */}
          <motion.div
            className="choice-content-side"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="choice-text-container">
              <h1 className="choice-title">Best Graphics Design Company</h1>
              <p className="choice-description">
                ABOQ India is the Right Choice for all types of Websites. If you are planning
                to start up your Company, or just a recently start up Company, or running your
                own store or shop for selling products, then ABOQ India is the perfect choice
                to turn your dreams into reality.
              </p>

              <div className="choice-btn-group">
                <Link to="/graphics-designing" className="btn-solid">Read More</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div
            className="choice-image-side"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="choice-img-box">
              <img src={Graphics} alt="Best Website Design" className="img-fluid" />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="revamp-section">
        <div className="revamp-wrapper">

          {/* Left Side: Image */}
          <motion.div
            className="revamp-image-side"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="revamp-img-container">
              <img src={SEO} alt="Revamp your site" className="img-responsive" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="revamp-content-side"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="revamp-text-wrapper">
              <h1 className="revamp-title">Best Social Media Marketing Company</h1>
              <p className="revamp-description">
                Get a quote from our Web Development Team today to see how we can improve the functionality of your site!
              </p>
               <div className="revamp-btn-container">
                <Link to="/social-media-marketing" className="revamp-quote-btn">Read More</Link>
                <Link to="/contact" className="revamp-quote-btn">Contact Us</Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>



      <section className="choice-section">
        <div className="choice-wrapper">

          {/* Left Content Side */}
          <motion.div
            className="choice-content-side"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="choice-text-container">
              <h1 className="choice-title">Best Search Engine Optimization Company</h1>
              <p className="choice-description">
                ABOQ India is the Right Choice for all types of Websites. If you are planning
                to start up your Company, or just a recently start up Company, or running your
                own store or shop for selling products, then ABOQ India is the perfect choice
                to turn your dreams into reality.
              </p>

              <div className="choice-btn-group">
                <Link to="/search-engine-optimization" className="btn-solid">Read More</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div
            className="choice-image-side"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="choice-img-box">
              <img src={SMM} alt="Best Website Design" className="img-fluid" />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="revamp-section">
        <div className="revamp-wrapper">

          {/* Left Side: Image */}
          <motion.div
            className="revamp-image-side"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="revamp-img-container">
              <img src={GoogleADS} alt="Revamp your site" className="img-responsive" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="revamp-content-side"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="revamp-text-wrapper">
              <h1 className="revamp-title">Best Google Ads Company</h1>
              <p className="revamp-description">
                Get a quote from our Web Development Team today to see how we can improve the functionality of your site!
              </p>
              <div className="revamp-btn-container">
                <Link to="/google-ads" className="revamp-quote-btn">Read More</Link>
                <Link to="/contact" className="revamp-quote-btn">Contact Us</Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>






  
    </>
    
  );
}

export default About;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import '../home/Home.css'
import '../services.css'


import DesktopBanner from '../../assets/img/banner-designing-desktop.png'
import MobileBanner from '../../assets/img/banner-designing-desktop.png'
import DesktopBanner2 from '../../assets/img/b11.jpg'
import MobileBanner2 from '../../assets/img/b2.jpg'
import AboutImg from '../../assets/img/1.webp'; 
import Review from '../review/Review';




function WebDevelopment(){



    const webDevelopment = [
  {
    id: 1,
    title: "Technical Planning",
    heading: "Defining a Strong Development Foundation",
    content: "We translate business objectives into clear technical requirements, ensuring a scalable and future-ready development roadmap."
  },
  {
    id: 2,
    title: "Backend Engineering",
    heading: "Robust Systems Built to Scale",
    content: "We design secure, efficient architectures and backend systems that support performance, flexibility, and long-term growth."
  },
  {
    id: 3,
    title: "Frontend Integration",
    heading: "Seamless, Responsive User Interfaces",
    content: "We develop high-quality, responsive frontends that deliver consistent experiences across devices and platforms."
  },
  {
    id: 4,
    title: "Performance",
    heading: "Optimized for Speed, Safety, and Visibility",
    content: "We enhance site architecture, content, and technical performance to improve search rankings and deliver seamless user experiences."
  },
  {
    id: 5,
    title: "Maintenance",
    heading: "Ongoing Support & Maintenance",
    content: "We manage smooth deployment, rigorous testing, and continuous support to ensure your digital presence remains secure and up-to-date."
  }
];


const [activeTab, setActiveTab] = useState(1);

    return (
        <>

       <section className="banner-section">
  <picture>
    {/* Jab screen 768px se kam ho tab ye image load hogi */}
<source media="(max-width: 768px)" srcSet={MobileBanner2} />
    
    {/* Default image (Desktop) */}
    <img src={DesktopBanner} alt="Banner" className="responsive-banner" />
  </picture>
  
  
</section>



       <section className="ws-section">
      <div className="ws-container">
        
        
        <div className="ws-header">
             <div class="section-title" >
            <h2 class="title-text">What Includes in Our Web Development</h2>
            <div class="title-dash">
                </div>
                </div>
        </div>

        {/* Tab Navigation */}
        <div className="ws-tabs-nav">
          {webDevelopment.map((service) => (
            <button
              key={service.id}
              className={`ws-tab-btn ${activeTab === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="ws-content-wrapper">
          <AnimatePresence mode="wait">
            {webDevelopment.map((service) => (
              service.id === activeTab && (
                <motion.div
                  key={service.id}
                  className="ws-tab-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="ws-card-heading">{service.heading}</h3>
                  <p className="ws-card-text">{service.content}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>


        <section className="service-section">
         <div className="service-container">
          {/* Title Section */}
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="title-text">Best website development company, Delhi-NCR</h2>
            <div className="title-dash"></div>
          </motion.div>

          <div className="service-grid">
            {/* Left Content */}
            <motion.div
              className="service-text-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="service-details">
                <p>
                  ABOQ India is the <strong>Best website development Company in Delhi-NCR</strong>.
                  We make sure that the services we offer meet our clients' expectations and help them grow their businesses. We have expertise meeting the demands of a wide variety of customers.
                </p>
                <p>
                  If you are looking for a <strong>“website developer near me”</strong>,
                  ABOQ India is definitely the right destination for you. We consider every detail of your job and create the most user-friendly website design for your company.
                </p>
              </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              className="service-image-wrapper"
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



    <Review/>

            
            </>
    )
}

export default WebDevelopment;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../home/Home.css'
import '../services.css'

import DesktopBanner from '../../assets/img/graphics-desktop.png'
import MobileBanner from '../../assets/img/graphics-mobile.png'

import AboutImg from '../../assets/img/img3.png'; 
import Review from '../review/Review';


function graphicsDesigning(){



    const graphicsDesigning = [
  {
    id: 1,
    title: "Discovery & Creative",
    heading: "Defining a Clear Visual Identity",
    content: "We understand your brand values, audience, and objectives to establish a strong creative direction."
  },
  {
    id: 2,
    title: "Design Strategy",
    heading: "Ideas Shaped into Purposeful Design",
    content: "We transform concepts into strategic visuals that align with your brand message and business goals."
  },
  {
    id: 3,
    title: "Asset Creation",
    heading: "High-Impact, Consistent Visuals",
    content: "We design high-quality graphics across digital and print formats, ensuring visual consistency and clarity."
  },
  {
    id: 4,
    title: "Quality Control",
    heading: "Precision Through Detail",
    content: "We refine designs through structured feedback and quality checks to deliver polished, professional results."
  },
  {
    id: 5,
    title: "Brand Support",
    heading: "Ready-to-Use Creative Assets",
    content: "We deliver optimized design files and provide ongoing support to maintain brand consistency across platforms."
  }
];


const [activeTab, setActiveTab] = useState(1);

    return (
        <>

       <section className="banner-section">
  <picture>
   
<source media="(max-width: 768px)" srcSet={MobileBanner} />
    
    
    <img src={DesktopBanner} alt="Banner" className="responsive-banner" />
  </picture>
  
  
</section>



       <section className="ws-section">
      <div className="ws-container">
        
        
        <div className="ws-header">
             <div class="section-title" >
            <h2 class="title-text">What Includes in Our Graphics Designing</h2>
            <div class="title-dash">
                </div>
                </div>
        </div>

        {/* Tab Navigation */}
        <div className="ws-tabs-nav">
          {graphicsDesigning.map((service) => (
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
            {graphicsDesigning.map((service) => (
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
            <h2 className="title-text">Best Graphics designing company, Delhi-NCR</h2>
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
    ABOQ India is a leading <strong>Graphic Designing Company in Delhi-NCR</strong>,
    delivering visually compelling designs that strengthen brand identity and
    communicate your message with clarity and impact. We serve businesses across
    diverse industries with creative excellence.
  </p>

  <p>
    If you are searching for a <strong>“graphic designer near me”</strong>,
    ABOQ India is the right creative partner for you.
    We focus on every design detail to create high-quality visuals that engage
    audiences and support your brand’s growth across digital and print platforms.
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

export default graphicsDesigning;
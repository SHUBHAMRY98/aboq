import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../home/Home.css'
import '../services.css'

import DesktopBanner from '../../assets/img/smm-desktop.png'
import MobileBanner from '../../assets/img/smm-mobile.png'

import AboutImg from '../../assets/img/img5.png'; 
import Review from '../review/Review';


function Smm(){



    const smm = [
  {
    id: 1,
    title: "Strategy",
    heading: "Aligning Brand Voice with Business Objectives",
    content: "We define a tailored social media strategy based on your goals, audience insights, and competitive landscape."
  },
  {
    id: 2,
    title: "Branding",
    heading: "Consistent, High-Impact Visual Storytelling",
    content: "We design and curate engaging content that reflects your brand identity and drives meaningful engagement."
  },
  {
    id: 3,
    title: "Management & Scheduling",
    heading: "Consistent Presence Across Channels",
    content: "We manage publishing schedules, optimize posting times, and ensure active brand visibility across all platforms."
  },
  {
    id: 4,
    title: "Growth",
    heading: "Building Authentic Audience Relationships",
    content: "We monitor interactions, respond to queries, and foster community engagement to strengthen brand loyalty."
  },
  {
    id: 5,
    title: "Optimization",
    heading: "Measurable Performance with Continuous Improvement",
    content: "We track key metrics, provide transparent reports, and refine strategies to maximize reach, engagement, and conversions."
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
            <h2 class="title-text">What Includes in Our Social Media Marketing</h2>
            <div class="title-dash">
                </div>
                </div>
        </div>

        {/* Tab Navigation */}
        <div className="ws-tabs-nav">
          {smm.map((service) => (
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
            {smm.map((service) => (
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
            <h2 className="title-text">Best Social Media Marketing company, Delhi-NCR</h2>
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
    ABOQ India is a leading <strong>Social Media Marketing Company in Delhi-NCR</strong>,
    helping brands build a strong digital presence through strategic content,
    audience engagement, and performance-driven social campaigns.
    We work with businesses across diverse industries.
  </p>

  <p>
    If you are searching for a <strong>“Social Media Marketing Company near me”</strong>,
    ABOQ India is the right partner for your brand’s growth.
    We focus on platform-specific strategies, creative storytelling,
    and data-backed optimization to drive engagement, leads, and conversions.
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

export default Smm;
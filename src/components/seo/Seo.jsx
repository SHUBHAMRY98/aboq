import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../home/Home.css'
import '../services.css'

import DesktopBanner from '../../assets/img/website-designing.png'
import MobileBanner from '../../assets/img/mobile-designing.png'

import AboutImg from '../../assets/img/img6.png'; 
import Review from '../review/Review';


function Seo(){



    const seo = [
  {
    id: 1,
    title: "SEO Audit",
    heading: "Building a Data-Driven Foundation",
    content: "We conduct a comprehensive website and competitor audit to define a customized SEO strategy aligned with your business goals."
  },
  {
    id: 2,
    title: "Keyword Research",
    heading: "Targeting the Right Search Intent",
    content: "We identify high-value keywords and map them to optimized content that attracts qualified traffic and improves relevance."
  },
  {
    id: 3,
    title: "On-Page SEO",
    heading: "Optimized for Search & User Experience",
    content: "We optimize site structure, metadata, content, and internal linking to improve visibility and usability."
  },
  {
    id: 4,
    title: "Technical SEO",
    heading: "Strengthening the Technical Core",
    content: "We enhance website speed, mobile performance, indexing, and crawlability to meet search engine best practices."
  },
  {
    id: 5,
    title: "Continuous Growth",
    heading: "Measurable Results That Scale",
    content: "We track performance, provide transparent reports, and continuously refine strategies to ensure sustained ranking growth."
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
            <h2 class="title-text">What Includes in Our SEO Services</h2>
            <div class="title-dash">
                </div>
                </div>
        </div>

        {/* Tab Navigation */}
        <div className="ws-tabs-nav">
          {seo.map((service) => (
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
            {seo.map((service) => (
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
            <h2 className="title-text">Best Search Engine Optimization company, Delhi-NCR</h2>
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
    ABOQ India is a trusted <strong>SEO Service Provider Company in Delhi-NCR</strong>,
    delivering data-driven SEO solutions that improve search visibility,
    increase organic traffic, and support long-term business growth.
    We work with businesses across diverse industries and market segments.
  </p>

  <p>
    If you are searching for an <strong>“SEO service company near me”</strong>,
    ABOQ India is the right partner for your digital growth.
    We analyze every aspect of your website—including content, keywords,
    and technical performance—to build SEO strategies that deliver measurable results.
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

export default Seo;
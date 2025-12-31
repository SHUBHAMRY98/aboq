import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../home/Home.css'
import '../services.css'

import DesktopBanner from '../../assets/img/website-designing.png'
import MobileBanner from '../../assets/img/mobile-designing.png'

<<<<<<< HEAD
import AboutImg from '../../assets/img/img5.png'; 
=======
import AboutImg from '../../assets/img/1.webp'; 
>>>>>>> b9c864e277a33621aeafa70d586aa93edcc7c7e8
import Review from '../review/Review';


function Smm(){



    const smm = [
  {
    id: 1,
<<<<<<< HEAD
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
=======
    title: "Planning",
    heading: "Aligning Digital Vision with Business Goals",
    content: "We conduct in-depth analysis of your objectives, audience, and market landscape to define a clear, results-driven digital strategy."
  },
  {
    id: 2,
    title: "UI/UX Excellence",
    heading: "Elegant Design with Purpose",
    content: "Our design approach blends aesthetics with usability, delivering intuitive, brand-aligned experiences that engage and convert users."
  },
  {
    id: 3,
    title: "Mobile Optimization",
    heading: "Mobile-First Optimization",
    content: "With over 60% of traffic coming from mobile devices, we ensure your website delivers a perfect experience on every screen size, from smartphones to desktop computers."
  },
  {
    id: 4,
    title: "Performance",
    heading: "Lightning-Fast Performance",
    content: "We enhance site architecture, content, and technical performance to improve search rankings and deliver seamless user experiences."
  },
  {
    id: 5,
    title: "Maintenance",
    heading: "Ongoing Support & Maintenance",
    content: "We manage smooth deployment, rigorous testing, and continuous support to ensure your digital presence remains secure and up-to-date."
>>>>>>> b9c864e277a33621aeafa70d586aa93edcc7c7e8
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
<<<<<<< HEAD
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

=======
              <div className="service-details">
                <p>
                  ABOQ India is the <strong>Best Social Media Marketing Company in Delhi-NCR</strong>.
                  We make sure that the services we offer meet our clients' expectations and help them grow their businesses. We have expertise meeting the demands of a wide variety of customers.
                </p>
                <p>
                  If you are looking for a <strong>“Social Media Marketing Company Near Me”</strong>,
                  ABOQ India is definitely the right destination for you. We consider every detail of your job and create the most user-friendly website design for your company.
                </p>
              </div>
>>>>>>> b9c864e277a33621aeafa70d586aa93edcc7c7e8

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
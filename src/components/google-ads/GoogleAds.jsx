import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../home/Home.css'
import '../services.css'

<<<<<<< HEAD
import DesktopBanner from '../../assets/img/ads-desktop.png'
import MobileBanner from '../../assets/img/ads-mobile.png'

import AboutImg from '../../assets/img/img4.png'; 
=======
import DesktopBanner from '../../assets/img/website-designing.png'
import MobileBanner from '../../assets/img/mobile-designing.png'

import AboutImg from '../../assets/img/1.webp'; 
>>>>>>> b9c864e277a33621aeafa70d586aa93edcc7c7e8
import Review from '../review/Review';


function GoogleAds(){



    const googleADS = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Campaign Strategy",
    heading: "Building a Performance-Focused Foundation",
    content: "We analyze your business goals, target audience, and existing campaigns to create a data-driven advertising strategy."
  },
  {
    id: 2,
    title: "Audience Targeting",
    heading: "Reaching High-Intent Customers",
    content: "We identify high-value keywords and define precise audience segments to maximize relevance and conversion potential."
  },
  {
    id: 3,
    title: "Ad Campaign",
    heading: "Compelling Ads That Drive Action",
    content: "We craft persuasive ad copy, visuals, and extensions while structuring campaigns for optimal Quality Score and ROI."
  },
  {
    id: 4,
    title: "Bid Management",
    heading: "Maximizing Performance and Efficiency",
    content: "We continuously optimize bids, budgets, and targeting to improve click-through rates and reduce cost per conversion."
  },
  {
    id: 5,
    title: "Tracking Scaling",
    heading: "Transparent Insights with Measurable Growth",
    content: "We implement conversion tracking, provide detailed performance reports, and scale successful campaigns for sustained results."
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
            <h2 class="title-text">What Includes in Our Google Ads Service</h2>
            <div class="title-dash">
                </div>
                </div>
        </div>

        {/* Tab Navigation */}
        <div className="ws-tabs-nav">
          {googleADS.map((service) => (
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
            {googleADS.map((service) => (
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
            <h2 className="title-text">Best Google Ads Service Provider company, Delhi-NCR</h2>
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
<<<<<<< HEAD
  <p>
    ABOQ India is a leading <strong>Google Ads Company in Delhi-NCR</strong>,
    delivering performance driven for advertising solutions that help businesses
    generate quality leads, increase conversions, and maximize ROI.
    Our expertise spans across multiple industries and business models.
  </p>

  <p>
    If you are searching for a <strong>“Google Ads service provider near me”</strong>,
    ABOQ India is the right partner for your growth.
    We carefully analyze your goals, target audience, and competition to
    create high-impact ad campaigns that drive measurable results.
  </p>
</div>

=======
                <p>
                  ABOQ India is the <strong>Best Google Ads Company in Delhi-NCR</strong>.
                  We make sure that the services we offer meet our clients' expectations and help them grow their businesses. We have expertise meeting the demands of a wide variety of customers.
                </p>
                <p>
                  If you are looking for a <strong>“website google adsservice provider near me”</strong>,
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

export default GoogleAds;
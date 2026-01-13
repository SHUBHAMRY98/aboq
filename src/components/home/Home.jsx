import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";


import './Home.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Smartphone, Monitor, ShoppingCart, BarChart3, Globe } from 'lucide-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faPalette,
  faPenNib,
  faMagnifyingGlassChart,
  faShareNodes,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons';

import Typed from 'typed.js';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Review from "../review/Review";
import Testimonial from "../testimonial/Testimonial";

import Icon1 from '../../assets/img/approch.png'
import Icon2 from '../../assets/img/quality.png'
import Icon3 from '../../assets/img/creative.png'
import Icon4 from '../../assets/img/support.png'



import AboutImg from '../../assets/img/1.webp'; 
import RevampImg from '../../assets/img/revamp.png';


import Workshop from '../../assets/img/workshop-removebg-preview.png'
import Planning from '../../assets/img/planning-removebg-preview.png'
import Designing from '../../assets/img/designing-removebg-preview.png'
import Development from '../../assets/img/development-removebg-preview.png'
import Testing from '../../assets/img/testing-removebg-preview.png'
import Maintenance from '../../assets/img/maintenance-removebg-preview.png'

import Uiux from '../../assets/img/web-design.png'
import Wordpress from '../../assets/img/wordpress.png'
import Shopify from '../../assets/img/shopify.png'
import Phpcode from '../../assets/img/php-code.png'
import Experience from '../../assets/img/experience.png'
import Price from '../../assets/img/inflation.png'

import I1 from "../../assets/img/icon-1.webp"
import I2 from "../../assets/img/icon-2.webp"
import I3 from "../../assets/img/icon-3.webp"
import I4 from "../../assets/img/icon-4.webp"
import I5 from "../../assets/img/icon-5.webp"
import I6 from "../../assets/img/icon-6.webp"
import I7 from "../../assets/img/icon-7.webp"
import I8 from "../../assets/img/icon-8.webp"
import I9 from "../../assets/img/icon-9.webp"
import I10 from "../../assets/img/icon-10.webp"
import I11 from "../../assets/img/icon-11.webp"
import I12 from "../../assets/img/icon-12.webp"
import I13 from "../../assets/img/icon-13.webp"
import I14 from "../../assets/img/icon-14.webp"
import I15 from "../../assets/img/icon-15.webp"
import I16 from "../../assets/img/icon-16.webp"
import I17 from "../../assets/img/icon-17.webp"
import I18 from "../../assets/img/icon-18.webp"



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import { motion } from 'framer-motion';

function Home() {


  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // Run only once
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-item');
    cards.forEach(card => {
        card.style.opacity = '0'; // Initial state
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});


  const typedElement = useRef(null);
  const typedInstance = useRef(null); // Typed instance ko store karne ke liye
  const [init, setInit] = useState(false);


  // Fixed Typing Logic

  // Inside your Home component
useEffect(() => {
  // 1. Create options
  const options = {
    strings: [
      "Website Development",
      "Graphics Designing", 
      "Website Designing", 
      "Search Engine Optimization",
      "Google Ads",
      "Social Media Marketing"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    backDelay: 1500,
    showCursor: true,
    cursorChar: '|'
  };

  // 2. Initialize only if the element exists
  if (typedElement.current) {
    typedInstance.current = new Typed(typedElement.current, options);
  }

  // 3. Cleanup: This is crucial to prevent memory leaks and "double typing"
  return () => {
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }
  };
}, []); // Empty dependency array ensures this runs once



  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
    events: {
//       onClick: {
//   enable: true,
//   mode: "push",
// },
// modes: {
//   push: { quantity: 4 },
// },
      onHover: {
        enable: true,
        mode: "repulse",   
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,    
        duration: 0.4,  
      },
    },
  },
    particles: {
      color: { value: "#E9641B" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1.5 },
      number: { value: 80 },
      opacity: { value: 0.9 },
      size: { value: { min: 1, max: 3 } },
    },

     // ✅ RESPONSIVE BREAKPOINT
  responsive: [
    {
      maxWidth: 1024, // 📱 small screen
      options: {
        particles: {
          number: {
            value: 30, // 👈 mobile particles
          },
        },
      },
    },
  ],

  }), []);

  const services = [
    { span: "Social Media", strong: "Marketing", icon: <Smartphone /> },
    { span: "Website", strong: "Design", icon: <Monitor /> },
    { span: "Website", strong: "Development", icon: <Globe /> },
    { span: "E-Commerce", strong: "Solutions", icon: <ShoppingCart /> },
    { span: "Digital", strong: "Marketing", icon: <BarChart3 /> },
    { span: "App", strong: "Development", icon: <Smartphone /> },
    { span: "Cloud", strong: "Computing", icon: <Globe /> },
    { span: "SEO", strong: "Optimization", icon: <BarChart3 /> },
  ];


  //Feature Data

  // Place FeatureCard above your main Home component
  const FeatureCard = ({ title, description, icon, bgColorClass, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: delay }}
      className={`feature-card ${bgColorClass}`}
    >
      <div className="feature-icon-wrapper">
        <img src={icon} alt={title} className="feature-icon-img" />
      </div>
      <h2 className="feature-card-title">{title}</h2>
      <p className="feature-card-description">{description}</p>
    </motion.div>
  );

  // Inside your featureData array, change 'bgColor' to 'bgColorClass' to match props
  const featureData = [
    {
      title: "Approach",
      description: "We follow a transparent and collaborative approach from initial discussion to final delivery. Every step is planned, communicated clearly, and executed with precision to ensure smooth project completion.",
      icon: Icon1,
      delay: 0.1,
    },
    {
      title: "Quality",
      description: "Quality is at the core of everything we build. Our websites are designed and developed using best practices, ensuring performance, security, and long-term reliability across all devices.",
      icon: Icon2,
      delay: 0.3,
    },
    {
      title: "Creative",
      description: "We deliver unique and visually engaging designs tailored to your brand. Our creative process ensures every project stands out while maintaining clarity, usability, and purpose.",
      icon: Icon3,
      delay: 0.6,
    },
    {
      title: "Support",
      description: "We provide reliable post-launch support with a 1-year warranty. Our team is always ready to assist with updates, fixes, and guidance to keep your website running flawlessly.",
      icon: Icon4,
      delay: 1,
    }
  ];





    //Process 


  const steps = [
  {
    id: "01",
    title: "Research",
    description: "We carefully understand and document your business goals, target audience, design preferences, and branding requirements. ",
    icon: Workshop
  },
  {
    id: "02",
    title: "Planning",
    description: "Our experts craft a tailored digital strategy that aligns with your goals, audience, and brand identity.",
    icon: Planning
  },
  {
    id: "03",
    title: "Design",
    description: "With data-driven execution, we turn your challenges into measurable success — more traffic, leads, and conversions.",
    icon: Designing
  },

  {
    id: "04",
    title: "Development",
    description: "We carefully understand and document your business goals, target audience, design preferences, and branding requirements. ",
    icon: Development
  },
  {
    id: "05",
    title: "Testing",
    description: "Our experts craft a tailored digital strategy that aligns with your goals, audience, and brand identity.",
    icon: Testing
  },
  {
    id: "06",
    title: "Maintenance",
    description: "With data-driven execution, we turn your challenges into measurable success — more traffic, leads, and conversions.",
    icon: Maintenance
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







  //Why Choose Us

  const whychoose = [
    {
      title: "UI/UX Specialists",
      desc: "Our UI/UX specialists are responsible for delivering an excellent user experience by providing outstanding and user-friendly web design.",
      icon: Uiux, // You can replace these with your <img> tags
      className: "ui-section"
    },
    {
      title: "WordPress Developers",
      desc: "Our WordPress developers follow the latest development trends for building interactive, and smart websites as per the specific needs of clients.",
      icon: Wordpress,
      className: "wordpress-section"
    },
    {
      title: "Shopify Experts",
      desc: "Our Shopify experts help you to develop your Shopify store exactly the way you want. Also, we’re here to help you rank easily on Google.",
      icon: Shopify,
      className: "experts-section"
    },
    {
      title: "PHP Developers",
      desc: "We have a dedicated team of developers that offers custom web development services by creating powerful, scalable and dynamic websites.",
      icon: Phpcode,
      className: "php-section"
    },
    {
      title: "Experience in the Industry",
      desc: "Hundreds of web development projects that we completed serve as testimonials of our excellent services.",
      icon: Experience,
      className: "experience"
    },
    {
      title: "Competitive Price",
      desc: "The budget is an important factor when you hire a digital marketing company in Delhi. The price varies depending on a wide range of factors.",
      icon: Price,
      className: "price-section"
    }
  ];




  //we work with

  const industries = [
    { name: "Social Networking", icon: I1 },
    { name: "Digital Marketing", icon:  I2},
    { name: "Ecommerce Development", icon:  I3 },
    { name: "Video Service", icon:  I4 },
    { name: "Banking Service", icon:  I5 },
    { name: "Enterprise Service", icon:  I6 },
    { name: "Education Service", icon:  I7 },
    { name: "Tour and Travels", icon:  I8 },
    { name: "Health Service", icon:  I9 },
    { name: "Event & Ticket", icon: I10 },
    { name: "Restaurant Service", icon:  I11 },
    { name: "Business Consultant", icon:  I12 },
    { name: "NGO", icon:  I13 },
    { name: "Real Estate", icon:  I14 },
    { name: "Fashion Clothing", icon:  I15 },
    { name: "Financial Services", icon:  I16 },
    { name: "Books", icon:  I17 },
    { name: "Corporates & Entrepreneurs", icon:  I18 },
  ];


  return (
    <>
  
    
   
    <div className="home-wrapper">
      <section className="hero-section">
        {init && <Particles id="tsparticles" options={particlesOptions} />}

        {/* <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="hero-swiper"
        > */}
          <div
            className="hero-slide"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
             <h2>Your Growth Starts With</h2> <h1 className="typed-container">
                {/* Yahan span ko static rakha hai loop mode ke liye */}
               <span ref={typedElement}></span>
              </h1>
              <p>With over 10 years experience in IT industry, We are pioneers in the field of Website Designing & Development.</p>
              <Link to="/contact"> <button className="default-btn">Contact Now</button></Link>
            </div>
          </div>

        {/* </Swiper> */}
      </section>

      {/* Bottom Service Slider */}
      <div className="slider-bottom-wrapper">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="service-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="slide-bottom-content border-right">
                  <div className="slide-bottom-icon">{service.icon}</div>
                  <div className="heading">
                    <span>{service.span}</span>
                    <strong>{service.strong}</strong>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      {/* Feature */}

      <section className="features-section">
        <div className="features-container">
          <div className="features-grid">
            {featureData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>



      <section className="about-section">
        <div className="custom-container">
          {/* Title Section */}
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title-text">Best website designing & Development company, Delhi-NCR</h2>
            <div className="title-dash"></div>
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

              <div className="btn-wrapper">
                <Link to="/about" className="read-more-btn">Read More</Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="about-image-wrapper-main"
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
              <img src={RevampImg} alt="Revamp your site" className="img-responsive" />
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

              <div className="hiw-header  fadeInUp">
          <span className="hiw-subtitle">Reimagine, Redesign, Revamp</span>
          <h2 className="hiw-main-title">
            powerful digital experience by <span>revamp</span> performance
          </h2>
          <p className="hiw-description">
            We transform your website into a modern, high-performing digital experience. Elevating your digital presence with thoughtful design and powerful functionality !
          </p>
        </div>


          </motion.div>

        </div>
      </section>



<section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-container">
        {/* Header Section */}
        <motion.div className="hiw-header fadeInUp"
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration:2, ease: "easeOut" }}
        >
          <span className="hiw-subtitle">WHAT WE DO</span>
          <h2 className="hiw-main-title">
            Our complete <span>Digital Services</span> for your growth
          </h2>
          <p className="hiw-description">
            We deliver end-to-end digital solutions that help brands grow online. From creative web design and robust development to result-driven SEO, social media marketing, graphic design, and Google Ads, we craft strategies that build visibility, engagement, and conversions
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="hiw-grid">


  <Link to="/web-development"> 
   <div class="service-item animated-card">

    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faGlobe} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Web Development</h3>
            <p class="service-description">
                We build fast, secure, and scalable websites, that turn ideas into powerful digital experiences.
            </p>
        </a>
    </div>
</div>
</Link>

    <Link to="/web-designing">  
    <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faPalette} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Web Designing</h3>
            <p class="service-description">
                Modern, user-focused designs that look stunning and deliver seamless user experiences.
            </p>
        </a>
    </div>
</div>
</Link>

   <Link to="/graphics-designing">   <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faPenNib} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Graphics Designing</h3>
            <p class="service-description">
                Creative visuals that capture attention, strengthen brand identity, and communicate clearly.
            </p>
        </a>
    </div>
</div>
</Link>

   <Link to="/search-engine-optimization">  
    <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Search Engine Optimization</h3>
            <p class="service-description">
                Data-driven SEO strategies that improve visibility, drive organic traffic, and boost search rankings.
            </p>
        </a>
    </div>
</div>
</Link>

   <Link to="/google-ads">  
    <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faBullhorn} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Google Ads</h3>
            <p class="service-description">
               High-converting ad campaigns designed to attract, target the right audience, and maximize ROI.
            </p>
        </a>
    </div>
</div>
</Link>

  <Link to="social-media-marketing">  <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <FontAwesomeIcon icon={faShareNodes
} />
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Social Media Marketing</h3>
            <p class="service-description">
                Engaging social strategies that grow your audience, increase reach, and build brand trust.
            </p>
        </a>
    </div>
</div>
</Link>

          
        </div>
      </div>
</section>


       


<section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-container">
        {/* Header Section */}
         <motion.div className="hiw-header fadeInUp"
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration:2, ease: "easeOut" }}
        >
          <span className="hiw-subtitle">HOW IT WORKS</span>
          <h2 className="hiw-main-title">
            Our proven <span>Process</span> for achieving success
          </h2>
          <p className="hiw-description">
            Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="hiw-grid">
          {steps.map((step, index) => (
          // <Link to="/contact"> 
           <div 
              key={step.id} 
              className={`hiw-item  fadeInUp`} 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Content Card */}

              <div className="hiw-card">
                <h3 className="hiw-card-title">{step.title}</h3>
                <p className="hiw-card-text">{step.description}</p>
                {/* <span className="hiw-card-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 43 43" fill="none">
                    <path d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z" fill="currentColor"></path>
                  </svg>
                </span> */}
              </div>

              {/* Step Info & Icon */}
              <div className="hiw-meta">
                <div className="hiw-step-info">
                  <span className="step-label">STEP</span>
                  <span className="step-number">{step.id}</span>
                </div>
                <div className="hiw-icon-box">
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>

            </div>
            // </Link>


          ))}
        </div>
      </div>
</section>


<section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-container">
        {/* Header Section */}
         <motion.div className="hiw-header fadeInUp"
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration:2, ease: "easeOut" }}
        >
          <span className="hiw-subtitle">WHAT MAKES US DIFFERENT</span>
          <h2 className="hiw-main-title">
            A Trusted Partner for <span>Powerful Digital</span> Experiences
          </h2>
          <p className="hiw-description">
            At ABOQ India, we create visually stunning and user-centric websites that convert. With expertise across UI/UX design, Shopify, and WordPress development, our experienced team has built 500+ custom websites tailored to business goals. We focus on performance, scalability, and seamless user experience so you can count on results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="hiw-grid">
        <div className="choose-us-container">
      <div className="choose-us-grid">
       {whychoose.map((item, index) => (
          <div key={index} className={`choose-card ${item.className}`}>
            <div className="icon-box-why">
              {/* <span className="icon-placeholder">{item.icon}</span> */}
              <img src={item.icon} alt={item.title} /> 
            </div>
            <div className="content-box">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
</section>





<section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-container">
        {/* Header Section */}
         <motion.div className="hiw-header fadeInUp"
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration:2, ease: "easeOut" }}
        >
          <span className="hiw-subtitle">EMPOWERING BUSINESS ACROSS INDUSTRIES</span>
          <h2 className="hiw-main-title">
            Driving <span>Digital Growth</span> for <span>Every Business</span> Domain
          </h2>
          <p className="hiw-description">
            With experience serving diverse industries, ABOQ India helps businesses strengthen their online identity and scale efficiently. Our strategic approach and industry-specific solutions have contributed to significant growth for startups, SMEs, and enterprises alike.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="hiw-grid">
       <div className="work-list-grid">
          {industries.map((item, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon-wrapper">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  loading="lazy" 
                />
              </div>
              <div className="industry-name">
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
</section>

<Testimonial/>



<Review/>
    </div>


 </>
    
  );
}

export default Home;

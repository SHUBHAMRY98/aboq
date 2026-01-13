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

  // useEffect(() => {
  //   // Purane instance ko destroy karein agar koi hai
  //   if (typedInstance.current) {
  //     typedInstance.current.destroy();
  //   }

  //   if (typedElement.current) {
  //     typedInstance.current = new Typed(typedElement.current, {
  //       strings: ["Website Development","Graphics Designing", "Website Designing", "Search Engine Optimization","Google Ads","Social Media Marketing"],
  //       typeSpeed: 100,
  //       backSpeed: 80,
  //       loop: true,
  //       backDelay: 1500,
  //       showCursor: true,
  //       cursorChar: '|'
  //     });
  //   }

  //   return () => {
  //     if (typedInstance.current) {
  //       typedInstance.current.destroy();
  //     }
  //   };
  // }, []);


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



  //Feature Data End

  // Work

 
    // const industries = [
    //   { title: "Social Networking", icon:Icon1},
    //   { title: "Digital Marketing", icon:Icon1},
    //   { title: "Ecommerce Development", icon:Icon1},
    //   { title: "Video Service", icon:Icon1},
    //   { title: "Banking Service", icon:Icon1},
    //   { title: "Enterprise Service", icon:Icon1},
    //   { title: "Education Service", icon:Icon1},
    //   { title: "Tour and Travels", icon:Icon1},
    //   { title: "Health Service", icon:Icon1},
    //   { title: "Event & Ticket", icon:Icon1},
    //   { title: "Restaurant Service", icon:Icon1},
    //   { title: "Business Consultant", icon:Icon1},
    // ];




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


       
     {/* <section className="work-industry-section">
        <div className="container">
          <div className="section-header text-center">
            <h1>Helping Businesses in All Domains</h1>
            <p>Digital Top Guns has served an array of Industries in their Business establishment.</p>
          </div>
          <div className="industry-card-grid">
              {industries.map((item, index) => (
              <div key={index} className="industry-simple-card">
                <div className="industry-icon-box">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
              </div>
             ))}
           </div>

           <div class="service-item animated-card">
    <div class="service-header">
        <div class="service-icon">
            <i class="fas fa-globe"></i>
        </div>
        
        <a href="#" class="service-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="currentColor">
                <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
            </svg>
        </a>
    </div>

    <div class="service-body">
        <a href="#" class="service-content-link">
            <h3 class="service-title">Web & App Development</h3>
            <p class="service-description">
                From concept to code—we create sleek, scalable web and app solutions that drive user engagement.
            </p>
        </a>
    </div>
</div>

        </div>
      </section> */}





      {/* <section className="process-section">
      <div className="process-container">
        
        <div className="process-header">
          <h2 className="title-text">Our Process</h2>
            <div className="orange-dash"></div>
          <p>We ensure on-site support for on-time delivery with quality work.</p>
          
        </div>

        <div className="process-stepper-wrapper">
          <div id="progress-bar-container">
            <ul>
              {stepss.map((step, index) => (
                <li 
                  key={step.id} 
                  className={`step-item ${index <= activeStep ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-label">{step.title}</div>
                </li>
              ))}
            </ul>
            <div className="progress-line-base">
              <div className="progress-line-fill" style={{ width: `${progressWidth}%` }}></div>
            </div>
          </div>

          <div className="process-content-display">
            <div className="process-grid">
              <div className="process-image-side">
                <img src={stepss[activeStep].img} alt={stepss[activeStep].title} />
              </div>
              <div className="process-text-side">
                <h2>{stepss[activeStep].title}</h2>
                <p>{stepss[activeStep].content}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section> */}


<section className="how-it-works-section" ref={sectionRef}>
      <div className="hiw-container">
        {/* Header Section */}
        <div className="hiw-header reveal fadeInUp">
          <span className="hiw-subtitle">HOW IT WORKS</span>
          <h2 className="hiw-main-title">
            Our proven <span>Process</span> for achieving success
          </h2>
          <p className="hiw-description">
            Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="hiw-grid">
          {steps.map((step, index) => (
          // <Link to="/contact"> 
           <div 
              key={step.id} 
              className={`hiw-item reveal fadeInUp`} 
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

<Testimonial/>



<Review/>
    </div>


 </>
    
  );
}

export default Home;

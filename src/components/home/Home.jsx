import { useEffect, useRef, useState, useMemo } from "react";



import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Smartphone, Monitor, ShoppingCart, BarChart3, Globe } from 'lucide-react';
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
import DigitalMar from '../../assets/img/digital-marketing.png';
import WebDesign from '../../assets/img/web-design.jpg'
import WebDevlopment from '../../assets/img/web-development.png'
import Graphics from '../../assets/img/graphic-design.png'
import GoogleADS from '../../assets/img/google-ads.png'
import SEO from '../../assets/img/seo.png'
import SMM from '../../assets/img/smm.png'

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
  const typedElement = useRef(null);
  const typedInstance = useRef(null); // Typed instance ko store karne ke liye
  const [init, setInit] = useState(false);


  // Fixed Typing Logic
  useEffect(() => {
    // Purane instance ko destroy karein agar koi hai
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["We are a leading web design", "Company providing creative solutions"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);


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
      description: "Starting with negotiations and until the completion of the process Starting with negotiations and until the ...",
      icon: Icon1,
      delay: 0.1,
    },
    {
      title: "Quality",
      description: "We ensure that the Website is designed and developed We ensure that the Website is designed ...",
      icon: Icon2,
      delay: 0.3,
    },
    {
      title: "Creative",
      description: "We guarantee an exclusive design We guarantee an exclusive design We guarantee an exclusive design ...",
      icon: Icon3,
      delay: 0.6,
    },
    {
      title: "Support",
      description: "We provide 1 year warranty support We provide 1 year warranty support We provide 1 year warranty support ...",
      icon: Icon4,
      delay: 1,
    }
  ];



  //Feature Data End

  // Work

 
    const industries = [
      { title: "Social Networking", icon:Icon1},
      { title: "Digital Marketing", icon:Icon1},
      { title: "Ecommerce Development", icon:Icon1},
      { title: "Video Service", icon:Icon1},
      { title: "Banking Service", icon:Icon1},
      { title: "Enterprise Service", icon:Icon1},
      { title: "Education Service", icon:Icon1},
      { title: "Tour and Travels", icon:Icon1},
      { title: "Health Service", icon:Icon1},
      { title: "Event & Ticket", icon:Icon1},
      { title: "Restaurant Service", icon:Icon1},
      { title: "Business Consultant", icon:Icon1},
    ];




    //Process 


  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "step01",
      title: "Discovery Workshop",
      img: Workshop,
      content: "We give the utmost importance to understand and document client’s inputs, design, and branding preferences. We work in a collaborative approach involving key stakeholders."
    },
    {
      id: "step02",
      title: "Planning",
      img: Planning,
      content: "Our services emphasize on well-defined project planning and leave nothing for assumption. We define technical specifications and devise branding guidelines."
    },
    {
      id: "step03",
      title: "Design",
      img: Designing,
      content: "We provide Web, Tablet, and Mobile-specific UI designs. We deliver clickable prototypes on Invision platform and source files in Photoshop or Sketch."
    },
    {
      id: "step04",
      title: "Development",
      img: Development,
      content: "We cater requirements for frontend, backend, and API integration using Agile Scrum methodology, focusing on scalability and clean code structure."
    },
    {
      id: "step05",
      title: "Testing",
      img: Testing,
      content: "We test each sprint manually, report bugs, and perform regression testing to ensure proper functioning of previously approved milestones."
    },
    {
      id: "step06",
      title: "Maintenance",
      img: Maintenance,
      content: "We ensure product enhancement through regular Security Audits, code backups, and constant system upgradation even after development ends."
    }
  ];

  // Progress Bar width logic
  const progressWidth = (activeStep / (steps.length - 1)) * 100;





  return (
    <>
  
    
   
    <div className="home-wrapper">
      <section className="hero-section">
        {init && <Particles id="tsparticles" options={particlesOptions} />}

        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="hero-swiper"
        >
          <SwiperSlide
            className="hero-slide"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="typed-container">
                {/* Yahan span ko static rakha hai loop mode ke liye */}
                <span ref={typedElement}></span>
              </h1>
              <p>With over 10 years experience in IT industry, We are pioneers in the field of Website Designing & Development.</p>
              <button className="default-btn">Contact Now</button>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="hero-slide"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>SEO Services We Provide <br /> For Your Company</h1>
              <p>From a landing page to a complex multipage website, we offer what you are looking for.</p>
              <button className="default-btn">Contact Now</button>
            </div>
          </SwiperSlide>
        </Swiper>
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
                <a href="/about" className="read-more-btn">Read More</a>
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
            <div className="revamp-text-wrapper">
              <h1 className="revamp-title">Reimagine, Redesign, Revamp</h1>
              <p className="revamp-description">
                We transform your website into a modern, high-performing digital experience. Elevating your digital presence with thoughtful design and powerful functionality !
              </p>
              <div className="revamp-btn-container">
                <a href="/contact" className="revamp-quote-btn">Get a quote</a>
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
              <h1 className="choice-title">Best Website Design Company</h1>
              <p className="choice-description">
                ABOQ India is the Right Choice for all types of Websites. If you are planning
                to start up your Company, or just a recently start up Company, or running your
                own store or shop for selling products, then ABOQ India is the perfect choice
                to turn your dreams into reality.
              </p>

              <div className="choice-btn-group">
                <a href="/about" className="btn-solid">Read More</a>
                <a href="/contact" className="btn-outline">Get a Quote</a>
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
                <a href="/contact" className="revamp-quote-btn">Get a quote</a>
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
                <a href="/about" className="btn-solid">Read More</a>
                <a href="/contact" className="btn-outline">Get a Quote</a>
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
                <a href="/contact" className="revamp-quote-btn">Get a quote</a>
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
                <a href="/about" className="btn-solid">Read More</a>
                <a href="/contact" className="btn-outline">Get a Quote</a>
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
                <a href="/contact" className="revamp-quote-btn">Get a quote</a>
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
              <h1 className="choice-title">Best Digital Marketing Company</h1>
              <p className="choice-description">
                ABOQ India is the Right Choice for all types of Websites. If you are planning
                to start up your Company, or just a recently start up Company, or running your
                own store or shop for selling products, then ABOQ India is the perfect choice
                to turn your dreams into reality.
              </p>

              <div className="choice-btn-group">
                <a href="/about" className="btn-solid">Read More</a>
                <a href="/contact" className="btn-outline">Get a Quote</a>
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
              <img src={DigitalMar} alt="Best Website Design" className="img-fluid" />
            </div>
          </motion.div>

        </div>
      </section>



       
     <section className="work-industry-section">
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
        </div>
      </section>



      <section className="process-section">
      <div className="process-container">
        
        <div className="process-header">
          <h2 className="title-text">Our Process</h2>
            <div className="orange-dash"></div>
          <p>We ensure on-site support for on-time delivery with quality work.</p>
          
        </div>

        <div className="process-stepper-wrapper">
          <div id="progress-bar-container">
            <ul>
              {steps.map((step, index) => (
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
                <img src={steps[activeStep].img} alt={steps[activeStep].title} />
              </div>
              <div className="process-text-side">
                <h2>{steps[activeStep].title}</h2>
                <p>{steps[activeStep].content}</p>
              </div>
            </div>
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
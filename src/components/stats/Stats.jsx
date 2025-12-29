import Icon1 from '../../assets/img/stats1.png'
import Icon2 from '../../assets/img/stats2.png'
import Icon3 from '../../assets/img/stats3.png'
import Icon4 from '../../assets/img/stats4.png'


import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';
import '../home/Home.css';

const stats = [
  { id: 1, value: 10, suffix: "Yrs +", title: "Experience", icon: Icon1 },
  { id: 2, value: 5000, suffix: "+", title: "Projects", icon: Icon2 },
  { id: 3, value: 100, suffix: "+", title: "Industry Served", icon: Icon3 },
  { id: 4, value: 90, suffix: "%", title: "Client Retention", icon: Icon4},
];

const CounterItem = ({ targetValue, suffix, title, icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart animation whenever it enters view
          startCount();
        } else {
          // Reset to 0 when it leaves view (so it can run again)
          setCount(0);
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the item is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  const startCount = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetValue / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <div className="counter-box" ref={countRef}>
      <div className="counter-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="group-counter">
        <div className="counter-num">{count.toLocaleString()}</div>
        <span className="pre-fix">{suffix}</span>
      </div>
      <div className="counter-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (

    <section className="how-it-works-section" >
      <div className="hiw-container">
        {/* Header Section */}
        <div className="hiw-header fadeInUp">
          <span className="hiw-subtitle">OUR JOURENY IN NUMBERS</span>
          <h2 className="hiw-main-title">
            A snapshot of <span>experience</span>, <span>trust</span>, and <span>results</span>.
            
          </h2>
          <p className="hiw-description">
           From years of industry expertise to successful projects and satisfied clients, our numbers reflect our commitment to quality, consistency, and growth.
           </p>
        </div>

        {/* Steps Grid */}
       <div className="stats-grid">
          {stats.map((stat) => (
            <CounterItem key={stat.id} targetValue={stat.value} suffix={stat.suffix} title={stat.title} icon={stat.icon} />
          ))}
        </div>
      </div>
</section>


    
  );
};

export default StatsSection;
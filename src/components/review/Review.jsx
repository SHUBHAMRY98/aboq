import React from 'react';
import { motion } from 'framer-motion';
import './Review.css';

const reviews = [
  {
    id: 1,
    name: "Mariyam Ansari",
    img: "https://i.pravatar.cc/150?u=1",
    text: "It was really a pleasant experience working with this company. The staff is really friendly and dedicated. Overall everything was very great and productive."
  },
  {
    id: 2,
    name: "Jaisal Bafna",
    img: "https://i.pravatar.cc/150?u=2",
    text: "They have the most amazing team! Dipti is always around to pick your calls and greet at any time. They know that serving a customer is greater than earning the bucks!"
  },
  {
    id: 3,
    name: "Vipsy Inc",
    img: "https://i.pravatar.cc/150?u=3",
    text: "Digital top guns really did amazing job. My Website design is so cool, very pretty, classic and user-friendly. I really would like to appreciate Deepti and her team."
  },
  {
    id: 4,
    name: "Bipakshi Kashyap",
    img: "https://i.pravatar.cc/150?u=4",
    text: "Wonderful people to work with. Very efficient and creative. I felt as if they could read my mind and deliver the design I wanted."
  }
];

const Review = () => {
  // Doubling the array ensures a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="review-section">
      <div className="container">
        <div className="section-title">
          <h2>Google Verified Reviews</h2>
           <div class="title-dash"></div>
        </div>

        <div className="carousel-wrapper">
          <motion.div 
            className="carousel-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div className="review-box" key={index}>
                <div className="review-header">
                  <div className="review-profile-img">
                    <img src={review.img} alt={review.name} />
                  </div>
                  <div className="review-profile-details">
                    <div className="review-name">{review.name}</div>
                  </div>
                </div>

                <div className="review-star-box">
                  <span className="stars">★★★★★</span>
                  <span className="verified-badge" title="Verified"></span>
                </div>

                <div className="review-content">
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Review;
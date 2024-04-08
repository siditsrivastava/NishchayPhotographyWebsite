import React, { useEffect, useRef, useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    photo: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    comment: 'Exemplary service by The Nishchay Srivastava Photography! Highly recommended for wedding photography.',
    date: 'April 15, 2023',
    clientName: 'Aarav Patel'
  },
  {
    id: 2,
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Magical experience with The Nishchay Srivastava Photography! The perfect choice for your wedding.',
    date: 'May 25, 2023',
    clientName: 'Ishaan Gupta'
  },
  {
    id: 3,
    photo: 'https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Stunning ceremony, highly recommended for wedding photography services by The Nishchay Srivastava Photography!',
    date: 'June 10, 2023',
    clientName: 'Neha Sharma'
  },
  {
    id: 4,
    photo: 'https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Effortless execution, a day free of stress with The Nishchay Srivastava Photography! Perfect for capturing your special day.',
    date: 'August 5, 2023',
    clientName: 'Aryan Singh'
  },
  {
    id: 5,
    photo: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Unforgettable memories, dreams turned reality with The Nishchay Srivastava Photography! The ideal choice for wedding photography.',
    date: 'September 18, 2023',
    clientName: 'Ananya Gupta'
  },
  {
    id: 6,
    photo: 'https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'An unforgettable day with perfect arrangements by The Nishchay Srivastava Photography! Highly recommended for weddings.',
    date: 'October 30, 2023',
    clientName: 'Rohan Patel'
  }
];

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img className="testimonial-photo" src={testimonial.photo} alt="User" />
      <div className="testimonial-content">
        <p className="testimonial-comment">{testimonial.comment}</p>
        <small className="testimonial-date">{testimonial.date}</small>
        <p className="client-name">{testimonial.clientName}</p>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialSliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change testimonial every 5 seconds

    // Clear the interval and display the next testimonial after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      goToNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentTestimonialIndex]);

  const goToNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const nextTestimonial = testimonials[(currentTestimonialIndex + 1) % testimonials.length];
  const prevTestimonial = testimonials[(currentTestimonialIndex - 1 + testimonials.length) % testimonials.length];

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-slider" ref={testimonialSliderRef}>
        <div className="testimonial-slide active">
          <Testimonial testimonial={prevTestimonial} />
        </div>
        <div className="testimonial-slide active">
          <Testimonial testimonial={currentTestimonial} />
        </div>
        <div className="testimonial-slide active">
          <Testimonial testimonial={nextTestimonial} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

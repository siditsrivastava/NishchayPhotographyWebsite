import React, { useEffect, useRef, useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    photo: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 1, 2024',
    clientName: 'John Doe'
  },
  {
    id: 2,
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 2, 2024',
    clientName: 'Jane Doe'
  },
  {
    id: 3,
    photo: 'https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 3, 2024',
    clientName: 'Bob Smith'
  },
  {
    id: 4,
    photo: 'https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 1, 2024',
    clientName: 'John Doe'
  },
  {
    id: 5,
    photo: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 2, 2024',
    clientName: 'Jane Doe'
  },
  {
    id: 6,
    photo: 'https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'April 3, 2024',
    clientName: 'Bob Smith'
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
    <h2 >Testimonial</h2>
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

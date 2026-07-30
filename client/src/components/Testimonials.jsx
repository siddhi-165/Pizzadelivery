import "./Testimonials.css";

import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "The pizzas are amazing! Fast delivery and the cheese burst was incredible.",
    },
    {
      name: "Priya Patel",
      review:
        "Best pizza I've had in Mumbai. The ordering experience was super smooth!",
    },
    {
      name: "Aarav Mehta",
      review:
        "Fresh ingredients, hot delivery and excellent customer service. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">
        ❤️ What Our Customers Say
      </h2>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>"{review.review}"</p>

            <h3>{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

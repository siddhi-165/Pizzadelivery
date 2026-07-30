import "./Offers.css";

import {
  FaGift,
  FaMotorcycle,
  FaPizzaSlice,
} from "react-icons/fa";

function Offers() {
  return (
    <section id="offers" className="offers">

      <h2 className="section-title">
        🎁 Today's Special Offers
      </h2>

      <div className="offer-grid">

        <div className="offer-card red">

          <FaGift />

          <h2>BUY 1 GET 1</h2>

          <p>
            Order any Medium Pizza and get another one absolutely FREE.
          </p>

        </div>

        <div className="offer-card orange">

          <FaMotorcycle />

          <h2>FREE DELIVERY</h2>

          <p>
            Free Delivery on orders above ₹499 anywhere in your city.
          </p>

        </div>

        <div className="offer-card yellow">

          <FaPizzaSlice />

          <h2>20% OFF</h2>

          <p>
            Flat 20% OFF on all Cheese Burst pizzas this weekend.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Offers;
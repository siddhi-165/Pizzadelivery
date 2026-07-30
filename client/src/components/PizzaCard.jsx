import "./PizzaCard.css";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

function PizzaCard({ pizza, addToCart }) {
  return (
    <div className="pizza-card">
      <div className="pizza-image">
        <img
          src={pizza.image}
          alt={pizza.name}
          loading="lazy"
        />

        <span className="pizza-badge">
          Best Seller
        </span>

        <button className="wishlist-btn">
          <FaHeart />
        </button>
      </div>

      <div className="pizza-card-content">
        <div className="pizza-title">
          <h2>{pizza.name}</h2>

          <div className="rating">
            <FaStar />
            <span>4.9</span>
          </div>
        </div>

        <p className="pizza-description">
          {pizza.description}
        </p>

        <div className="pizza-footer">
          <div className="price-box">
            <small>Starting From</small>
            <h3>₹{pizza.prices.small}</h3>
          </div>

          <button
            className="add-btn"
            onClick={() => addToCart(pizza)}
          >
            <FaShoppingCart />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
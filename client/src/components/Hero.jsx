import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <span className="hero-badge">
          🔥 Flat 40% OFF on First Order
        </span>

        <h1>
          Hot & Fresh Pizza
          <br />
          Delivered in
          <span> 30 Minutes</span>
        </h1>

        <p>
          Fresh ingredients, premium cheese, handcrafted pizzas and
          lightning-fast delivery.
          Order your favourite pizza and enjoy restaurant-quality taste at
          home.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            🍕 Order Now
          </button>

          <button className="secondary-btn">
            📖 View Menu
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <h2>50+</h2>
            <p>Pizza Varieties</p>
          </div>

          <div>
            <h2>25K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Customer Rating</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
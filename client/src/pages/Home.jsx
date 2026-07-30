import { useEffect, useState, useContext } from "react";
import API from "../api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import PizzaCard from "../components/PizzaCard";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

import { CartContext } from "../context/CartContext";

// Local Pizza Images
import margherita from "../assets/pizzas/margherita.jpg";
import farmhouse from "../assets/pizzas/farmhouse.jpg";
import paneer from "../assets/pizzas/paneer.jpg";
import veggie from "../assets/pizzas/veggie.jpg";
import pepperoni from "../assets/pizzas/pepperoni.jpg";
import chicken from "../assets/pizzas/chicken.jpg";
import mexican from "../assets/pizzas/mexican.jpg";
import bbq from "../assets/pizzas/bbq.jpg";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = async () => {
  try {
    console.log("🚀 Fetching pizzas...");

    const response = await API.get("/pizzas");

    console.log("✅ API Response:", response);

    const data = response.data;

    const pizzasWithImages = data.map((pizza) => {
      switch (pizza.name) {
        case "Margherita":
          return { ...pizza, image: margherita };

        case "Farmhouse":
          return { ...pizza, image: farmhouse };

        case "Paneer Tikka":
          return { ...pizza, image: paneer };

        case "Veggie Supreme":
          return { ...pizza, image: veggie };

        case "Pepperoni":
          return { ...pizza, image: pepperoni };

        case "Chicken Dominator":
          return { ...pizza, image: chicken };

        case "Mexican Green Wave":
          return { ...pizza, image: mexican };

        case "BBQ Chicken":
          return { ...pizza, image: bbq };

        default:
          return pizza;
      }
    });

    console.log("🍕 Final pizzas:", pizzasWithImages);

    setPizzas(pizzasWithImages);

  } catch (error) {
    console.error("❌ Axios Error:", error);
    console.error("❌ Message:", error.message);

    if (error.response) {
      console.error("Response:", error.response);
    }

    if (error.request) {
      console.error("Request:", error.request);
    }
  }
};

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearch = pizza.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || pizza.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <Offers />

      <Testimonials />

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search your favourite pizza..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="section-title">
        🔥 Our Popular Pizzas
      </h2>

      <div className="filter-buttons">
        <button
          className={category === "All" ? "active-filter" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Veg" ? "active-filter" : ""}
          onClick={() => setCategory("Veg")}
        >
          🍕 Veg
        </button>

        <button
          className={category === "Non-Veg" ? "active-filter" : ""}
          onClick={() => setCategory("Non-Veg")}
        >
          🍗 Non-Veg
        </button>
      </div>

      <div id="menu" className="pizza-container">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza._id}
              pizza={pizza}
              addToCart={addToCart}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>
            🍕 No pizzas found.
          </h2>
        )}
      </div>

      <Cart />

      <div id="checkout">
        <Checkout />
      </div>

      <footer className="footer">
        <h2>🍕 PizzaVerse</h2>

        <p>Freshly Baked • Freshly Delivered</p>

        <p>📍 Mumbai, India</p>

        <p>📞 +91 9892397029</p>

        <p>✉ support@pizzaverse.com</p>

        <br />

        <p>© 2026 PizzaVerse. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
import "./Categories.css";

import {
  FaPizzaSlice,
  FaCheese,
  FaPepperHot,
  FaLeaf,
  FaDrumstickBite,
  FaFire,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      icon: <FaPizzaSlice />,
      title: "Classic",
      desc: "Traditional Italian pizzas",
    },
    {
      icon: <FaCheese />,
      title: "Cheesy",
      desc: "Extra loaded cheese",
    },
    {
      icon: <FaPepperHot />,
      title: "Spicy",
      desc: "For spice lovers",
    },
    {
      icon: <FaLeaf />,
      title: "Veg",
      desc: "Fresh vegetable pizzas",
    },
    {
      icon: <FaDrumstickBite />,
      title: "Chicken",
      desc: "Loaded with chicken",
    },
    {
      icon: <FaFire />,
      title: "Special",
      desc: "Chef's signature pizzas",
    },
  ];

  return (
    <section className="categories">

      <h2>🍕 Browse Categories</h2>

      <div className="category-grid">

        {categories.map((item, index) => (
          <div className="category-card" key={index}>

            <div className="category-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;
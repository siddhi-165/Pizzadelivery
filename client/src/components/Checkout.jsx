import "./Checkout.css";
import { useState, useContext } from "react";
import API from "../api";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, clearCart } = useContext(CartContext);
  const { userInfo } = useContext(AuthContext);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.prices.small * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (!userInfo) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.address.trim()
    ) {
      alert("Please fill all the required details.");
      return;
    }

    try {
      await API.post(
        "/orders",
        {
          pizzas: cartItems.map((item) => ({
            pizza: item._id,
            quantity: item.quantity,
            size: "small",
          })),
          totalAmount,
          address: form.address,
          paymentMethod: form.paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("🎉 Order Placed Successfully!");

      clearCart();

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to place order."
      );
    }
  };

  return (
    <div className="checkout-container">

      <h1 className="checkout-title">
        🍕 Checkout
      </h1>

      <p className="checkout-subtitle">
        Complete your order details below
      </p>

      <div className="checkout-group">
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="checkout-group">
        <label>Phone Number</label>

        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="checkout-group">
        <label>Delivery Address</label>

        <textarea
          rows="4"
          name="address"
          placeholder="Enter your delivery address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="checkout-group">
        <label>Payment Method</label>

        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
        >
          <option>Cash on Delivery</option>
          <option disabled>
            Online Payment (Coming Soon)
          </option>
        </select>
      </div>

      <div className="checkout-total">

        <h3>Total Amount</h3>

        <h2>₹{totalAmount}</h2>

      </div>

      <button
        className="place-order-btn"
        onClick={placeOrder}
      >
        🍕 Place Order
      </button>

    </div>
  );
}

export default Checkout;
import "./Cart.css";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTimes,
} from "react-icons/fa";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.prices.small * item.quantity,
    0
  );

  return (
    <>
      {/* Floating Cart Button */}

      <button
        className="floating-cart"
        onClick={() => setOpen(true)}
      >
        <FaShoppingCart />
        <span>{cartItems.length}</span>
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="cart-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Cart Panel */}

      <div className={`cart-panel ${open ? "open" : ""}`}>

        <div className="cart-header">
          <h2>🛒 Your Cart</h2>

          <button onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {cartItems.length === 0 ? (

          <div className="empty-cart">
            🍕 Cart is Empty
          </div>

        ) : (

          <>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="cart-item"
              >

                <div className="cart-item-left">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">

                    <h3>{item.name}</h3>

                    <p>₹{item.prices.small}</p>

                    <div className="qty">

                      <button
                        onClick={() =>
                          decreaseQuantity(item._id)
                        }
                      >
                        <FaMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item._id)
                        }
                      >
                        <FaPlus />
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

            <div className="cart-total">
              <strong>Total: ₹{total}</strong>
            </div>

          </>
        )}

      </div>
    </>
  );
}

export default Cart;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.prices.small * item.quantity,
    0
  );

  return (
    <div
      style={{
        marginTop: "40px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "15px 0",
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.prices.small}</p>
              </div>

              <div>
                <button onClick={() => decreaseQuantity(item._id)}>
                  −
                </button>

                <span
                  style={{
                    margin: "0 15px",
                    fontWeight: "bold",
                  }}
                >
                  {item.quantity}
                </span>

                <button onClick={() => increaseQuantity(item._id)}>
                  +
                </button>
              </div>

              <div>
                ₹{item.prices.small * item.quantity}
              </div>
            </div>
          ))}

          <h2 style={{ marginTop: "20px" }}>
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
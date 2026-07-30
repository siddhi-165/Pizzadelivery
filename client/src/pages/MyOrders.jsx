import "./MyOrders.css";
import { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

function MyOrders() {
  const { userInfo } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders/myorders", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setOrders(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <h2 className="loading">
        🍕 Loading your orders...
      </h2>
    );
  }

  return (
    <div className="orders-container">

      <h1>🍕 My Orders</h1>

      {orders.length === 0 ? (

        <div className="no-orders">
          <h2>No Orders Yet</h2>
          <p>Order your favourite pizza 🍕</p>
        </div>

      ) : (

        orders.map((order) => (

          <div
            key={order._id}
            className="order-card"
          >

            <div className="order-header">

              <h3>Order #{order._id.slice(-6)}</h3>

              <span
  className={`status ${order.status
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
>
  {order.status}
</span>

            </div>

            <div className="order-items">

              {order.pizzas.map((item, index) => (

                <div
                  key={index}
                  className="order-item"
                >
                  🍕 {item.pizza?.name || "Pizza"} × {item.quantity}
                </div>

              ))}

            </div>

            <div className="order-footer">

              <h3>Total ₹{order.totalAmount}</h3>

              <small>
                {new Date(order.createdAt).toLocaleString()}
              </small>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default MyOrders;
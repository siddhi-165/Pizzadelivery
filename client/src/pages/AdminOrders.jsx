import { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

function AdminOrders() {
  const { userInfo } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setOrders(data);
    } catch (error) {
      console.log(error);
      alert("Failed to load orders.");
    }
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        📦 All Orders
      </h1>

      {orders.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No Orders Found
        </h2>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            <h3>👤 {order.user?.name}</h3>

            <p>
              <strong>Email:</strong>{" "}
              {order.user?.email}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {order.address}
            </p>

            <p>
              <strong>Total:</strong> ₹
              {order.totalAmount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {order.paymentMethod}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

import "./AdminDashboard.css";

function AdminDashboard() {
  const { userInfo } = useContext(AuthContext);

  const [stats, setStats] = useState({
    totalPizzas: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await API.get("/admin/stats", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setStats(data);
    } catch (error) {
      console.log(error);
      alert("Unable to load dashboard statistics.");
    }
  };

  return (
    <div className="admin-dashboard">

      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        👨‍💼 Admin Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>🍕 Total Pizzas</h2>
          <h1>{stats.totalPizzas}</h1>
        </div>

        <div className="dashboard-card">
          <h2>📦 Total Orders</h2>
          <h1>{stats.totalOrders}</h1>
        </div>

        <div className="dashboard-card">
          <h2>👥 Total Users</h2>
          <h1>{stats.totalUsers}</h1>
        </div>

        <div className="dashboard-card">
          <h2>💰 Total Revenue</h2>
          <h1>₹{stats.totalRevenue}</h1>
        </div>

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Link to="/admin/orders">
          <button
            style={{
              padding: "15px 35px",
              background: "#e63946",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📦 View All Orders
          </button>
        </Link>
      </div>

    </div>
  );
}

export default AdminDashboard;
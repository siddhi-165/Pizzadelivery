import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

import {
  FaPizzaSlice,
  FaShoppingCart,
  FaUserCircle,
  FaClipboardList,
  FaUserShield,
} from "react-icons/fa";

function Navbar() {
  const { userInfo, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <FaPizzaSlice />
        PizzaVerse
      </Link>

      <div className="nav-links">
        <a href="#menu">Menu</a>

        <a href="#offers">Offers</a>

        <a href="#checkout">Checkout</a>
      </div>

      <div className="nav-right">

        <div className="cart-button">
          <FaShoppingCart />
          <span>{totalItems}</span>
        </div>

        {userInfo ? (
          <>
            <Link
              to="/myorders"
              style={{ textDecoration: "none" }}
            >
              <button className="login-btn">
                <FaClipboardList style={{ marginRight: "8px" }} />
                My Orders
              </button>
            </Link>

            <Link
              to="/admin"
              style={{ textDecoration: "none" }}
            >
              <button className="register-btn">
                <FaUserShield style={{ marginRight: "8px" }} />
                Admin
              </button>
            </Link>

            <div className="user-name">
              <FaUserCircle />
              {userInfo.user.name.split(" ")[0]}
            </div>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link
              to="/register"
              style={{ textDecoration: "none" }}
            >
              <button className="register-btn">
                Register
              </button>
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
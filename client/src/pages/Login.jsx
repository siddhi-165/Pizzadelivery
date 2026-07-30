import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/users/login",
        form
      );

      login(data);

      alert("✅ Login Successful!");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "70px auto",
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.15)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🔐 Login
      </h1>

      <form onSubmit={loginUser}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button style={styles.button}>
          Login
        </button>
      </form>

      <p style={{ textAlign: "center" }}>
        New User?
      </p>

      <Link to="/register">
        <button style={styles.secondary}>
          Register
        </button>
      </Link>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "20px",
    background: "#e63946",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },

  secondary: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Login;
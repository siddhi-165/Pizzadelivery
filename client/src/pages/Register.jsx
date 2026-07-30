import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", form);

      alert("✅ Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
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
        📝 Register
      </h1>

      <form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

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
          Register
        </button>
      </form>

      <p style={{ textAlign: "center" }}>
        Already have an account?
      </p>

      <Link to="/login">
        <button style={styles.secondary}>
          Login
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

export default Register;
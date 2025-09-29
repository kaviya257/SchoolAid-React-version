import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const withLoading = (Wrapped) => {
  return function WithLoading({ loading, ...props }) {
    if (loading) return <p style={{ textAlign: "center", color: "blue" }}>Loading...</p>;
    return <Wrapped {...props} />;
  };
};
function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "whitesmoke" }}>School Aid Management</h1>
      <marquee
        behavior="scroll"
        direction="left"
        scrollAmount="15"
        style={{ color: "white", fontWeight: "bold" }}
      >
        SchoolAid Management System connects seekers with helpers, enabling students to get academic support and share resources.
      </marquee>
    </header>
  );
}
function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", form); // fake API
      if (form.username === "admin" && form.password === "admin") {
        onLogin(); 
      } else {
        setError("Invalid credentials. Try 'admin' / 'admin'.");
      }
    } catch (err) {
      setError("Server error, please try again later.");
    }
  };
const handleRefresh = () => {
    setForm({ username: "", password: "" });
    setError("");
    inputRef.current.focus();
  };
return (
    <div
      style={{
        margin: "auto",
        marginTop: "40px",
        maxWidth: "400px",
        background: "rgba(255,255,255,0.9)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%", color: "black" }}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  ref={inputRef}
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                />
              </td>
            </tr>
            {error && (
              <tr>
                <td></td>
                <td>
                  <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <button onClick={handleRefresh} type="button" style={{ padding: "5px 10px" }}>
                  Refresh
                </button>
              </td>
              <td>
                <button type="submit" style={{ padding: "5px 10px" }}>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
const LoginFormWithLoading = withLoading(LoginForm);
function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <p>© {new Date().getFullYear()} SchoolAid | React Demo</p>
    </footer>
  );
}
export default function Login({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      onSuccess(); 
      navigate("/welcome"); 
      setLoading(false);
    }, 500); 
  };
return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/841/88/HD-wallpaper-magical-book-reading-open-stories-book.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingBottom: "40px",
      }}
    >
      <Header />
      <LoginFormWithLoading loading={loading} onLogin={handleLogin} />
      <Footer />
    </div>
  );
}

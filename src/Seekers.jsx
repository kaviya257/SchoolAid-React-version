import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Seekers() {
  const [form, setForm] = useState({ name: "", help: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send data to a server using axios if needed
    // axios.post("/seeker", form) ...

    setMessage("✅ Your request has been submitted successfully!");
    setForm({ name: "", help: "" });
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif", background: "#1a1a1a", paddingBottom: "40px" }}>
      <h1 style={{ textAlign: "center", color: "whitesmoke", background: "black", padding: "10px" }}>
        Seeker Request Form
      </h1>

      <div style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px" }}
          /><br /><br />

          <label htmlFor="help">What help do you need?</label><br />
          <textarea
            id="help"
            name="help"
            placeholder="Describe the help needed"
            rows="4"
            cols="50"
            value={form.help}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px" }}
          ></textarea><br /><br />

          <button type="submit" style={{ padding: "10px 15px", marginRight: "10px", borderRadius: "5px", background: "#2196f3", color: "white", border: "none", cursor: "pointer" }}>
            Submit Request
          </button>
          <button
            type="button"
            onClick={() => navigate("/welcome")}
            style={{ padding: "10px 15px", borderRadius: "5px", background: "#f44336", color: "white", border: "none", cursor: "pointer" }}
          >
            Back
          </button>
        </form>

        {message && (
          <p style={{ textAlign: "center", color: "green", fontWeight: "bold", marginTop: "20px" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

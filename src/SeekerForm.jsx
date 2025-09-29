import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeekerForm({ seekers, setSeekers }) {
  const [form, setForm] = useState({ name: "", help: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new seeker to global seekers state
    const newSeeker = {
      id: seekers.length + 1,
      name: form.name,
      help_needed: form.help,
    };
    setSeekers([...seekers, newSeeker]);

    setMessage("✅ Your request has been submitted!");
    setForm({ name: "", help: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#282c34",
        paddingBottom: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "whitesmoke",
          background: "black",
          padding: "10px",
        }}
      >
        Seeker Request Form
      </h1>

      <div style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
          <label>Your Name:</label><br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          <br /><br />

          <label>What help do you need?</label><br />
          <textarea
            name="help"
            placeholder="Describe the help needed"
            rows="4"
            value={form.help}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          <br /><br />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Submit Request
          </button>

          <button
            type="button"
            onClick={() => navigate("/welcome")}
            style={{
              padding: "10px 20px",
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
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

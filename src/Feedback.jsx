import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Feedback submitted successfully!");
    e.target.reset();
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/029/858/669/small_2x/mystical-forest-opened-book-with-magic-tree-on-dark-background-generative-ai-photo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "white",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0 0 10px #aaa",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#000" }}>Feedback Form</h2>
        {message && <p style={{ textAlign: "center", color: "green" }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Rating:</label>
          <select name="rating" required>
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Poor</option>
          </select>
          <label>Description:</label>
          <textarea name="description" rows="4" placeholder="Your feedback here..." required />
          <button type="submit">Submit Feedback</button>
        </form>
        <button
          onClick={() => navigate("/welcome")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "5px",
            background: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

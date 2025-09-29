import React, { useState } from "react";

export default function Helper({ initialSeekers }) {
  const [helps, setHelps] = useState({}); // { seekerId: [{helper_name, solution}, ...] }

  const handleSubmit = (e, seekerId) => {
    e.preventDefault();
    const form = e.target;
    const helperName = form.helperName.value;
    const solution = form.solution.value;

    setHelps(prev => ({
      ...prev,
      [seekerId]: prev[seekerId]
        ? [...prev[seekerId], { helper_name: helperName, solution }]
        : [{ helper_name: helperName, solution }],
    }));

    form.querySelector("button[type='submit']").disabled = true;
    form.reset();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Seekers Needing Help</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          padding: "20px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          background: "white",
          width: "80%",
          margin: "auto",
        }}
      >
        {initialSeekers.map(seeker => (
          <div
            key={seeker.id}
            style={{
              flex: "0 0 auto",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
              background: "#e3f2fd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{seeker.name}</h3>
            <p><b>Need:</b> {seeker.help_needed}</p>
            <form onSubmit={e => handleSubmit(e, seeker.id)}>
              <input
                type="text"
                name="helperName"
                placeholder="Your name"
                required
                style={{ width: "100%", marginBottom: "5px", padding: "5px", borderRadius: "5px" }}
              />
              <textarea
                name="solution"
                placeholder="Text / URL / PPT link"
                required
                style={{ width: "100%", marginBottom: "5px", padding: "5px", borderRadius: "5px" }}
              />
              <button
                type="submit"
                style={{
                  marginTop: "5px",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#2196f3",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Help
              </button>
            </form>
            {helps[seeker.id] && (
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <b>Solutions:</b>
                <ul>
                  {helps[seeker.id].map((h, idx) => (
                    <li key={idx}><b>{h.helper_name}</b>: {h.solution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

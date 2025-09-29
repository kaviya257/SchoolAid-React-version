import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px", color: "white" }}>
      <h1>Functionalities</h1>
    </header>
  );
}

function Functionalities() {
  const links = [
    { label: "Seeker", path: "/seeker" },
    { label: "Helper", path: "/helper" },  // Added helper
    { label: "Feedback", path: "/feedback" },
    { label: "Back", path: "/" },
  ];

  return (
    <h2
      style={{
        background: "white",
        textAlign: "center",
        marginTop: "40px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          style={{
            margin: "0 10px",
            color: "black",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          {link.label} {idx < links.length - 1 ? "|" : ""}
        </Link>
      ))}
    </h2>
  );
}

function ImageGrid() {
  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/029/858/669/small_2x/mystical-forest-opened-book-with-magic-tree-on-dark-background-generative-ai-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/029/858/669/small_2x/mystical-forest-opened-book-with-magic-tree-on-dark-background-generative-ai-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/029/858/669/small_2x/mystical-forest-opened-book-with-magic-tree-on-dark-background-generative-ai-photo.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "40px",
        gap: "20px",
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          width="300"
          height="300"
          alt={`school-${idx}`}
          style={{ borderRadius: "8px", border: "2px solid white" }}
        />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "40px", color: "white" }}>
      <p>© {new Date().getFullYear()} SchoolAid | React Demo</p>
    </footer>
  );
}

export default function Welcome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/029/858/669/small_2x/mystical-forest-opened-book-with-magic-tree-on-dark-background-generative-ai-photo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingBottom: "40px",
      }}
    >
      <Header />
      <Functionalities />
      <ImageGrid />
      <Footer />
    </div>
  );
}

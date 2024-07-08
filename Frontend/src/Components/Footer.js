import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <center>
      <div>
        <p>&copy; {currentYear}</p>
        <a
          href="https://github.com/RohanMurali3101/MERNProject-MusicApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "10px",
            border: "1px solid #333",
            borderRadius: "5px",
            marginTop: "10px",
            display: "inline-block",
          }}
        >
          View on GitHub
        </a>
      </div>
    </center>
  );
}

export default Footer;

import React from "react";
import Layout from "../Components/Layout";
import "../Styles/Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <Layout>
      <center>
        <h1>Home</h1>
      </center>
      <div className="container">
        <a href="https://music-stream-app-mernproject.vercel.app/" className="box">View Songs</a>
        <a href="/view" className="box">View Users</a>
      </div>
    </Layout>
  );
}

export default Home;

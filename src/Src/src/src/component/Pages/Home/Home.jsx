import React from "react";
import "./Home.css";
function Home() {
  const styles = {
    color: "#fff",
    fontSize: "2rem",
    backgroundColor: "gold",
  };
  return (
    <div className="body">
      <h1 style={{ color: "red", background: "forestgreen" }}>
        Home component
      </h1>
      <h1 className="h1">Another style</h1>
      <p style={styles}>This is a Paragraph tag in react</p>
    </div>
  );
}

export default Home;

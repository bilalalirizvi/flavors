import React from "react";
import Radium from "radium";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgb(58,58,58)",
    padding: "50px 100px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:900px)": {
      padding: "50px 30px",
    },
    "@media (max-width:700px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 20px",
      gap: "10px",
      height: "120px",
    },
  },
  text: {
    color: "white",
    fontSize: "15px",
  },
};
const Footer = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Copyright © 2022 Restaurant |{" "}
        <span style={{ color: "rgb(230,230,230)" }}>Credits</span>
      </p>
      <p style={styles.text}>Powered by Restaurant</p>
    </div>
  );
};

export default Radium(Footer);

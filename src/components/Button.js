import React from "react";

const styles = {
  bookNowBtn: {
    outline: "none",
    border: "none",
    backgroundColor: "#E54C2A",
    color: "white",
    padding: "13px 30px",
    borderRadius: "50px",
    fontWeight: "500",
    fontSize: "16px",
  },
};

const Button = ({ text }) => {
  return <button style={styles.bookNowBtn}>{text}</button>;
};

export default Button;

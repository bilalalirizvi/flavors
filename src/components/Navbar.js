import React, { useState } from "react";
import Radium from "radium";
import logo from "../assets/images/logo.png";
import { Button } from "../components";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "90px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 80px",
    "@media (max-width: 900px)": {
      padding: "0px 20px",
    },
  },
  unorderList: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  list: {
    color: "rgb(120,120,120)",
    fontSize: "15px",
    cursor: "pointer",
  },
  menuBar: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E54C2A",
    cursor: "pointer",
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
  menuContent: {
    position: "absolute",
    top: "75px",
    left: "0px",
    width: "100%",
    borderTop: "1px solid rgb(225,225,225)",
    zIndex: 1,
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
  menuItem: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0px 30px",
    backgroundColor: "rgb(250,250,250)",
    borderBottom: "1px solid rgb(225,225,225)",
    color: "rgb(120,120,120)",
    fontSize: "15px",
  },
};

const Navbar = () => {
  const [menuOpenClose, setMenuOpenClose] = useState(false);
  const menuClose = () => {
    setMenuOpenClose(false);
  };
  return (
    <div style={styles.container} id="home">
      <div style={styles.logoDiv}>
        <img style={styles.logoImg} src={logo} alt="Logo" />
      </div>
      <ul style={styles.unorderList}>
        <a href="#home">
          <li style={[styles.list, { color: "#E54C2A" }]}>Home</li>
        </a>
        <a href="#about">
          <li style={styles.list} className="menuList">
            About
          </li>
        </a>
        <a href="#menu">
          <li style={styles.list} className="menuList">
            Menu
          </li>
        </a>
        <a href="#contact">
          <li style={styles.list} className="menuList">
            Contact
          </li>
        </a>
        <a href="#services">
          <li style={styles.list} className="menuList">
            Services
          </li>
        </a>
        <li style={styles.list}>
          <Button text={"Book Now"} />
        </li>
      </ul>
      <div
        style={styles.menuBar}
        onClick={() => setMenuOpenClose(!menuOpenClose)}
      >
        {menuOpenClose ? (
          <RiCloseFill color="white" size="22px" />
        ) : (
          <FaBars color="white" />
        )}
      </div>
      {menuOpenClose && (
        <div style={styles.menuContent}>
          <a onClick={menuClose} href="#home">
            <div
              className="menuItem"
              style={[styles.menuItem, { color: "#E54C2A" }]}
            >
              Home
            </div>
          </a>
          <a onClick={menuClose} href="#about">
            <div className="menuItem" style={styles.menuItem}>
              About
            </div>
          </a>
          <a onClick={menuClose} href="#menu">
            <div className="menuItem" style={styles.menuItem}>
              Menu
            </div>
          </a>
          <a onClick={menuClose} href="#contact">
            <div className="menuItem" style={styles.menuItem}>
              Contact
            </div>
          </a>
          <a onClick={menuClose} href="#services">
            <div className="menuItem" style={styles.menuItem}>
              Services
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Radium(Navbar);

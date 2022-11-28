import React from "react";
import Radium from "radium";
import { Button } from "../components";

const styles = {
  container: {
    width: "100%",
    padding: "120px 0px",
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  heading: {
    fontSize: "28px",
  },
  descriptionDiv: {
    width: "45%",
    "@media (max-width: 1000px)": {
      width: "55%",
    },
    "@media (max-width: 800px)": {
      width: "75%",
    },
    "@media (max-width: 600px)": {
      width: "85%",
    },
  },
  description: {
    color: "rgb(120,120,120)",
    fontSize: "15px",
    lineHeight: "30px",
    textAlign: "center",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    gap: "80px",
    padding: "0px 50px",
    "@media (max-width: 1000px)": {
      gap: "20px",
    },
    "@media (max-width: 900px)": {
      flexDirection: "column",
      padding: "0px 10px",
    },
  },
  drinkMenu: {
    backgroundColor: "white",
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    maxWidth: "350px",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
    },
    "@media (max-width: 600px)": {
      padding: "50px 20px",
    },
  },
  foodMenu: {
    backgroundColor: "white",
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    maxWidth: "580px",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
    },
    "@media (max-width: 600px)": {
      padding: "50px 20px",
    },
  },
  menuHeading: {
    fontSize: "25px",
  },
  menuItem: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  item: {},
  itemName: {
    fontFamily: "Playball",
    fontSize: "20px",
    color: "rgb(90,90,90)",
  },
  itemDesc: {
    marginTop: "10px",
    fontSize: "15px",
    color: "rgb(120,120,120)",
  },
};

const Menu = () => {
  return (
    <div style={styles.container} id="menu">
      <p style={styles.heading}>Our Specialties</p>
      <div style={styles.descriptionDiv}>
        <p style={styles.description}>
          Do you serve delicacies like none other? Here is your chance to flaunt
          them all! Tell the world about the special dishes you serve.
        </p>
      </div>
      <div style={styles.menu}>
        <div style={styles.drinkMenu}>
          <img
            src="https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2019/11/coffee-1.jpg"
            alt="Drink"
            width="180px"
            height="auto"
          />
          <p style={styles.menuHeading}>Drink</p>
          <div style={styles.menuItem}>
            <div style={styles.item}>
              <p style={styles.itemName}>Lemonade ----------------- $12</p>
              <p style={styles.itemDesc}>Made of the Best Lemons.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>Smoothie ------------------ $15</p>
              <p style={styles.itemDesc}>Made of fresh fruits and mint.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>Tea ---------------------- $10</p>
              <p style={styles.itemDesc}>The awesome blend of masala.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>Coffee ------------------- $10</p>
              <p style={styles.itemDesc}>The best coffee in town.</p>
            </div>
          </div>
        </div>
        <div style={styles.foodMenu}>
          <img
            src="https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2019/11/food.jpg"
            alt="Food"
            width="180px"
            height="auto"
          />
          <p style={styles.menuHeading}>Food</p>
          <div style={styles.menuItem}>
            <div style={styles.item}>
              <p style={styles.itemName}>
                Salmon & Rock Shrimp ----------------------------- $25
              </p>
              <p style={styles.itemDesc}>Pan seared fish with garlic.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>
                Southern Chicken ---------------------------------- $40
              </p>
              <p style={styles.itemDesc}>Smoked fresh chicken.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>
                Sesame Seared Salmon ----------------------------- $23
              </p>
              <p style={styles.itemDesc}>Mixed green olives on chicken.</p>
            </div>
            <div style={styles.item}>
              <p style={styles.itemName}>
                Grilled Lamb Burger ------------------------------- $35
              </p>
              <p style={styles.itemDesc}>
                Made of the Best Soda and Peppermint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button text={"Download Full Menu"} />
    </div>
  );
};

export default Radium(Menu);

import React from "react";
import Radium from "radium";
import { Button } from "../components";

const styles = {
  container: {
    width: "100%",
    height: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1000px)": {
      height: "1000px",
    },
  },
  row: {
    width: "83%",
    display: "flex",
    flexDirection: "row",
    gap: "90px",
    "@media (max-width: 1100px)": {
      gap: "70px",
    },
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  columnLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    gap: "20px",
  },
  columnRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  nestedColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // maxWidth: "200px",
  },
  image: {
    flex: 1,
    display: "flex",
  },
  headingDiv: {
    borderLeft: "6px solid #E54C2A",
  },
  heading: {
    padding: "3px 20px",
    fontSize: "28px",
  },
  description: {
    flex: 1,
    lineHeight: "30px",
    fontSize: "15px",
    color: "rgb(120,120,120)",
  },
};

const About = () => {
  return (
    <div style={styles.container} id="about">
      <div style={styles.row}>
        <div style={styles.columnLeft}>
          <div style={styles.nestedColumn}>
            <div style={styles.image}>
              <img
                src="https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2019/11/sushi.jpg"
                alt="_image"
                width="100%"
                height="100%"
              />
            </div>
            <div style={styles.image}>
              <img
                src="https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2019/11/soup.jpg"
                alt="_image"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div style={styles.nestedColumn}>
            <img
              src="https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2017/07/Story-img2-free-img.jpg"
              alt="_image"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div style={styles.columnRight}>
          <div style={styles.headingDiv}>
            <p style={styles.heading}>Our Story</p>
          </div>
          <p style={styles.description}>
            Want to share your story? We would love to read it. This is where
            you can tell the world about you, about who you are; what you do;
            what inspired you to do this, your achievements and more. People
            often trust organizations they know in and out. This is where you
            can write about your founders, the year you set up the business and
            how you managed to bring it up all this time. You special moments
            and achievements can be listed along with the list of services.
          </p>
          <div>
            <Button text={"Check Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(About);

import React from "react";
import Radium from "radium";
import { Button } from "../components";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "auto",
    overFlow: "hidden",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "38px",
  },
  heading: {
    color: "white",
    fontSize: "18px",
  },
  mainHeading: {
    color: "white",
    fontFamily: "Playball",
    fontSize: "60px",
    "@media (max-width: 600px)": {
      fontSize: "40px",
    },
  },
  line: {
    border: "2px solid #E54C2A",
    width: "55px",
    "@media (max-width: 600px)": {
      width: "30px",
    },
  },
  descriptionDiv: {
    width: "50%",
    "@media (max-width: 600px)": {
      width: "70%",
    },
  },
  description: {
    color: "white",
    lineHeight: "30px",
    textAlign: "center",
    fontSize: "15px",
    "@media (max-width: 600px)": {
      fontSize: "13px",
    },
  },
  videoOverly: {
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  imageOverly: {
    width: "100%",
    height: "555px",
    backgroundImage: `url("https://websitedemos.net/restaurant-free/wp-content/uploads/sites/41/2017/07/Header-Placeholder-free-img.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (min-width: 1001px)": {
      display: "none",
    },
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoOverly}>
        <video autoPlay muted loop width="100%" height="auto">
          <source
            src="https://websitedemos.net/restaurant-free/wp-content/uploads/sites/41/2017/08/restaurant-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div style={styles.imageOverly}></div>
      <div style={styles.content}>
        <p style={styles.heading}>It's All About Good Food</p>
        <p style={styles.mainHeading}>Delicious Flavors</p>
        <hr style={styles.line} />
        <div style={styles.descriptionDiv}>
          <p style={styles.description}>
            A catchy statement that supports the title you’ve mentioned above.
            Make it attractive and encourage users to act immediately.
          </p>
        </div>
        <Button text={"Book Now"} />
      </div>
    </div>
  );
};

export default Radium(Home);

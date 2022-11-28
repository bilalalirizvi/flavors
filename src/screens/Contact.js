import React from "react";
import Radium from "radium";
import { Button } from "../components";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "130px 0px",
    backgroundImage: `url("https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2019/11/kitchen.jpg")`,
    backgroundPosition: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (max-width:600px)": {
      padding: "60px 0px",
    },
  },
  boxWrap: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width:600px)": {
      flexDirection: "column",
      gap: "30px",
      width: "100%",
      padding: "0px 10px",
    },
  },
  openTime: {
    backgroundColor: "rgb(70,70,70)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: "50px 60px",
    "@media (max-width:1000px)": {
      padding: "50px 30px",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  questions: {
    width: "50vw",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: "50px 80px",
    "@media (max-width:1000px)": {
      padding: "50px 30px",
    },
    "@media (max-width:600px)": {
      width: "100vw",
      width: "100%",
    },
  },
  input: {
    width: "100%",
    height: "40px",
    padding: "0px 20px",
    marginBottom: "20px",
    fontFamily: "arial",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px 20px",
    marginBottom: "20px",
    resize: "vertical",
    fontFamily: "arial",
  },
  line: {
    width: "330px",
    marginBottom: "30px",
    "@media (max-width:1000px)": {
      width: "250px",
    },
  },
};

const Contact = () => {
  return (
    <div style={styles.container} id="contact">
      <div style={styles.boxWrap}>
        <div style={styles.openTime}>
          <p
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Open
          </p>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "playball",
              marginBottom: "50px",
            }}
          >
            Time
          </p>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Monday - Friday
          </p>
          <p
            style={{
              color: "rgb(130,130,130)",
              marginBottom: "10px",
              fontSize: "15px",
            }}
          >
            7AM – 11AM (Breakfast)
          </p>
          <p
            style={{
              color: "rgb(130,130,130)",
              marginBottom: "50px",
              fontSize: "15px",
            }}
          >
            11AM – 10PM (Lunch / Dinner)
          </p>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Saturday - Sunday
          </p>
          <p
            style={{
              color: "rgb(130,130,130)",
              marginBottom: "20px",
              fontSize: "15px",
            }}
          >
            8AM – 1AM (Breakfast)
          </p>
          <p
            style={{
              color: "rgb(130,130,130)",
              marginBottom: "50px",
              fontSize: "15px",
            }}
          >
            1AM – 9PM (Lunch / Dinner)
          </p>
          <hr style={styles.line} />
          <p
            style={{
              fontFamily: "playball",
              fontSize: "18px",
            }}
          >
            +1-410-555-0134
          </p>
        </div>
        <div style={styles.questions}>
          <p
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Questions
          </p>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "playball",
              marginBottom: "50px",
            }}
          >
            Send Your Queries
          </p>
          <input style={styles.input} type="text" placeholder="Name" />
          <input style={styles.input} type="text" placeholder="Email" />
          <textarea style={styles.textarea} placeholder="Message"></textarea>
          <div style={{ width: "100%" }}>
            <Button text={"send"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(Contact);

import React from "react";
import Radium from "radium";
import { Map, GoogleApiWrapper, GoogleAPI } from "google-maps-react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineGooglePlus, AiOutlineInstagram } from "react-icons/ai";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "130px 0px",
    gap: "50px",
    "@media (max-width:768px)": {
      flexDirection: "column",
      padding: "80px 20px",
    },
  },
  mapWrap: {
    width: "60%",
    height: "350px",
    position: "relative",
    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  map: {
    width: "100%",
    height: "100%",
  },
  address: {
    width: "170px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  headingDiv: {
    borderLeft: "6px solid #E54C2A",
    marginBottom: "40px",
  },
  headingMain: {
    padding: "3px 20px",
    fontSize: "28px",
  },
  heading: {
    fontSize: "20px",
    // marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "rgb(120,120,120)",
    lineHeight: "25px",
  },
  iconDiv: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    marginTop: "20px",
    "@media (max-width:768px)": {
      justifyContent: "center",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#E54C2A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
    // ":hover": {
    //   backgroundColor: "rgb(58, 58, 58) !important",
    // },
  },
};

const Address = (props) => {
  return (
    <div style={styles.container} id="address">
      <div style={styles.mapWrap}>
        <Map google={props.google} zoom={15} style={styles.map}></Map>
      </div>
      <div style={styles.address}>
        <div style={styles.headingDiv}>
          <p style={styles.headingMain}>Location</p>
        </div>
        <div>
          <p style={[styles.heading, { marginBottom: "10px" }]}>Address</p>
          <p style={styles.text}>
            500 Terry Francois St. San Francisco, CA 94158
          </p>
        </div>
        <div>
          <p
            style={[
              styles.heading,
              { marginBottom: "10px", marginTop: "30px" },
            ]}
          >
            Contact
          </p>
          <p style={styles.text}>info@example.com Tel:123-456-7890</p>
        </div>
        <div style={styles.iconDiv} id="icon">
          <div style={styles.icon}>
            <TiSocialFacebook style={{ fontSize: "20px" }} />
          </div>
          <div style={styles.icon}>
            <TiSocialTwitter style={{ fontSize: "20px" }} />
          </div>
          <div style={styles.icon}>
            <AiOutlineGooglePlus style={{ fontSize: "20px" }} />
          </div>
          <div style={styles.icon}>
            <AiOutlineInstagram style={{ fontSize: "18px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: GoogleAPI,
})(Radium(Address));

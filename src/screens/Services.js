import React, { useState } from "react";
import Radium from "radium";

const styles = {
  container: {
    width: "100%",
    padding: "120px 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
  },
  card: {
    width: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImage: {
    marginBottom: "10px",
  },
  cardHeading: {
    marginBottom: "10px",
    fontSize: "20px",
  },
  cardDescription: {
    lineHeight: "30px",
    textAlign: "center",
    fontSize: "15px",
    color: "rgb(120,120,120)",
  },
};

const _data = [
  {
    url: "https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2017/07/Quality-free-img.png",
    name: "Quality Food",
    description:
      "Write a couple of lines elaborating on the title above. Make sure it attracts people.",
  },
  {
    url: "https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2017/07/Cook-free-img.png",
    name: "Starred Chef",
    description:
      "Write a couple of lines elaborating on the title above. Make sure it attracts people.",
  },
  {
    url: "https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2017/07/Best-free-img.png",
    name: "Best Service",
    description:
      "Write a couple of lines elaborating on the title above. Make sure it attracts people.",
  },
  {
    url: "https://websitedemos.net/restaurant-02/wp-content/uploads/sites/41/2017/07/Music-free-img.png",
    name: "Live Music",
    description:
      "Write a couple of lines elaborating on the title above. Make sure it attracts people.",
  },
];

const Services = () => {
  const [data, setData] = useState(_data);
  return (
    <div style={styles.container} id="services">
      {data.map(({ url, name, description }, i) => {
        return (
          <div style={styles.card} key={i}>
            <div>
              <img style={styles.cardImage} src={url} alt={name} />
            </div>
            <p style={styles.cardHeading}>{name}</p>
            <p style={styles.cardDescription}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Radium(Services);

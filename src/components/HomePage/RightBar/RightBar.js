import React from "react";
import styles from "./RightBar.module.css";
import Card from "@mui/material/Card";

const Data = [
  {
    image: "assets/images/artist2.jpeg",
    logo: "",
    name: "Lara Leones",
  },
  {
    image: "assets/images/artist3.jpeg",
    logo: "",
    name: "Lara Leones",
  },
  {
    image: "assets/images/artist4.webp",
    logo: "",
    name: "Lara Leones",
  },
  {
    image: "assets/images/artist5.webp",
    logo: "",
    name: "Lara Leones",
  },
  {
    image: "assets/images/artist6.jpeg",
    logo: "",
    name: "Lara Leones",
  },
  {
    image: "assets/images/artist7.webp",
    logo: "",
    name: "Lara Leones",
  }
];

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightBarUp}>
        <p>Become a seller</p>
      </div>
      <div className={styles.rightBar}>
        <div className={styles.name}>
          <p>Artist</p>
          <p>Photographers</p>
        </div>
        <div className={styles.cards}>
          {Data &&
            Data.map((e, i) => {
              return (
                  <Card  key={i} className={styles.cards}>
                    <img src={e.image} />
                  </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RightBar;

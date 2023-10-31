import Card from "@mui/material/Card";
import styles from "./Careousel.module.css";

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
//   {
//     image: "assets/images/artist5.webp",
//     logo: "",
//     name: "Lara Leones",
//   },
//   {
//     image: "assets/images/artist6.jpeg",
//     logo: "",
//     name: "Lara Leones",
//   },
//   {
//     image: "assets/images/artist7.webp",
//     logo: "",
//     name: "Lara Leones",
//   }
];

const Careousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {Data &&
          Data.map((e, i) => {
            return (
                <Card sx={{width:"800px"}} className={styles.card}>
                  <img src={e.image} alt="loading"/>
                </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Careousel;

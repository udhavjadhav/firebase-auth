import React from "react";
import styles from "./MainContent.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Data from "../../../Data";
import Careousel from "../../Careousel/Careousel";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div>
          <SearchOutlinedIcon className={styles.searchIcon}/>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className={styles.filter}>
          <span>Filters</span>
          <TuneOutlinedIcon />
        </div>
      </div>
      {Data &&
        Data.map((e, i) => {
          return (
            <div key={i} className={styles.content}>
              <div>
                <Card sx={{ width: "100%", padding: "20px" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={e.logo} />
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={e.name}
                    subheader={e.username}
                  />
                  <CardMedia
                    sx={{
                      borderRadius: "50px",
                      padding: "25px",
                      width: "800px",
                    }}
                    component="img"
                    height="350"
                    image={e.image}
                    alt="img"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {e.about}
                      <button className={styles.btn}>Read More</button>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <span>{e.likes}</span>
                    <IconButton aria-label="share">
                      <ModeCommentOutlinedIcon />
                    </IconButton>
                    <span>{e.comments}</span>
                    <IconButton aria-label="share">
                      <ReplyOutlinedIcon />
                    </IconButton>
                    <span>{e.shares}</span>
                  </CardActions>
                </Card>
              </div>
            </div>
          );
        })}
        <Careousel/>
    </div>

  );
};

export default MainContent;

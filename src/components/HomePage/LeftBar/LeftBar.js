import React from "react";
import styles from "./LeftBar.module.css";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const LeftBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h3>Welcome, <span> {props.name}</span></h3>
      {/* <h2>{props.name ? `Welcome - ${props.name}`: <Button onClick={()=>navigate('/login')} variant="contained">Login</Button> }</h2> */}
      </div>
      <div className={styles.sideNav}>
        <ul className={styles.listItems}>
          <li>
            <span>
              <HomeOutlinedIcon />
            </span>
            Home
          </li>
          <li>
            <span>
              <NotificationsNoneOutlinedIcon />
            </span>
            Notifications
          </li>
          <li>
            <span>
              <FavoriteBorderOutlinedIcon />
            </span>
            Shop
          </li>
          <li>
            <span>
              <EmailOutlinedIcon />
            </span>
            Conversation
          </li>
          <li>
            <span>
              <AccountBalanceWalletOutlinedIcon />
            </span>
            Wallet
          </li>
          <li>
            <span>
              <StarsOutlinedIcon />
            </span>
            Subscription
          </li>
          <li>
            <span>
              <PersonOutlineOutlinedIcon />
            </span>
            My Profile
          </li>
          <li>
            <span>
              <SettingsOutlinedIcon />
            </span>
            Settings
          </li>
        </ul> 
        <div className={styles.btn}>
          <span>
            <LogoutOutlinedIcon onClick={() => navigate("/login")} className={styles.logoutIcon} />
          </span>
          <button onClick={() => navigate("/login")}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

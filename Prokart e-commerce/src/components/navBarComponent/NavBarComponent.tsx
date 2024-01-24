import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "./NavBarComponent.css";
import { gapi } from "gapi-script";
import GoogleLogInComponent from "../googleAuthComponents/GoogleLogInComponent";
import GoogleLogOutComponent from "../googleAuthComponents/GoogleLogOutComponent";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "@leecheuk/react-google-login";
import CartFromIconComponent from "../cartComponent/cartFromIconComponent/CartFromIconComponent";

const NavBarComponent = () => {
  const [user, setUser] = useState<
    GoogleLoginResponse | GoogleLoginResponseOffline
  >();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: import.meta.env.VITE_REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  console.log(user);

  const NavBar = styled(AppBar)(() => ({
    backgroundColor: "var(--white-color)",
    color: "var(--black-color)",
    boxShadow: "0px 0px",
  }));

  return (
    <Box sx={{ flexGrow: 5 }}>
      <NavBar className="pk-navbar">
        <Toolbar>
          <div className="pk-logo">
            <Typography sx={{ marginRight: "30px" }}>
              <a href="/">
                <img
                  className="pk-logo-img"
                  src="./src/assets/logo.png"
                  alt="logo"
                />
              </a>
            </Typography>
          </div>
          <div className="pk-search">
            <SearchIcon className="pk-searchIcon" />
            <input
              className="pk-input"
              placeholder=" What is on your mind today?"
              type="text"
            />
            <Button
              variant="contained"
              sx={{ borderRadius: "0%" }}
              className="pk-searchBtn"
              startIcon={<SearchIcon />}
              disableElevation
            >
              Search
            </Button>
          </div>
          <div className="pk-userOptions">
            <CartFromIconComponent />
            {user ? (
              <GoogleLogOutComponent setUser={setUser} user={user} />
            ) : (
              <GoogleLogInComponent setUser={setUser} />
            )}
          </div>
        </Toolbar>
      </NavBar>
    </Box>
  );
};
export default NavBarComponent;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import "./NavBarComponent.css";

const NavBarComponent = () => {
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
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "fantasy",
                fontSize: "xx-large",
              }}
            >
              <ShoppingCartCheckoutIcon
                sx={{ color: "var(--logo-color)", fontSize: "xx-large" }}
              />
              ProKart
            </Typography>
          </div>
          <div className="pk-search">
            <SearchIcon
              sx={{
                color: "var(--logo-color)",
                fontSize: "xx-large",
                border: "var(--search-border)",
                backgroundColor: "var(--search-bg)",
                padding: "9px",
              }}
            />
            <input
              className="pk-input"
              placeholder=" What is on your mind today?"
              type="text"
            />
            <Button
              variant="contained"
              sx={{
                backgroundImage:
                  "-webkit-linear-gradient(0deg,#ff934b 0%,#ff5e62 100%)",
                width: "15%",
                height: "92%",
              }}
              startIcon={<SearchIcon />}
              disableElevation
            >
              Search
            </Button>
          </div>
          <div className="pk-userOptions">
            <Button
              startIcon={<LoginIcon />}
              sx={{ color: "var(--logo-color)" }}
            >
              Sign in
            </Button>
          </div>
        </Toolbar>
      </NavBar>
    </Box>
  );
};
export default NavBarComponent;

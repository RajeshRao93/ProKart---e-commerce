import React from "react";
import { GoogleLogout } from "@leecheuk/react-google-login";
import { Avatar, Button, IconButton, Menu } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

interface ISignoutProps {
  setUser: (arg: any) => {};
  user: any;
}

const GoogleLogOutComponent = (props: ISignoutProps) => {
  const { setUser, user } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const clientId: string = import.meta.env
    .VITE_REACT_APP_GOOGLE_AUTH_CLIENT_ID!;

  const onSuccess = () => {
    setUser(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <GoogleLogout
      clientId={clientId}
      onLogoutSuccess={onSuccess}
      render={(renderProps) => (
        <>
          <IconButton onClick={handleOpen} sx={{ p: 0 }}>
            <Avatar {...stringAvatar(user.profileObj.name)} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Button
              startIcon={<LogoutIcon />}
              onClick={renderProps.onClick}
              sx={{ color: "var(--logo-color)" }}
            >
              Logout
            </Button>
          </Menu>
        </>
      )}
    />
  );
};

export default GoogleLogOutComponent;

import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "@leecheuk/react-google-login";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

interface ISigninProps {
  setUser: (arg: GoogleLoginResponse | GoogleLoginResponseOffline) => {};
}

const GoogleLogInComponent = (props: ISigninProps) => {
  const { setUser } = props;
  const clientId: string = import.meta.env
    .VITE_REACT_APP_GOOGLE_AUTH_CLIENT_ID!;

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    setUser(response);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <Button
          startIcon={<LoginIcon />}
          onClick={renderProps.onClick}
          sx={{ color: "var(--logo-color)" }}
        >
          Login
        </Button>
      )}
    />
  );
};
export default GoogleLogInComponent;

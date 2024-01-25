import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const OrderStatusComponent = () => {
  let location = useLocation();
  let status = location.state?.status;
  return (
    <div style={{ marginTop: "150px" }}>
      {status ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Your order has been placed successfully.{" "}
          <a href="/">Contine shopping</a>
        </Alert>
      ) : (
        <Alert icon={<CloseIcon fontSize="inherit" />} severity="success">
          No order has been placed.<a href="/">Contine shopping</a>
        </Alert>
      )}
    </div>
  );
};

export default OrderStatusComponent;

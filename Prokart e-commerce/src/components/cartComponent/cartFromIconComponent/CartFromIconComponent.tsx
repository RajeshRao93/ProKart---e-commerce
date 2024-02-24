// @ts-nocheck
import {
  Badge,
  Button,
  CardMedia,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./CartFromIconComponent.css";
import { useNavigate } from "react-router-dom";

const CartFromIconComponent = forwardRef(({}, ref) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [products, setProducts] = useState([]);
  var navigate = useNavigate();
  const open = Boolean(anchorEl);
  var productsInCart = localStorage.getItem("productsInCart");

  useEffect(() => {
    productsInCart ? setProducts(JSON.parse(productsInCart)) : setProducts([]);
  }, [productsInCart]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToBuy = () => {
    handleClose();
    navigate("/buy");
  };

  return (
    <div>
      <button
        style={{ backgroundColor: "transparent", border: "0px" }}
        ref={ref}
        onClick={(e) => handleClick(e)}
      >
        <Badge badgeContent={products.length} color="primary">
          <ShoppingCartOutlinedIcon sx={{ color: "var(--logo-color)" }} />
        </Badge>
      </button>
      <Paper sx={{ maxWidth: "100%" }}>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {products.length > 0 ? (
            products.map((prod, index) => {
              return (
                <div key={index}>
                  <MenuItem onClick={handleClose}>
                    <div className="pk-cartItem">
                      <div className="pk-cartItem-img">
                        <CardMedia
                          component="img"
                          height="50"
                          image={prod.image}
                          alt="prod img"
                          sx={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="pk-cartItem-name">
                        <p>
                          <strong>{`${prod.title.substring(0, 35)}...`}</strong>
                        </p>
                        <p>{`${prod.price}$`}</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              );
            })
          ) : (
            <Typography
              variant="h6"
              sx={{ margin: "10px", textAlign: "center", color: "red" }}
            >
              <ErrorOutlineIcon />
              Cart is empty
            </Typography>
          )}

          {products.length > 0 && (
            <div>
              <Button
                variant="contained"
                sx={{ borderRadius: "0%", marginBottom: "5px" }}
                className="pk-cartBtn"
                disableElevation
                onClick={navigateToBuy}
              >
                Buy now
              </Button>
            </div>
          )}
        </Menu>
      </Paper>
    </div>
  );
});

export default CartFromIconComponent;

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
import "./CartFromIconComponent.css";

const CartFromIconComponent = forwardRef(({}, ref) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [products, setProducts] = useState([]);
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

  const clearCart = () => {
    localStorage.removeItem("productsInCart");
    handleClose();
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
            <Typography variant="body2" sx={{ margin: "10px" }}>
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
              >
                Go to cart
              </Button>

              <Button
                variant="contained"
                sx={{ borderRadius: "0%" }}
                className="pk-cartBtn"
                disableElevation
                onClick={clearCart}
              >
                Clear cart
              </Button>
            </div>
          )}
        </Menu>
      </Paper>
    </div>
  );
});

export default CartFromIconComponent;

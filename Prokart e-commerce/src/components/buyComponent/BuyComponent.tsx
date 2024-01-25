import { useEffect, useState } from "react";
import { Button, CardMedia, Typography } from "@mui/material";
import "./BuyComponent.css";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const BuyComponent = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);

  var totalCost = 0;
  var productsInCart = localStorage.getItem("productsInCart");

  useEffect(() => {
    productsInCart ? setProducts(JSON.parse(productsInCart)) : setProducts([]);
  }, [productsInCart]);

  const onProdClick = (product: any) => {
    navigate("/product", { state: { product: product } });
  };

  const placeOrder = () => {
    localStorage.removeItem("productsInCart");
    navigate("/orderstatus", { state: { status: true } });
  };

  const removeItem = (id: number) => {
    let existingProds = JSON.parse(JSON.stringify(products));
    let updatedProds = existingProds.filter((x) => x.id != id);
    setProducts(updatedProds);
    localStorage.setItem("productsInCart", JSON.stringify(updatedProds));
    window.dispatchEvent(new Event("addedToCart"));
  };

  return (
    <div className="pk-buyContainer">
      <div className="pk-buyItem">
        {products.length > 0 ? (
          products.map((prod, index) => {
            return (
              <div className="pk-itemRow" key={index}>
                <div className="pk-buyItemImg">
                  <CardMedia
                    component="img"
                    height="50"
                    image={prod.image}
                    alt="prod img"
                    sx={{ objectFit: "contain" }}
                    onClick={() => onProdClick(prod)}
                  />
                </div>
                <div className="pk-buyItemName">
                  <p>
                    <strong>{`${prod.title}`}</strong>
                  </p>
                  <p>{`${prod.price} $`}</p>
                </div>
                <div
                  className="pk-itemRemove"
                  onClick={() => removeItem(prod.id)}
                >
                  X
                </div>
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
      </div>
      <div className="pk-totalCostContainer">
        <div className="pk-totalCost">
          <strong>Order Summary (Total {products.length} items)</strong>
          {totalCost > 0 && (
            <p>
              <strong>Delivery by Tomorrow </strong>
            </p>
          )}
          {products.length > 0 &&
            products.map((prod, index) => {
              totalCost += prod.price;
              return (
                <div className="pk-itemCostRow" key={index}>
                  <span className="pk-itemName">
                    {`${prod.title.substring(0, 10)}...`} &nbsp;
                  </span>
                  <span className="pk-itemCost">{`${prod.price} $`}</span>
                </div>
              );
            })}
        </div>
        <div className="pk-itemCostRow">
          <span className="pk-itemName">Total &nbsp;</span>
          <span className="pk-itemCost">{`${totalCost}$`}</span>
        </div>
        {totalCost > 0 && (
          <Button
            variant="contained"
            className="pk-orderBtn"
            sx={{ borderRadius: "0%", marginTop: "20px" }}
            startIcon={<ShoppingCartOutlinedIcon />}
            disableElevation
            onClick={placeOrder}
          >
            Place Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default BuyComponent;

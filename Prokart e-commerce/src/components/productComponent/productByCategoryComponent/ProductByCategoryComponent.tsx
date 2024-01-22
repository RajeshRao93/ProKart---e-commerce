import React, { useEffect, useState } from "react";
import "./ProductByCategiryComponent.css";
import { getAllProductsByCategory } from "../../../actions/productService";
import ProductDisplayComponent from "../productDisplayComponent/ProductDisplayComponent";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ProductByCategoryComponent = (props: any) => {
  const { category } = props;
  const [products, setProducts] = useState([]);
  let location = useLocation();
  let ctgry = props ? category : location.state;

  useEffect(() => {
    getAllProductsByCategory(ctgry)
      .then((res: { json: () => any }) => res.json())
      .then((products: any) => {
        console.log(products);
        setProducts(products);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [ctgry]);

  return (
    <div className="pk-products-category">
      <Typography variant="h5">{ctgry}</Typography>
      <div className="pk-products">
        {products.map((product: any, index: number) => {
          return (
            <ProductDisplayComponent
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductByCategoryComponent;

import React, { useEffect, useState } from "react";
import "./ProductByCategoryComponent.css";
import { getAllProductsByCategory } from "../../../actions/productService";
import ProductDisplayComponent from "../productDisplayComponent/ProductDisplayComponent";
import { Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductByCategoryComponent = () => {
  const [products, setProducts] = useState([]);
  let [searchParams, setSeachParams] = useSearchParams();
  const navigate = useNavigate();
  let paramCategory = searchParams.get("category");
  var category: string | null = paramCategory;

  useEffect(() => {
    if (category) {
      getAllProductsByCategory(category)
        .then((res: { json: () => any }) => res.json())
        .then((products: any) => {
          console.log(products);
          setProducts(products);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
  }, [category]);

  const onProdClick = (product: any) => {
    navigate("/product", { state: { product: product } });
  };

  return (
    <div className="pk-products-category">
      <Typography variant="h5">{category?.toUpperCase()}</Typography>
      <div className="pk-products">
        {products.map((product: any, index: number) => {
          return (
            <ProductDisplayComponent
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating.rate}
              handleClick={() => onProdClick(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductByCategoryComponent;

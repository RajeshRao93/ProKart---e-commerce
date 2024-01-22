import React, { useEffect, useState } from "react";
import "./HomeComponent.css";
import { getAllProducts } from "../../actions/productService";
import Stepper from "../sharedComponents/stepperComponent/StepperComponent";
import ProductDisplayComponent from "../productComponent/productDisplayComponent/ProductDisplayComponent";

const HomeComponent = () => {
  const [products, setProducts] = useState([]);

  const images = [
    {
      label: 1,
      imgPath: "./src/assets/img1.jpg",
    },
    {
      label: 2,
      imgPath: "./src/assets/img2.jpg",
    },
    {
      label: 3,
      imgPath: "./src/assets/img3.jpg",
    },
    {
      label: 4,
      imgPath: "./src/assets/img4.jpg",
    },
    {
      label: 5,
      imgPath: "./src/assets/img5.jpg",
    },
  ];

  useEffect(() => {
    getAllProducts()
      .then((res: { json: () => any }) => res.json())
      .then((products: any) => {
        console.log(products);
        setProducts(products);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pk-home-container">
      <div className="pk-home-stepper">
        <Stepper images={images} />
      </div>
      <div className="pk-home-products">
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

export default HomeComponent;

// {
//   "id":1,
//   "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category":"men's clothing",
//   "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating":{"rate":3.9,"count":120}
// }

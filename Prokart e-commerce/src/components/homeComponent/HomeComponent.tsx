import React, { useEffect, useState } from "react";
import "./HomeComponent.css";
import getAllProducts from "../../actions/productService";
import Stepper from "../sharedComponents/stepperComponent/StepperComponent";

const HomeComponent = () => {
  const [products, setProducts] = useState([]);

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath: "./src/assets/img1.jpg",
    },
    {
      label: "Bird",
      imgPath: "./src/assets/img2.jpg",
    },
    {
      label: "Bali, Indonesia",
      imgPath: "./src/assets/img3.jpg",
    },
    {
      label: "Goč, Serbia",
      imgPath: "./src/assets/img4.jpg",
    },
    {
      label: "Goč, Serbia",
      imgPath: "./src/assets/img5.jpg",
    },
  ];

  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((products: any) => {
        console.log(products);
        setProducts(products);
      })
      .catch((err) => {
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
            <div key={index} className="sk-product-details">
              {product.title}
            </div>
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
//   "category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating":{"rate":3.9,"count":120}
// }

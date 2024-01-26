import { useEffect, useState } from "react";
import "./HomeComponent.css";
import { getAllProducts } from "../../actions/productService";
import Stepper from "../sharedComponents/stepperComponent/StepperComponent";
import ProductDisplayComponent from "../productComponent/productDisplayComponent/ProductDisplayComponent";
import { useNavigate } from "react-router-dom";
import OffersAnimationComponent from "../sharedComponents/offersAnimationComponent/OffersAnimationComponent";

export const images = [
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

const HomeComponent = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((res: { json: () => any }) => res.json())
      .then((products: any) => {
        setProducts(products);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const onProdClick = (product: any) => {
    navigate("/product", { state: { product: product } });
  };

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
              id={product.id}
              rating={product.rating.rate}
              handleClick={() => onProdClick(product)}
            />
          );
        })}
      </div>

      <OffersAnimationComponent />
    </div>
  );
};

export default HomeComponent;

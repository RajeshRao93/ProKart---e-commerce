import "./ProductDescriptionComponent.css";
import { useLocation } from "react-router-dom";
import {
  Button,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Stepper from "../../sharedComponents/stepperComponent/StepperComponent";
import { images } from "../../homeComponent/HomeComponent";
import { useAddToCart } from "../../../customHooks/useAddToCart";

const ProductDescriptionComponent = () => {
  let location = useLocation();
  const { title, price, description, category, image, rating } =
    location.state.product;

  const addToCart = () => {
    useAddToCart(location.state.product);
  };

  return (
    <>
      <div className="pk-prod-desc-container">
        <div className="pk-prod-pic">
          <CardMedia
            component="img"
            height="350"
            image={image}
            alt="prod img"
            sx={{ objectFit: "contain" }}
          />
        </div>
        <div className="pk-prod-desc">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom component="div" variant="body2">
              {description}
            </Typography>
            <Typography variant="h5">{price} $</Typography>

            <Rating
              name="read-only"
              value={rating.rate}
              readOnly
              sx={{ marginRight: "20px" }}
            />
            <Typography variant="body2">({rating.count} Ratings)</Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "var(--logo-color)", margin: "25px" }}
              onClick={addToCart}
            >
              Add to cart
            </Button>
            <p>
              <span>
                <DoneIcon /> COD Available
              </span>
              <span style={{ margin: "10px" }}>
                <DoneIcon /> Free Shipping
              </span>
            </p>
            <span>
              <DoneIcon /> Delievered inn 2-5 Business Days
            </span>
          </CardContent>
        </div>
      </div>

      <Stepper images={images} />
    </>
  );
};

export default ProductDescriptionComponent;

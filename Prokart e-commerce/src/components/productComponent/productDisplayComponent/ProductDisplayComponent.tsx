import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Rating } from "@mui/material";

export interface IProdDisplayProps {
  id?: number;
  title: string;
  price: string;
  description?: string;
  category?: string;
  image?: string;
  rating: number;
}

const ProductDisplayComponent = (props: IProdDisplayProps) => {
  const { id, title, price, description, category, image, rating } = props;
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "15px",
        padding: "10px",
        boxShadow: "0px 0px 0px 0px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt="prod img"
          sx={{ objectFit: "contain" }}
        />
        <CardContent sx={{ height: "100px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}$
          </Typography>
          <div style={{ display: "inline-block" }}>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              sx={{ marginRight: "20px" }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "var(--logo-color)" }}
            >
              Add to cart
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductDisplayComponent;

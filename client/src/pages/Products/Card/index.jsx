import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({ img, name, price, description, id }) {
  return (
    <Card sx={{ Width: 345, height: 400 }}>
      <CardMedia
        sx={{ height: 200, width: "100%" }}
        image={import.meta.env.VITE_BASE_URL + img[0]}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description?.split(" ").slice(0, 10).join(" ")}...
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
        price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/product-details/${id}/${name.replaceAll(" ", "-")}`}>
            More Ditales
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

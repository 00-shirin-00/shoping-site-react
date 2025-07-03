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
    <Card
      sx={{
        width: 345,
        height: 450,
        borderRadius: 3,
        padding: 2,
        border: "3px solid #bc6c25",
        bgcolor: "#f4f1de",
      }}
    >
      {/* --- card img --- */}
      <CardMedia
        sx={{ height: "50%", width: "100%" ,borderRadius: 3,border: "3px solid #bc6c25"}}
        image={import.meta.env.VITE_BASE_URL + img[0]}
        title={name}
      />
      {/* --- card content --- */}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description?.split(" ").slice(0, 10).join(" ")}...
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" ,marginTop: 1,borderTop: "1px solid #bc6c25",paddingTop: 1}}>
          price: ${price}
        </Typography>
      </CardContent>
      {/* --- card actions --- */}
      <CardActions>
        <Button size="small" sx={{ color: "#bc6c25", fontWeight: "bold",border: "2px solid #bc6c25",borderRadius: 3 }}>
          <Link to={`/product-details/${id}/${name.replaceAll(" ", "-")}`}>
            More Ditales
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

//mui>>
import { Box } from "@mui/material";
//react>>
import React from "react";
import { Link } from "react-router-dom";
//=============================================================
export default function Card({ image, title, id }) {
  return (
    <Box
      sx={{
        width: "300px",
        height: "300px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 0 10px 8px rgba(0, 0, 0, 0.2)",
        "&>img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 1s ease-in-out",
        },
        "&:hover>img": {
          transform: "scale(1.1)",
          transition: "transform 1s ease-in-out",
          filter: "blur(3px) grayscale(80%)",
        },
        "&>a": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          padding: "10px 20px",
          fontSize: "34px",
          fontWeight: "bold",
          opacity: 0,
          visibility: "hidden",
          textShadow: "2px 2px 8px white",
          boxShadow: "inset 0 0 20px 15px rgb(162, 162, 162)",

          borderRadius: "20px",
        },
        "&:hover>a": {
          transition: "transform 1s ease-in-out",
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <img src={import.meta.env.VITE_BASE_URL + image[0]} alt={title} />
      <Link to={`/products/${id}/${title.replaceAll(" ", "-")}`}>{title}</Link>
    </Box>
  );
}

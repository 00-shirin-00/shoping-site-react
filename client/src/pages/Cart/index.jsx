import React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

//redux actions
import { useDispatch, useSelector } from "react-redux";
import { add, clear, remove } from "../../Store/Slice/CartSlice";
//========================================
export default function Cart() {
  // seletor
  const { items, totalPrice } = useSelector((state) => state.cart);

  //redux actions
  const dispatch = useDispatch(); //use dispatch to send action to redux

  const rowItems = items.map((item, index) => {
    return (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{index+1}</TableCell>
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">
          <img
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
            src={import.meta.env.VITE_BASE_URL + item.images[0]}
            alt=""
          />
        </TableCell>
        <TableCell align="center">${item.price}</TableCell>
        <TableCell align="center">{item.cartQuantity}</TableCell>
        <TableCell align="center">{item.price * item.cartQuantity}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            onClick={() => dispatch(remove(item._id))}
          >
            -
          </Button>
          <Button variant="outlined" onClick={() => dispatch(add(item))}>
            +
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <>
      {items.length > 0 ? (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ Width: "90%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rowItems}</TableBody>

              {/* table footer >>  */}
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  Total Price
                </TableCell>
                <TableCell align="center">${totalPrice}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(clear())}
          >
         npm
            clear cart
          </Button>
        </Box>
      ) : (
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          Your cart is empty
        </Typography>
      )}
    </>
  );
}

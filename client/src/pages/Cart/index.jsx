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
        sx={
          {
            // width: "100%",
            // height: "100px",
            // borderBottom: "1px solid #ccc",
            // "td": { border: 1},
          }
        }
        // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">
          <img
            style={{
              width: "50px",
              height: "50px",
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
        <Box
          sx={{
            width: "100%",
            // minHeight: "100vh",
            border: "1px solid #ccc",
            padding: "20px",
            marginTop: { xs: 6, sm: 7, md: 9 },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            gap: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              color: "#e9c46a",
              fontWeight: "bold",
            }}
          >
            Your Cart
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              maxWidth: "1000px",
              margin: "0 auto",
              bgcolor: "#3f9288",
              overflowX: "auto",
            }}
          >
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead sx={{ bgcolor: "#e9c46a", width: "100%" }}>
                <TableRow sx={{ width: "100%" }}>
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
                {/* <TableCell align="center"></TableCell> */}
              </TableRow>
            </Table>
          </TableContainer>

          {/* --- clear btn --- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#e76f51",
            }}
            onClick={() => dispatch(clear())}
          >
            clear cart
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: { xs: 6, sm: 8, md: 9 },
            width: "100%",
            minHeight: "50vh",
            bgcolor: "#3f9288",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h2" sx={{ color: "white" }}>
            Your cart is empty
          </Typography>
        </Box>
      )}
    </>
  );
}

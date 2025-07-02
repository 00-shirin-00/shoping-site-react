import React, { useState } from "react";

//mui
//css
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

//router
import { Link } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//Store
import { logout } from "../../Store/Slice/AuthSlice";

// ================================================================
export default function Navbar() {
  //selectors
  const { token } = useSelector((state) => state.auth);
  const cartQuantoty = useSelector((state) => state.cart.items).length;

  //dispatch
  const dispatch = useDispatch();

  //menu items hamburger 
  const pages = ["Home", "products", "category"];

  //states
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    // console.log(event.currentTarget);
  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
// ===========================================================
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#a5a58d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6" // استایل
            noWrap
            component="a" //کامپوننت نهایی
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-Commerce
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            E-Commerce
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },border: "1px solid red" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"/"} style={{ color: "red" }}>
                Home
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to={"/products/all/all-category"}
                style={{ color: "white" }}
              >
                Products
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"/category"} style={{ color: "white" }}>
                Category
              </Link>
            </Button>

            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"/about"} style={{ color: "white" }}>
                About
              </Link>
            </Button> */}

            
            {/* --- auth ---- */}
            {!token ? (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={"/auth"} style={{ color: "white" }}>
                  Login/Register
                </Link>
              </Button>
            ) : (
              <Button
                onClick={() => dispatch(logout())}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography component={"a"} style={{ color: "white" }}>
                  Logout
                </Typography>
              </Button>
            )}
          </Box>

          {/* --- cart icon --- */}
          <Box>
            <Link to={"/cart"}>
              <Badge color="secondary" badgeContent={cartQuantoty}>
                <ShoppingCartIcon sx={{ color: "white !important" }} />
              </Badge>
            </Link>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

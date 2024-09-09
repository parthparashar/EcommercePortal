import { AppBar, Divider, Stack, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  // Mock username, replace with actual user state if available
  const userName = "Parth";

  // Fetch the cart items from Redux store
  const cartItems = useSelector(state => state.cart.items); // Assume 'cart.items' is the structure

  // Handle navigation to cart page
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <AppBar
        sx={{
          width: "100vw",
          overflow: "visible",
          transition: "left 500ms",
          py: 0,
          boxShadow: "rgba(100,100,100,0.1) 0px 16px 20px",
          backgroundColor: "background.paper"
        }}>
        <Toolbar
          disableGutters
          sx={{
            height: "68px !important",
            minHeight: "68px !important",
            maxHeight: "68px !important",
            overflow: "hidden",
            left: 0,
            alignItems: "center",
            backgroundColor: "background.paper",
          }}>
          <Stack direction="row" flex={1} height="30px" minHeight="30px" px={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" color="black" flex={1} spacing={2} mx={1}>
              <Typography variant="subtitle1" sx={{ pl: 3, fontFamily: "Nunito" }}>
                Welcome, <strong>{userName}</strong>
              </Typography>

              <Stack direction="row" alignItems="center" gap={2} divider={<Divider flexItem orientation="vertical" sx={{ borderColor: "grey.600" }} />}>
                {/* Cart Icon */}
                <IconButton color="inherit" onClick={handleCartClick}>
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

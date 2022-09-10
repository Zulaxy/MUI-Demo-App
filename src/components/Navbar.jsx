import { styled } from "@mui/material/styles";
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import Computer from "@mui/icons-material/Computer";
import Mail from "@mui/icons-material/Email";
import Notifications from "@mui/icons-material/Notifications";
import { borderRadius } from "@mui/system";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Galio
        </Typography>
        <Computer
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Searchbar>
          <InputBase placeholder="Search here" />
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg"
            onClick={(e) => setMenuOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setMenuOpen(true)}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg"
          />
          <Typography variant="span">Jane</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

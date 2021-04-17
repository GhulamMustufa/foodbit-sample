import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  return (
    <AppBar position="relative" color="default">
      <Toolbar>
      <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Foodbit
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

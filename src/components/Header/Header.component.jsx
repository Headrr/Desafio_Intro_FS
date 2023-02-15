import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="sticky" style={{ background: "#312F37" }}>
      <Toolbar
        variant="dense"
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#9bcc50",
        }}
      >
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{ padding: 5, marginTop: 5 }}
        >
          <h3>Top Pokemon's</h3>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

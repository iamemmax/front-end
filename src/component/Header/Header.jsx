import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Homepage/Banner";
import "./styles/header.scss";

function Header() {
  return (
    <>
      <div>
        <Container>
          <AppBar>
            <Toolbar>
              <div className="navbar">
                <div className="logo">
                  <Typography variant="h6" component="h2" color="inherit">
                    <Link to="/">MyTestApp</Link>
                  </Typography>
                </div>
              </div>
            </Toolbar>
          </AppBar>

          <Toolbar />
          <Toolbar />
        </Container>
      </div>

      <Banner />
    </>
  );
}

export default Header;

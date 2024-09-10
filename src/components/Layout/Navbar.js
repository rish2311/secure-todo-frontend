import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  // Check if email exists in localStorage to determine login status
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username"); // Assuming username is also stored
  const isLoggedIn = !!email; // Convert the existence of email to a boolean

  // Logout function: removes email and username from localStorage
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    window.location.reload(); // Reload to reflect the logout
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Secure To-Do List
        </Typography>
        {isLoggedIn ? (
          <>
            <Typography sx={{ mr: 2 }}>Welcome, {username}</Typography>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

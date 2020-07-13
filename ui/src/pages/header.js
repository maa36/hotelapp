import React  ,{Component} from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import './pages.css'
import {
    
    Link
 
  } from "react-router-dom";
  class Header extends Component {
    render() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="title ">
          Hotel
        </Typography>
        <Typography >
          <Link to="/">
            Home
          </Link>
          <Link to="/reservation">
            Reservation
          </Link>
          <Link to="/historique">
            Historique
          </Link>
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
  }

export default Header;

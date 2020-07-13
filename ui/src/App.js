import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,

  Redirect
} from "react-router-dom";
import Home from "./pages/home";
// import Header from "./pages/header";
import Historique from "./pages/historique";
import Reservation from "./pages/reservation";


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            {/* <Header /> */}
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Home} />
       <Route exact path="/reservation" component={Reservation} />
       <Route  exact path="/historique" component={Historique} />
       </Switch>
      </Router>
    );
  }
}

export default App;
import React, { Component } from "react";

import Header from "./header";
import "./pages.css";

//Functional Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalDetail: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:5000/detailshotel")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            globalDetail: result,
          });
        },
        (err) => {
          console.log("err");
        }
      );
  };
  render() {
 
    return (
      <div>
        <Header />

        <div className="structure-hotel">
          {this.state.globalDetail.map((p, i) => (
            <div key={i}>
              <h1>  Bienvenue à l'hotel :   {p.name}</h1>
              <h5>L'hotel contient {p.numberRooms} chambres</h5>
              <h5>
                La capacité d'accueil est {p.maxOfRoom} personnes par chambre
              </h5>
            </div>
          ))}
        </div>
        <div className="structure-ages">
        <div>
         <h3>Tranche d'age </h3>
         <div className="structure-ages">

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col-3">Enfants</th>
                <th scope="col-3">Adultes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >moins que 15 ans</td>
                <td> 15 ans ou plus</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

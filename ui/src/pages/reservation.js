import React, { Component } from "react";
import Header from "./header";
import TextField from "@material-ui/core/TextField";
import axios from "axios"
import Button from "@material-ui/core/Button";
import "./pages.css";

class Resrvation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalDetail: [],
      ages: "",
      NumbreAdultes: 0,
    };
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
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
  AddReservation = (e) => {
    e.preventDefault();

    var array = this.state.ages.split(";");
    const ArrayAges = [];
    const maxChambre = 3;
    var nombreTotalChambres = 0;
    let NombreAdulte = 0;
    for (var i = 0; i < array.length; i++) {
      ArrayAges[i] = parseInt(array[i]);
    }

    for (var j = 0; j < ArrayAges.length; j++) {
      if (ArrayAges[j] >= 15) {
        NombreAdulte = NombreAdulte + 1;
      }
    }
    let n = ArrayAges.length;
    if (NombreAdulte >= n / maxChambre) {
      if (parseInt(n / maxChambre) == n / maxChambre) {
        nombreTotalChambres = n / maxChambre;
       
      } else {
        nombreTotalChambres = parseInt(n / maxChambre) + 1;
        
      }
      const sortDesc = (a, b) => b - a;
      var ArrayAgesTrie = ArrayAges.sort(sortDesc);
      var ArrayChambres = []
      for (var i = 0; i < nombreTotalChambres; i++) {
        ArrayChambres[i] = [];
      }
      for (var j = 0; j < nombreTotalChambres ; j++) {
        var s = 0
        for (var k = 0;  k < maxChambre; k++) {
          if ((s+j)<ArrayAgesTrie.length) {
            ArrayChambres[j][k] = ArrayAgesTrie[s+j];
             s = s + nombreTotalChambres
          }
          
        }
        
      }
      
      console.log(new Date());
      console.log(ArrayChambres);
      axios
        .post("http://localhost:5000/reservation", {
          ReservedRooms: ArrayChambres,
          dateToReservation:  new Date(),
         
         
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      
        alert("Réservation effectuée!");

    } else {
      alert("Impossible de réserver, le nombre d'adultes est insuffisant!");
    }

  
  };

  render() {
    return (
      <div>
        <Header />
        <form className="formReservation" onSubmit={this.AddReservation}>
          <h3>Entrez la liste d'ages  </h3>
          <TextField
            id="ages"
            label="Example : age1;age2;age3"
            value={this.state.ages}
            onChange={this.handleChange("ages")}
          />

          <Button
            type="submit"
            style={{ background: "#0288d1" }}
            variant="raised"
            color="secondry"
          >
            Reservation
          </Button>
        </form>
      </div>
    );
  }
}

export default Resrvation;

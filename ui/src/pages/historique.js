import React , {Component} from "react";
import Header from './header'

//Functional Component 
class Historique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalDetail: [],
     
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:5000/les-reservations")
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
    
      let nombreAultes = []; 
      let nombreEnfants = []; 
      const items = [] ;
      for (const reservation   of this.state.globalDetail) {
   

      items.push(<h2>reservation </h2>) 
      const dateResrvation = new Date(reservation.dateToReservation)
      items.push(<h5>{dateResrvation.toString()}  </h5>)   

      for (const room   of reservation.ReservedRooms) {
        let adultes = 0 ;
        let enfants = 0 ;
        for (const age   of room) {    
          if(age >= 15){
            adultes += 1
          }
          else {
            enfants += 1
          }
          }
       items.push(<h5> chambre { reservation.ReservedRooms.indexOf(room) + 1} : {adultes} adultes et {enfants} enfants </h5>)

     }
      
    }

  return (
    
    <div>
        <Header />
        
        <div className="structure-hotel">
         
            {items} 
              
          
           
        </div>
   
    </div>
  );
};
}
export default Historique;
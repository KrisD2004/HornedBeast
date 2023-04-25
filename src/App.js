import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './main';
import Footer from './footer';
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Selectedbeasts from './selectedbeasts';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import HornedBeast from './Horned';
import HornedBeastArray from './data.json';


// the first state variable "DisplayselectedBeasts" is initialized with the initial value of "false". This variable is used to control whether the "Selectedbeasts" component should be displayed or not. The second state variable "currentSelectedBeasts" is initialized with the initial value of "undefined". This variable is used to store the currently selected beast, which is passed to the "Selectedbeasts" component as a prop.
function App() {

  const [DisplayselectedBeasts, setDisplayselectedBeasts] = useState(false)
  const [currentSelectedBeasts, setCurrentSeclectedBeasts] = useState(undefined)
  
  // let selectedbeastshtml = <Selectedbeasts beast={currentSelectedBeasts}/>

  let selectedbeastshtml = <Selectedbeasts beast={currentSelectedBeasts} displayBeast= {DisplayselectedBeasts} updateFunction={setDisplayselectedBeasts} />
  if(DisplayselectedBeasts === false){
    selectedbeastshtml = <div></div>
  } 


  return (
    <div>
      <Header/>

      <Main updateFunction={setDisplayselectedBeasts} data={data} beastupdatefunction={setCurrentSeclectedBeasts} displayBeast= {DisplayselectedBeasts} />

      {selectedbeastshtml}
      {/* <Button onClick={() => {
        if(DisplayselectedBeasts === true){
          setDisplayselectedBeasts(false)
        }else{
          setDisplayselectedBeasts(true)
        }
      }}>Display Beast</Button> */}
      <Footer/>
      
      
    </div>
  );
}
// My code sets up the initial state of the application, creates a "Selectedbeasts" component that is initially hidden, and sets up the "Header", "Main", and "Footer" components. The "Main" component is passed various props that allow it to update the state of the "Selectedbeasts" component and display information about the currently selected beast.



export default App;

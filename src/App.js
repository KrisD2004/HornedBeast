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



export default App;

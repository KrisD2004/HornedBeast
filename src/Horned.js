import './App.css';
import { useState } from 'react';
import { Card, Button} from 'react-bootstrap';

//object and this is how pictures will be rendered on the page
function HornedBeast(props) {
    //setting times clicked
    // UseState is a built in function that keeps up and update the state
    const [timesClick, timesClicked] = useState(0)

    function state(){
        timesClicked(timesClick + 1);
       
    }
    
    return (
        // added card and button bootstrap features
        <Card style= {{width: '15rem'}}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} class = 'mw-100' height={'200px'}></img>
            {/* <p>{timesClick}</p> */}

            <Button onClick={state}>Like</Button>
            <p>&#9829;{timesClick}</p>
            {/* added heart feature */}
            
            

        </Card>
        

        
    )
}

export default HornedBeast
import { useState } from 'react';
import './App.css';
import HornedBeast from './Horned';
import HornedBeastArray from './data.json';
import { Modal } from 'react-bootstrap';
import {FormSelect} from 'react-bootstrap';

// fucntion to put the content of the page
//shortend way to display images
// this code is creating a page that displays a collection of "Horned Beasts" using the "HornedBeast" component and data stored in the "HornedBeastArray" array.

//Within the div element, the code uses the "map" function to iterate over each item in the "HornedBeastArray" array. For each item, it creates a new "HornedBeast" component with various props including a unique "key" value, the "title", "description", "image", "timesClick", "updateFunction", "Beastsupdatefunction", and "displayBeast".
function Main(props) {
    const [FilterHorns, setFilterHorns] = useState('')

    //The filteredBeasts variable is created by using the filter method on the HornedBeastArray array to only include objects that have the same number of horns as the value of FilterHorns. If FilterHorns is an empty string, all objects in the array are included.
    let filteredBeasts = HornedBeastArray.filter(beasts => {
        if (FilterHorns === ''){
            return true
        } else if (beasts.horns === parseInt(FilterHorns)){
            return true;
        }else {
            return false
        }
    })




    return (

        <div className="d-flex justify-content-between flex-wrap">
            <div className='container'>
            <FormSelect onChange={(e)=> setFilterHorns(e.target.value)}  aria-label="Default select example">
                <option value=''>All</option>
                <option value="1">1 horn</option>
                <option value="2">2 horns</option>
                <option value="3">3 horns </option>
                <option value="100">100 horns </option>
            </FormSelect>
            </div>
            {/* The map method is used to iterate over the filteredBeasts array and create a HornedBeast component for each object in the array. The various props for the HornedBeast component are set using the properties of each object in the array.  */}
            {filteredBeasts.map((Beast, index) => (
                <HornedBeast
                    key={index}
                    title={Beast.title}
                    description={Beast.description}
                    image={Beast.image_url}
                    timesClick={0}
                    updateFunction={props.updateFunction}
                    Beastsupdatefunction={props.beastupdatefunction}
                    displayBeast={Beast}

                />

            ))}

        </div>

    );



}

export default Main
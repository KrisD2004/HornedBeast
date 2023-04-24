import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HornedBeast from "./Horned";

// Using a modal for When you click on the image it should pop up. 
function Selectedbeasts(props) {
    const [show, setShow] = useState(true);

    //everytime i click on an image an model(image,description,and name ) pops up
    //change this into its own function so i can be able to click on any picture to get a model.
    function handleClose() {
        setShow(false);
        props.updateFunction(false);
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.beast.title}</Modal.Title>
                </Modal.Header>
                <img src={props.beast.image_url}></img>
                <Modal.Body>{props.beast.description}</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}







export default Selectedbeasts
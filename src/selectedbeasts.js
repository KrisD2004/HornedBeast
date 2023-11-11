import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HornedBeast from "./Horned";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Form } from "react-bootstrap";

// Using a modal for When you click on the image it should pop up. 
function Selectedbeasts(props) {
    const [show, setShow] = useState(true);

    // Define the `handleClose` function that sets the `show` state to `false` and calls the `updateFunction` prop to update the parent component's state

    function handleClose() {
        setShow(false);
        props.updateFunction(false);
    }

    // Define the `handleShow` function that sets the `show` state to `true`
    const handleShow = () => setShow(true);
    // render the modal component with seleceted beasts image, title, and the description
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
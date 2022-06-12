import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
//https://reactdatepicker.com/#example-filter-times
//https://react-bootstrap.github.io/components/cards/
//https://getbootstrap.com/docs/5.1/content/tables/
//https://react-icons.github.io/react-icons/icons?name=fa
//https://github.com/JedWatson/react-select
//https://mhnpd.github.io/react-loader-spinner/
//https://github.com/binodswain/react-overlay-component

const DialogModal = (props) => {
    const {onHide, children} = props

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="button" onClick={onHide}>Cancel</Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

DialogModal.propTypes = {
};

export default DialogModal;

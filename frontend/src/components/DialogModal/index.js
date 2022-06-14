import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

const DialogModal = (props) => {
    const {
        children,
        title,
        primarybuttontext,
        onPrimaryButtonHandler,
        secondbuttontext,
        onSecondButtonButtonHandler,
    } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {secondbuttontext && <Button variant="button" onClick={onSecondButtonButtonHandler}>{secondbuttontext}</Button>}
                {primarybuttontext && <Button variant="primary" onClick={onPrimaryButtonHandler}>{primarybuttontext}</Button>}
            </Modal.Footer>
        </Modal>
    );
}

DialogModal.propTypes = {
};

export default DialogModal;

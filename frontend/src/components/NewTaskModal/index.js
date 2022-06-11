import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const NewTaskModal = (props) => {
    const {onHide} = props
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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Direccion" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select menu</Form.Label>
                        <Form.Select>
                            <option>Select1</option>
                            <option>Select2</option>
                            <option>Select3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
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

NewTaskModal.propTypes = {
};

export default NewTaskModal;

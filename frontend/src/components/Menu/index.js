import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Menu = (props) => {

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/prueba1">Prueba1</Nav.Link>
                    <Nav.Link href="/prueba2">Prueba2</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

Menu.propTypes = {
};

export default Menu;
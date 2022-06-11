import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Menu = (props) => {
    const {onCreate} = props
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="justify-content-md-right">
                    <Nav.Link onClick={onCreate}>Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

Menu.propTypes = {
};

export default Menu;
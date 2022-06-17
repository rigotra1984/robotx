import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const Menu = (props) => {
    const {onCreate} = props
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Alert Loads</Navbar.Brand>
                <Nav className="justify-content-md-right">
                    <Nav.Link onClick={onCreate} className={"svg-wrapper"}><FaPlus/> Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

Menu.propTypes = {
};

export default Menu;
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Menu from "../../components/Menu";
import Task from "../../components/Task";

const Home = (props) => {

    const list = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
    ];

    return (
        <Row className="justify-content-md-center">
            {list.map((variant) => (
                <Col md="auto">
                    <Task />
                </Col>
            ))}
        </Row>
    );
};

Home.propTypes = {
};

export default Home;
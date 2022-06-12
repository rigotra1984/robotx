import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Task from '../Task';

const ListTask = (props) => {
    const {data} = props
    return (
        <Row className="justify-content-md-center">
            {data.map((item) => (
                <Col sm={6} lg={4}>
                    <Task item={item}/>
                </Col>
            ))}
        </Row>
    );
}

ListTask.propTypes = {
};

export default ListTask;
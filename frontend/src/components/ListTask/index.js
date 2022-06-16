import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Task from '../Task';

const ListTask = (props) => {
    const {data} = props

    const renderItem = (item) => {
        return (
            <Col sm={6} lg={4} key={item.id}>
                <Task item={item}/>
            </Col>
        );
    };

    const listEmptyComponent = () => {
        console.log('listEmptyComponent');
        return (
            <Row className="justify-content-md-center">
                <Col>
                    <div style={{color: 'white', textAlign:'center'}}>No hay elementos que mostrar</div>
                </Col>
            </Row>
        );
    };

    return (
        <Row className="justify-content-md-center">
            {data.length === 0 && listEmptyComponent()}
            {data.length > 0 && data.map((item) => (
                renderItem(item)
            ))}
        </Row>
    );
}

ListTask.propTypes = {
};

export default ListTask;
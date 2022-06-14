import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Task from '../Task';

const ListTask = (props) => {
    const {data, persons} = props

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
            <div style={{color:'yelow'}}>No hay elementos que mostrar</div>
        );
    };

    return (
        <Row className="justify-content-md-center">
            {/*{persons.length === 0 && listEmptyComponent()}*/}
            {data.map((item) => (
                renderItem(item)
            ))}
        </Row>
    );
}

ListTask.propTypes = {
};

export default ListTask;
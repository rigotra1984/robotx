import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Task from '../Task';

const ListTask = (props) => {
    const {
        data,
        onUpdateItem,
        onDeleteItem,
    } = props

    const renderItem = (item) => {
        return (
            <Col sm={6} lg={4} key={item.id}>
                <Task item={item} onUpdateItem={onUpdateItem} onDeleteItem={onDeleteItem}/>
            </Col>
        );
    };

    const listEmptyComponent = () => {
        return (
            <Row className="justify-content-md-center">
                <Col>
                    <div style={{color: 'white', textAlign:'center'}}>No exist elements to show</div>
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
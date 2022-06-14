import React from 'react';
import {Card, Button, Table, Row} from 'react-bootstrap';
import {FaRegClock, FaHourglassEnd, FaCheck} from 'react-icons/fa';

const Task = (props) => {
    const {item} = props;

    const variant = () => {
        if(item.status === 'inactive') {
            return 'dark';
        } else if(item.status === 'programmed') {
            return 'warning';
        } else {
            return 'light'
        }
    };

    const icon = () => {
        if(item.status === 'inactive') {
            return <FaHourglassEnd/>;
        } else if(item.status === 'programmed') {
            return <FaRegClock/>;
        } else {
            return <FaCheck/>
        }
    };

    const colorTable = () => {
        return variant() === 'warning'? "table-borderless colorfy": "table-borderless";
    };

    return (
        <Card className="mb-3" bg={variant()} text={variant() === 'light' ? 'dark' : 'white'}>
            <Card.Header className={"svg-wrapper"}>{icon()} Detalles de Filtro</Card.Header>
            <Card.Body>
                <Table className={colorTable()} variant={variant() === 'dark' ? 'dark' : null} >
                    <tbody>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    <tr>
                        <th scope="row">Nombre campo1</th>
                        <td>Valor</td>
                    </tr>
                    </tbody>
                </Table>
                <Row>
                    <Button variant="primary"> Editar</Button>
                </Row>
                <Row style={{marginTop: '5px'}}>
                    <Button variant="danger"> Eliminar</Button>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}

Task.propTypes = {
};

export default Task;
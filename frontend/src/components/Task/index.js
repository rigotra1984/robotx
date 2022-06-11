import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';

const Task = (props) => {

    return (
        <Card className="mb-3">
            <Card.Header>Detalles de Filtro</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Table className={"table-borderless"}>
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
                </Card.Text>
                <Button variant="primary">Boton1</Button>
                <Button variant="danger">Eliminar</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}

Task.propTypes = {
};

export default Task;
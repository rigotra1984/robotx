import React from 'react';
import {Card, Button, Table, Row} from 'react-bootstrap';
import {FaRegClock, FaHourglassEnd, FaCheck} from 'react-icons/fa';
import moment from 'moment';

const Task = (props) => {
    const {
        item,
        onUpdateItem,
        onDeleteItem,
    } = props;

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

    const advancedIsOpen = () => {
        if(item.advancedDisplayPreference) {
            return true;
        }
        if(item.advancedPickupStart && item.advancedPickupEnd) {
            return true;
        }
        if(item.advancedPickupStartTime && item.advancedPickupEndTime) {
            return true;
        }
        if(item.advancedDeliveryStart && item.advancedDeliveryEnd) {
            return true;
        }
        if(item.advancedDeliveryStartTime) {
            return true;
        }
        if(item.advancedDeliveryEndTime) {
            return true;
        }
        if(item.advancedEquipmentMaxLength) {
            return true;
        }
        if(item.advancedEquipmentMaxWeigth) {
            return true;
        }
        if(item.advancedAttributes && item.advancedAttributes.length > 0) {
            return true;
        }

        return false;
    };

    return (
        <Card className="mb-3" bg={variant()} text={variant() === 'light' ? 'dark' : 'white'}>
            <Card.Header className={"svg-wrapper"}>{icon()} Load Filter Details</Card.Header>
            <Card.Body>
                <Table className={colorTable()} variant={variant() === 'dark' ? 'dark' : null} >
                    <tbody>
                    {item.originValues && <tr>
                        <th scope="row">Origin</th>
                        <td>{item.originValues} ({item.originRadius})</td>
                    </tr>}

                    {item.destinationValues && <tr>
                        <th scope="row">Destination</th>
                        <td>{item.destinationValues} ({item.destinationRadius})</td>
                    </tr>}

                    {item.pickupStart && item.pickupEnd && <tr>
                        <th scope="row">Pickup</th>
                        <td>{moment(item.pickupStart).format("MMM D, YY")} - {moment(item.pickupEnd).format("MMM D, YY")}</td>
                    </tr>}

                    {item.equipmentType && item.equipmentType.length > 0 && <tr>
                        <th scope="row">Equipment Type</th>
                        <td>{item.equipmentType.map((e, index) => (
                            index === 0? `${e}`: `, ${e}`
                        ))}</td>
                    </tr>}

                    {item.loadNumber && <tr>
                        <th scope="row">Load Number</th>
                        <td>{item.loadNumber}</td>
                    </tr>}
                    </tbody>
                </Table>

                {advancedIsOpen() && <>
                    <hr/>
                    <Table className={colorTable()} variant={variant() === 'dark' ? 'dark' : null} >
                        <tbody>
                        {item.advancedDisplayPreference && <tr>
                            <th scope="row">Display Preference</th>
                            <td>{item.advancedDisplayPreference}</td>
                        </tr>}

                        {item.advancedPickupStart && item.advancedPickupEnd && <tr>
                            <th scope="row">Pickup</th>
                            <td>{moment(item.advancedPickupStart).format("MMM D, YY")} {moment(item.advancedPickupStartTime).format("h:mm A")} - {moment(item.advancedPickupEnd).format("MMM D, YY")} {moment(item.advancedPickupEndTime).format("h:mm A")}</td>
                        </tr>}

                        {item.advancedDeliveryStart && item.advancedDeliveryEnd && <tr>
                            <th scope="row">Delivery</th>
                            <td>{moment(item.advancedDeliveryStart).format("MMM D, YY")} {moment(item.advancedDeliveryStartTime).format("h:mm A")} - {moment(item.advancedDeliveryEnd).format("MMM D, YY")} {moment(item.advancedDeliveryEndTime).format("h:mm A")}</td>
                        </tr>}

                        {item.advancedEquipmentMaxLength && <tr>
                            <th scope="row">Equipment Max Length</th>
                            <td>{item.advancedEquipmentMaxLength}</td>
                        </tr>}

                        {item.advancedEquipmentMaxWeigth && <tr>
                            <th scope="row">Equipment Max Weigth</th>
                            <td>{item.advancedEquipmentMaxWeigth}</td>
                        </tr>}

                        {item.advancedAttributes && <tr>
                            <th scope="row">Attributes</th>
                            <td>{item.advancedAttributes.map((e, index) => (
                                index === 0? `${e}`: `, ${e}`
                            ))}</td>
                        </tr>}
                        </tbody>
                    </Table>
                </>}

                <Row>
                    <Button variant="primary" onClick={() =>{onUpdateItem(item)}}> Update</Button>
                </Row>
                <Row style={{marginTop: '5px'}}>
                    <Button variant="danger" onClick={() =>{onDeleteItem(item)}}> Delete</Button>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">{moment(item.created).fromNow()}</Card.Footer>
        </Card>
    );
}

Task.propTypes = {
};

export default Task;
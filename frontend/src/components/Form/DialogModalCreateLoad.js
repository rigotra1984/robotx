import React, {useEffect, useState} from 'react';
import {Modal, Button, Row, Col, Form, FormControl, Accordion} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import Select from "react-select";

const DialogModalCreateLoad = (props) => {
    const {
        title,
        primarybuttontext,
        onPrimaryButtonHandler,
        secondbuttontext,
        onSecondButtonButtonHandler,
        item,
    } = props;

    const equipmentTypeOptions = [
        { value: 'Van', label: 'Van' },
        { value: 'Reefer', label: 'Reefer' },
        { value: 'Open Deck', label: 'Open Deck' },
        { value: 'Container', label: 'Container' },
        { value: 'Power Only', label: 'Power Only' },
    ];

    //object
    // const [originValues, setOriginValues] = useState(item.originValues? item.originValues: '');
    // const [originRadius, setOriginRadius] = useState(item.originRadius? item.originRadius: '');
    // const [destinationValues, setDestinationValues] = useState(item.destinationValues? item.destinationValues: '');
    // const [destinationRadius, setDestinationRadius] = useState(item.destinationRadius? item.destinationRadius: '');
    // const [pickupDateRange, setPickupDateRange] = useState([item.pickupStart? new Date(item.pickupStart): null, item.pickupStart? new Date(item.pickupEnd): null]);
    // const [pickupStartDate, pickupEndDate] = pickupDateRange;
    // const [selectedEquipmentType, setSelectedEquipmentType] = useState(item.equipmentType && item.equipmentType.length > 0? equipmentTypeOptions.filter((e) => item.equipmentType.indexOf(e.value) >= 0): []);
    // const [loadNumber, setLoadNumber] = useState(item.loadNumber? item.loadNumber: '');
    // const [advancedDisplayPreference, setAdvancedDisplayPreference] = useState(item.advancedDisplayPreference? item.advancedDisplayPreference: '');
    // const [pickupStartDateRangeAdvance, setPickupStartDateRangeAdvance] = useState([item.advancedPickupStart? new Date(item.advancedPickupStart): null, item.advancedPickupEnd? new Date(item.advancedPickupEnd): null]);
    // const [pickupStartDateAdvance, pickupEndDateAdvance] = pickupStartDateRangeAdvance;
    // const [pickupAdvanceAppStartDate, setPickupAdvanceAppStartDate] = useState(item.advancedPickupStartTime? new Date(item.advancedPickupStartTime): null);
    // const [pickupAdvanceAppEndDate, setPickupAdvanceAppEndDate] = useState(item.advancedPickupEndTime? new Date(item.advancedPickupEndTime): null);
    // const [deliveryStartDateRangeAdvance, setDeliveryStartDateRangeAdvance] = useState([item.advancedDeliveryStart? new Date(item.advancedDeliveryStart): null, item.advancedDeliveryEnd? new Date(item.advancedDeliveryEnd): null]);
    // const [deliveryStartDateAdvance, deliveryEndDateAdvance] = deliveryStartDateRangeAdvance;
    // const [deliveryAdvanceAppStartDate, setDeliveryAdvanceAppStartDate] = useState(item.advancedDeliveryStartTime? new Date(item.advancedDeliveryStartTime): null);
    // const [deliveryAdvanceAppEndDate, setDeliveryAdvanceAppEndDate] = useState(item.advancedDeliveryEndTime? new Date(item.advancedDeliveryEndTime): null);
    // const [advancedEquipmentMaxLength, setAdvancedEquipmentMaxLength] = useState(item.advancedEquipmentMaxLength? item.advancedEquipmentMaxLength: '');
    // const [advancedEquipmentMaxWeigth, setAdvancedEquipmentMaxWeigth] = useState(item.advancedEquipmentMaxWeigth? item.advancedEquipmentMaxWeigth: '');
    // const [advancedAttributes, setAdvancedAttributes] = useState(item.advancedAttributes && item.advancedAttributes.length > 0? item.advancedAttributes: []);

    const [originValues, setOriginValues] = useState('');
    const [originRadius, setOriginRadius] = useState('');
    const [destinationValues, setDestinationValues] = useState('');
    const [destinationRadius, setDestinationRadius] = useState('');
    const [pickupDateRange, setPickupDateRange] = useState([null, null]);
    const [pickupStartDate, pickupEndDate] = pickupDateRange;
    const [selectedEquipmentType, setSelectedEquipmentType] = useState([]);
    const [loadNumber, setLoadNumber] = useState('');
    const [advancedDisplayPreference, setAdvancedDisplayPreference] = useState('');
    const [pickupStartDateRangeAdvance, setPickupStartDateRangeAdvance] = useState([null, null]);
    const [pickupStartDateAdvance, pickupEndDateAdvance] = pickupStartDateRangeAdvance;
    const [pickupAdvanceAppStartDate, setPickupAdvanceAppStartDate] = useState(null);
    const [pickupAdvanceAppEndDate, setPickupAdvanceAppEndDate] = useState(null);
    const [deliveryStartDateRangeAdvance, setDeliveryStartDateRangeAdvance] = useState([null, null]);
    const [deliveryStartDateAdvance, deliveryEndDateAdvance] = deliveryStartDateRangeAdvance;
    const [deliveryAdvanceAppStartDate, setDeliveryAdvanceAppStartDate] = useState(null);
    const [deliveryAdvanceAppEndDate, setDeliveryAdvanceAppEndDate] = useState(null);
    const [advancedEquipmentMaxLength, setAdvancedEquipmentMaxLength] = useState('');
    const [advancedEquipmentMaxWeigth, setAdvancedEquipmentMaxWeigth] = useState('');
    const [advancedAttributes, setAdvancedAttributes] = useState('');

    useEffect(() => {
        setOriginValues(item.originValues? item.originValues: '');
        setOriginRadius(item.originRadius? item.originRadius: '');
        setDestinationValues(item.destinationValues? item.destinationValues: '');
        setDestinationRadius(item.destinationRadius? item.destinationRadius: '');
        setPickupDateRange([item.pickupStart? new Date(item.pickupStart): null, item.pickupStart? new Date(item.pickupEnd): null]);
        setSelectedEquipmentType(item.equipmentType && item.equipmentType.length > 0? equipmentTypeOptions.filter(e => item.equipmentType.findIndex(e2 => e2 === e.value) >= 0): []);
        setLoadNumber(item.loadNumber? item.loadNumber: '');
        setAdvancedDisplayPreference(item.advancedDisplayPreference? item.advancedDisplayPreference: '');
        setPickupStartDateRangeAdvance([item.advancedPickupStart? new Date(item.advancedPickupStart): null, item.advancedPickupEnd? new Date(item.advancedPickupEnd): null]);
        setPickupAdvanceAppStartDate(item.advancedPickupStartTime? new Date(item.advancedPickupStartTime): null);
        setPickupAdvanceAppEndDate(item.advancedPickupEndTime? new Date(item.advancedPickupEndTime): null);
        setDeliveryStartDateRangeAdvance([item.advancedDeliveryStart? new Date(item.advancedDeliveryStart): null, item.advancedDeliveryEnd? new Date(item.advancedDeliveryEnd): null]);
        setDeliveryAdvanceAppStartDate(item.advancedDeliveryStartTime? new Date(item.advancedDeliveryStartTime): null);
        setDeliveryAdvanceAppEndDate(item.advancedDeliveryEndTime? new Date(item.advancedDeliveryEndTime): null);
        setAdvancedEquipmentMaxLength(item.advancedEquipmentMaxLength? item.advancedEquipmentMaxLength: '');
        setAdvancedEquipmentMaxWeigth(item.advancedEquipmentMaxWeigth? item.advancedEquipmentMaxWeigth: '');
        setAdvancedAttributes(item.advancedAttributes? item.advancedAttributes: '');
    }, [item]);

    const advancedIsOpen = () => {
        if(item.advancedDisplayPreference) {
            return "0";
        }
        if(item.advancedPickupStart && item.advancedPickupEnd) {
            return "0";
        }
        if(item.advancedPickupStartTime && item.advancedPickupEndTime) {
            return "0";
        }
        if(item.advancedDeliveryStart && item.advancedDeliveryEnd) {
            return "0";
        }
        if(item.advancedDeliveryStartTime) {
            return "0";
        }
        if(item.advancedDeliveryEndTime) {
            return "0";
        }
        if(item.advancedEquipmentMaxLength) {
            return "0";
        }
        if(item.advancedEquipmentMaxWeigth) {
            return "0";
        }
        if(item.advancedAttributes && item.advancedAttributes.length > 0) {
            return "0";
        }

        return "-1";
    };

    const onValidateHandler = () => {
        //validar que se registe algun campo al menos

        var object = {
            id: item.id,
            originValues,
            originRadius,
            destinationValues,
            destinationRadius,
            pickupStart: pickupStartDate,
            pickupEnd: pickupEndDate,
            equipmentType: selectedEquipmentType.map(obj => obj.value),//multiples
            loadNumber,
            advancedDisplayPreference,
            advancedPickupStart: pickupStartDateAdvance,
            advancedPickupEnd: pickupEndDateAdvance,
            advancedPickupStartTime: pickupAdvanceAppStartDate,
            advancedPickupEndTime: pickupAdvanceAppEndDate,
            advancedDeliveryStart: deliveryStartDateAdvance,
            advancedDeliveryEnd: deliveryEndDateAdvance,
            advancedDeliveryStartTime: deliveryAdvanceAppStartDate,
            advancedDeliveryEndTime: deliveryAdvanceAppEndDate,
            advancedEquipmentMaxLength: advancedEquipmentMaxLength,
            advancedEquipmentMaxWeigth: advancedEquipmentMaxWeigth,
            advancedAttributes: advancedAttributes //multiples
        };

        onPrimaryButtonHandler(object);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Origin</Form.Label>
                                <FormControl aria-label="Origin" placeholder="Origin" value={originValues} onChange={(e) => setOriginValues(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>&nbsp;</Form.Label>
                                <FormControl aria-label="Radius" placeholder="Radius" value={originRadius} onChange={(e) => setOriginRadius(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Destination</Form.Label>
                                <FormControl aria-label="Destination" placeholder="Destination" value={destinationValues} onChange={(e) => setDestinationValues(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>&nbsp;</Form.Label>
                                <FormControl aria-label="Radius" placeholder="Radius" value={destinationRadius} onChange={(e) => setDestinationRadius(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Pickup Date</Form.Label>
                        <DatePicker
                            className="form-control"
                            dateFormat="MMMM d, yyyy"
                            selectsRange={true}
                            startDate={pickupStartDate}
                            endDate={pickupEndDate}
                            onChange={(update) => {
                                setPickupDateRange(update);
                            }}
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment Type</Form.Label>
                                <Select
                                    value={selectedEquipmentType}
                                    onChange={setSelectedEquipmentType}
                                    options={equipmentTypeOptions}
                                    isMulti={true}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Load Number</Form.Label>
                                <Form.Control type="text" placeholder="Load Number" value={loadNumber} onChange={(e) => setLoadNumber(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Accordion defaultActiveKey={advancedIsOpen()}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ADVANCED SEARCH</Accordion.Header>
                            <Accordion.Body>

                                <Form.Label>Display Preference</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Show All Loads"
                                        name="group1"
                                        type='radio'
                                        checked={advancedDisplayPreference === 'Show All Loads'}
                                        onChange={(e) => {setAdvancedDisplayPreference('Show All Loads')}}
                                    />
                                    <Form.Check
                                        inline
                                        label="Exclude Hidden Loads"
                                        name="group1"
                                        type='radio'
                                        checked={advancedDisplayPreference === 'Exclude Hidden Loads'}
                                        onChange={(e) => {setAdvancedDisplayPreference('Exclude Hidden Loads')}}
                                    />
                                    <Form.Check
                                        inline
                                        label="Favorite Loads Only"
                                        name="group1"
                                        type='radio'
                                        checked={advancedDisplayPreference === 'Favorite Loads Only'}
                                        onChange={(e) => {setAdvancedDisplayPreference('Favorite Loads Only')}}
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Pickup Date</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                dateFormat="MMMM d, yyyy"
                                                selectsRange={true}
                                                startDate={pickupStartDateAdvance}
                                                endDate={pickupEndDateAdvance}
                                                onChange={(update) => {
                                                    setPickupStartDateRangeAdvance(update);
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>&nbsp;</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                selected={pickupAdvanceAppStartDate}
                                                onChange={(date) => setPickupAdvanceAppStartDate(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Start Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>&nbsp;</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                selected={pickupAdvanceAppEndDate}
                                                onChange={(date) => setPickupAdvanceAppEndDate(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="End Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Delivery Date</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                dateFormat="MMMM d, yyyy"
                                                selectsRange={true}
                                                startDate={deliveryStartDateAdvance}
                                                endDate={deliveryEndDateAdvance}
                                                onChange={(update) => {
                                                    setDeliveryStartDateRangeAdvance(update);
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>&nbsp;</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                selected={deliveryAdvanceAppStartDate}
                                                onChange={(date) => setDeliveryAdvanceAppStartDate(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Start Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>&nbsp;</Form.Label>
                                            <DatePicker
                                                className="form-control"
                                                selected={deliveryAdvanceAppEndDate}
                                                onChange={(date) => setDeliveryAdvanceAppEndDate(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="End Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Equipment</Form.Label>
                                            <Form.Control type="text" placeholder="Max Length" value={advancedEquipmentMaxLength} onChange={(e) => setAdvancedEquipmentMaxLength(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>&nbsp;</Form.Label>
                                            <Form.Control type="text" placeholder="Max Weigth" value={advancedEquipmentMaxWeigth} onChange={(e) => setAdvancedEquipmentMaxWeigth(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Label>Attributes</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="option1"
                                                autoComplete="off"
                                                checked={advancedAttributes === 'Drop Trailer'}
                                                onChange={(e) => { if(e.target.checked) {setAdvancedAttributes('Drop Trailer')}}}
                                            />
                                            <Form.Label className="btn btn-outline-primary" htmlFor="option1">Drop Trailer</Form.Label>
                                            {' '}
                                            <Form.Control
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="option2"
                                                autoComplete="off"
                                                checked={advancedAttributes === 'Hazmat'}
                                                onChange={(e) => {if(e.target.checked) {setAdvancedAttributes('Hazmat')}}}
                                            />
                                            <Form.Label className="btn btn-outline-primary" htmlFor="option2">Hazmat</Form.Label>
                                            {' '}
                                            <Form.Control
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="option3"
                                                autoComplete="off"
                                                checked={advancedAttributes === 'Team'}
                                                onChange={(e) => {if(e.target.checked) {setAdvancedAttributes('Team')}}}
                                            />
                                            <Form.Label className="btn btn-outline-primary" htmlFor="option3">Team</Form.Label>
                                            {' '}
                                            <Form.Control
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="option4"
                                                autoComplete="off"
                                                checked={advancedAttributes === 'Load Out'}
                                                onChange={(e) => {if(e.target.checked) {setAdvancedAttributes('Load Out')}}}
                                            />
                                            <Form.Label className="btn btn-outline-primary" htmlFor="option4">Load Out</Form.Label>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {secondbuttontext && <Button variant="button" onClick={onSecondButtonButtonHandler}>{secondbuttontext}</Button>}
                {primarybuttontext && <Button variant="primary" onClick={onValidateHandler}>{primarybuttontext}</Button>}
            </Modal.Footer>
        </Modal>
    );
}

DialogModalCreateLoad.propTypes = {
};

export default DialogModalCreateLoad;

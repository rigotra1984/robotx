// import React, {useState} from 'react';
// import {Row, Col, Form, FormControl, Accordion} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import Select from 'react-select';
// import 'react-datepicker/dist/react-datepicker.css';
//
//
// const CreateLoad = (props) => {
//
//     const [pickupDateRange, setPickupDateRange] = useState([null, null]);
//     const [pickupStartDate, pickupEndDate] = pickupDateRange;
//
//     const [pickupStartDateRangeAdvance, setPickupStartDateRangeAdvance] = useState([null, null]);
//     const [pickupStartDateAdvance, pickupEndDateAdvance] = pickupStartDateRangeAdvance;
//     const [pickupAdvanceAppStartDate, setPickupAdvanceAppStartDate] = useState(new Date());
//     const [pickupAdvanceAppEndDate, setPickupAdvanceAppEndDate] = useState(new Date());
//
//     const [deliveryStartDateRangeAdvance, setDeliveryStartDateRangeAdvance] = useState([null, null]);
//     const [deliveryStartDateAdvance, deliveryEndDateAdvance] = deliveryStartDateRangeAdvance;
//     const [deliveryAdvanceAppStartDate, setDeliveryAdvanceAppStartDate] = useState(new Date());
//     const [deliveryAdvanceAppEndDate, setDeliveryAdvanceAppEndDate] = useState(new Date());
//
//     const equipmentTypeOptions = [
//         { value: 'Van', label: 'Van' },
//         { value: 'Reefer', label: 'Reefer' },
//         { value: 'Open Deck', label: 'Open Deck' },
//         { value: 'Container', label: 'Container' },
//         { value: 'Power Only', label: 'Power Only' },
//     ];
//     const [selectedEquipmentType, setSelectedEquipmentType] = useState(null);
//
//     const prepare = (field) => {
//
//     };
//
//     return (
//         <Form>
//             <Row>
//                 <Col md={8}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                         <Form.Label>Origin</Form.Label>
//                         <FormControl aria-label="Origin" placeholder="Origin" />
//                     </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                         <Form.Label>&nbsp;</Form.Label>
//                         <FormControl aria-label="Radius" placeholder="Radius" />
//                     </Form.Group>
//                 </Col>
//             </Row>
//
//             <Row>
//                 <Col md={8}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                         <Form.Label>Destination</Form.Label>
//                         <FormControl aria-label="Destination" placeholder="Destination" />
//                     </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                         <Form.Label>&nbsp;</Form.Label>
//                         <FormControl aria-label="Radius" placeholder="Radius" />
//                     </Form.Group>
//                 </Col>
//             </Row>
//
//             <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Pickup Date</Form.Label>
//                 <DatePicker
//                     className="form-control"
//                     dateFormat="MMMM d, yyyy"
//                     selectsRange={true}
//                     startDate={pickupStartDate}
//                     endDate={pickupEndDate}
//                     onChange={(update) => {
//                         setPickupDateRange(update);
//                     }}
//                 />
//             </Form.Group>
//
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Equipment Type</Form.Label>
//                         <Select
//                             defaultValue={selectedEquipmentType}
//                             onChange={setSelectedEquipmentType}
//                             options={equipmentTypeOptions}
//                             isMulti={true}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group className="mb-3" controlId="formBasicText">
//                         <Form.Label>Load Number</Form.Label>
//                         <Form.Control type="text" placeholder="Load Number" />
//                     </Form.Group>
//                 </Col>
//             </Row>
//
//             <Accordion>
//                 <Accordion.Item eventKey="0">
//                     <Accordion.Header>ADVANCED SEARCH</Accordion.Header>
//                     <Accordion.Body>
//
//                         <Form.Label>Display Preference</Form.Label>
//                         <Form.Group className="mb-3">
//                             <Form.Check
//                                 inline
//                                 label="Show All Loads"
//                                 name="group1"
//                                 type='radio'
//                                 id='inline-radio-1'
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Exclude Hidden Loads"
//                                 name="group1"
//                                 type='radio'
//                                 id='inline-radio-2'
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Favorite Loads Only"
//                                 name="group1"
//                                 type='radio'
//                                 id='inline-radio-3'
//                             />
//                         </Form.Group>
//
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Pickup Date</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         dateFormat="MMMM d, yyyy"
//                                         selectsRange={true}
//                                         startDate={pickupStartDateAdvance}
//                                         endDate={pickupEndDateAdvance}
//                                         onChange={(update) => {
//                                             setPickupStartDateRangeAdvance(update);
//                                         }}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={3}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>&nbsp;</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         selected={pickupAdvanceAppStartDate}
//                                         onChange={(date) => setPickupAdvanceAppStartDate(date)}
//                                         showTimeSelect
//                                         showTimeSelectOnly
//                                         timeIntervals={15}
//                                         timeCaption="Start Time"
//                                         dateFormat="h:mm aa"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={3}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>&nbsp;</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         selected={pickupAdvanceAppEndDate}
//                                         onChange={(date) => setPickupAdvanceAppEndDate(date)}
//                                         showTimeSelect
//                                         showTimeSelectOnly
//                                         timeIntervals={15}
//                                         timeCaption="End Time"
//                                         dateFormat="h:mm aa"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col md={6}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Delivery Date</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         dateFormat="MMMM d, yyyy"
//                                         selectsRange={true}
//                                         startDate={deliveryStartDateAdvance}
//                                         endDate={deliveryEndDateAdvance}
//                                         onChange={(update) => {
//                                             setDeliveryStartDateRangeAdvance(update);
//                                         }}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={3}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>&nbsp;</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         selected={deliveryAdvanceAppStartDate}
//                                         onChange={(date) => setDeliveryAdvanceAppStartDate(date)}
//                                         showTimeSelect
//                                         showTimeSelectOnly
//                                         timeIntervals={15}
//                                         timeCaption="Start Time"
//                                         dateFormat="h:mm aa"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col md={3}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>&nbsp;</Form.Label>
//                                     <DatePicker
//                                         className="form-control"
//                                         selected={deliveryAdvanceAppEndDate}
//                                         onChange={(date) => setDeliveryAdvanceAppEndDate(date)}
//                                         showTimeSelect
//                                         showTimeSelectOnly
//                                         timeIntervals={15}
//                                         timeCaption="End Time"
//                                         dateFormat="h:mm aa"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col>
//                                 <Form.Group className="mb-3" controlId="formBasicText">
//                                     <Form.Label>Equipment</Form.Label>
//                                     <Form.Control type="text" placeholder="Max Length" />
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group className="mb-3" controlId="formBasicText">
//                                     <Form.Label>&nbsp;</Form.Label>
//                                     <Form.Control type="text" placeholder="Max Weigth" />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//
//                         <Form.Label>Attributes</Form.Label>
//                         <Row>
//                             <Col>
//                                 <Form.Group className="mb-3">
//                                     <Form.Control type="checkbox" className="btn-check"  name="options" id="option1" autoComplete="off" />
//                                     <Form.Label className="btn btn-outline-primary" htmlFor="option1">Drop Trailer</Form.Label>
//                                     {' '}
//                                     <Form.Control type="checkbox" className="btn-check"  name="options" id="option2" autoComplete="off" />
//                                     <Form.Label className="btn btn-outline-primary" htmlFor="option2">Hazmat</Form.Label>
//                                     {' '}
//                                     <Form.Control type="checkbox" className="btn-check"  name="options" id="option3" autoComplete="off" />
//                                     <Form.Label className="btn btn-outline-primary" htmlFor="option3">Team</Form.Label>
//                                     {' '}
//                                     <Form.Control type="checkbox" className="btn-check"  name="options" id="option4" autoComplete="off" />
//                                     <Form.Label className="btn btn-outline-primary" htmlFor="option4">Load Out</Form.Label>
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                     </Accordion.Body>
//                 </Accordion.Item>
//             </Accordion>
//         </Form>
//     );
// }
//
// CreateLoad.propTypes = {
// };
//
// export default CreateLoad;

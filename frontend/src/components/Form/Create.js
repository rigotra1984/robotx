// import React, {useState} from 'react';
// import {Form} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import Select from 'react-select';
// import 'react-datepicker/dist/react-datepicker.css';
//
// const Create = (props) => {
//
//     const [dateRange, setDateRange] = useState([null, null]);
//     const [startDate, endDate] = dateRange;
//
//     const [startDate1, setStartDate1] = useState(new Date());
//     const filterPassedTime = (time) => {
//         const currentDate = new Date();
//         const selectedDate = new Date(time);
//
//         return currentDate.getTime() < selectedDate.getTime();
//     };
//
//     const options = [
//         { value: 'chocolate', label: 'Chocolate' },
//         { value: 'strawberry', label: 'Strawberry' },
//         { value: 'vanilla', label: 'Vanilla' },
//     ];
//     const [selectedOption, setSelectedOption] = useState(null);
//
//     return (
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Nombre</Form.Label>
//                 <Form.Control type="text" placeholder="Nombre" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Vigencia</Form.Label>
//                 <DatePicker
//                     className="form-control"
//                     dateFormat="MMMM d, yyyy"
//                     selectsRange={true}
//                     startDate={startDate}
//                     endDate={endDate}
//                     onChange={(update) => {
//                         setDateRange(update);
//                     }}
//                 />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Date</Form.Label>
//                 <DatePicker
//                     className="form-control"
//                     selected={startDate1}
//                     onChange={(date) => setStartDate1(date)}
//                     showTimeSelect
//                     filterTime={filterPassedTime}
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                 />
//             </Form.Group>
//             <Form.Group className="mb-3">
//                 <Form.Label>Select menu</Form.Label>
//                 <Select
//                     defaultValue={selectedOption}
//                     onChange={setSelectedOption}
//                     options={options}
//                 />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Direccion</Form.Label>
//                 <Form.Control type="text" placeholder="Direccion" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//                 <Form.Label>Select menu</Form.Label>
//                 <Form.Select>
//                     <option>Select1</option>
//                     <option>Select2</option>
//                     <option>Select3</option>
//                 </Form.Select>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//         </Form>
//     );
// }
//
// Create.propTypes = {
// };
//
// export default Create;

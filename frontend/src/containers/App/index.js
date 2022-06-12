import React, {useState} from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css'
import Menu from '../../components/Menu'
// import Home from '../Home';
// import Prueba1 from '../Prueba1';
// import Prueba2 from '../Prueba2';
import ListTask from '../../components/ListTask';
import Modal from '../../components/DialogModal';
import {Create} from '../../components/Form';
import DialogModal from "../../components/DialogModal";

const App = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const data = [
        {id: '1', status: 'active'},
        {id: '2', status: 'active'},
        {id: '3', status: 'programmed'},
        {id: '4', status: 'active'},
        {id: '5', status: 'inactive'},
        {id: '6', status: 'inactive'},
        {id: '7', status: 'active'},
        {id: '8', status: 'active'},
    ]

    const configs = {
        animate: true,
        // top: `5em`,
        clickDismiss: true,
        escapeDismiss: false,
        showCloseIcon: false,
        // focusOutline: false,
    };

    const [isOpen, setOverlay] = useState(false);

    const onCreate = () => {
        setModalShow(!modalShow);
    };

    return (
        <LoadingOverlay
            active={isOpen}
            spinner
            text='Loading your content...'
        >
            <Container>
                <Row>
                    <Col>
                        <Menu onCreate={onCreate}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <ListTask data={data}/>
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}
                {/*        <Route exact path='/' element={<Home/>}/>*/}
                {/*        <Route path='#/prueba1' element={<Prueba1/>}/>*/}
                {/*        <Route path='#/prueba2' element={<Prueba2/>}/>*/}
                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
            </Container>
            <DialogModal show={modalShow} onHide={() => setModalShow(false)}>
                <Create/>
            </DialogModal>
        </LoadingOverlay>
    );
};

App.propTypes = {};

export default App;
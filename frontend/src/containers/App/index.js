import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Menu from '../../components/Menu'
import Home from '../Home';
import Prueba1 from '../Prueba1';
import Prueba2 from '../Prueba2';

const App = (props) => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Menu/>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md" style={{paddingTop: '1rem'}}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/prueba1' element={<Prueba1/>}/>
                        <Route path='/prueba2' element={<Prueba2/>}/>
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    );
};

App.propTypes = {};

export default App;
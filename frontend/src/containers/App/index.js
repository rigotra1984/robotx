import React from 'react';

// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Menu from '../../components/Menu'
// import Home from '../Home';
// import Prueba1 from '../Prueba1';
// import Prueba2 from '../Prueba2';
import ListTask from '../../components/ListTask';
import NewTaskModal from '../../components/NewTaskModal';

const App = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const data = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
    ];

    const onCreate = () => {
        setModalShow(!modalShow);
    };

    return (
        <>
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
            <NewTaskModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

App.propTypes = {};

export default App;
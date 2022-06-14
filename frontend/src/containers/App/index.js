import React, {useEffect} from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {compose} from 'redux';
// import {useSelector, useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Menu from '../../components/Menu'
// import Home from '../Home';
// import Prueba1 from '../Prueba1';
// import Prueba2 from '../Prueba2';
import ListTask from '../../components/ListTask';
import {CreateLoad} from '../../components/Form';
import DialogModal from "../../components/DialogModal";
import * as actions from './actions';
import Loading from "../../components/Loading";

const App = (props) => {
    const {
        loading,
        error,
        persons,
        getAllPersonRequestAction,
        loadingStartAndEndAction,
        sendErrorAction,
    } = props;

    useEffect(() => {
        getAllPersonRequestAction();
    }, []);

    const [modalCreateShow, setModalCreateShow] = React.useState(false);

    const data = [
        {id: '1', status: 'active'},
        {id: '2', status: 'active'},
        {id: '3', status: 'programmed'},
        {id: '4', status: 'active'},
        {id: '5', status: 'inactive'},
        {id: '6', status: 'inactive'},
        {id: '7', status: 'active'},
        {id: '8', status: 'active'},
    ];

    const onCreateHandler = () => {
        setModalCreateShow(false);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Menu onCreate={() => setModalCreateShow(true)}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <ListTask data={data} persons={persons}/>
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}
                {/*        <Route exact path='/' element={<Home/>}/>*/}
                {/*        <Route path='#/prueba1' element={<Prueba1/>}/>*/}
                {/*        <Route path='#/prueba2' element={<Prueba2/>}/>*/}
                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
            </Container>
            <DialogModal
                onHide={() => setModalCreateShow(false)}
                show={modalCreateShow}
                title={'Nueva Tarea'}
                primarybuttontext={'Aceptar'}
                secondbuttontext={'Cancelar'}
                onPrimaryButtonHandler={onCreateHandler}
                onSecondButtonButtonHandler={() => setModalCreateShow(false)}>
                <CreateLoad/>
            </DialogModal>
            <DialogModal
                onHide={() => loadingStartAndEndAction(false)}
                show={error !== null}
                title={'Error'}
                primarybuttontext={'Aceptar'}
                onPrimaryButtonHandler={() => sendErrorAction(null)}>
                <div>{error}</div>
            </DialogModal>
            <Loading show={loading} type={'bounce'} onHide={() => loadingStartAndEndAction(false)} />
        </>
    );
};

const mapStateToProps = state => ({
    loading: state.AppReducer.loading,
    error: state.AppReducer.error,
    persons: state.AppReducer.persons,
});

export default connect(mapStateToProps, actions)(App);

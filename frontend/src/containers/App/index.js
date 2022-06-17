import React, {useEffect} from 'react';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Menu from '../../components/Menu'
// import Home from '../Home';
// import Prueba1 from '../Prueba1';
// import Prueba2 from '../Prueba2';
import ListTask from '../../components/ListTask';
import DialogModal from "../../components/DialogModal";
import * as actions from './actions';
import Loading from "../../components/Loading";
import {DialogModalCreateLoad} from '../../components/Form';

const App = (props) => {
    const {
        loading,
        error,
        loads,
        loadingStartAndEndAction,
        sendErrorAction,
        getAllLoadRequestAction,
        createLoadRequestAction,
        updateLoadRequestAction,
        deleteLoadRequestAction,
    } = props;

    const loadInitialState = {
        id: '',
        originValues: '',
        originRadius: '',
        destinationValues: '',
        destinationRadius: '',
        pickupStart: '',
        pickupEnd: '',
        equipmentType: [],//multiples
        loadNumber: '',
        advancedDisplayPreference: '',
        advancedPickupStart: '',
        advancedPickupEnd: '',
        advancedPickupStartTime: '',
        advancedPickupEndTime: '',
        advancedDeliveryStart: '',
        advancedDeliveryEnd: '',
        advancedDeliveryStartTime: '',
        advancedDeliveryEndTime: '',
        advancedEquipmentMaxLength: '',
        advancedEquipmentMaxWeigth: '',
        advancedAttributes: [] //multiples
    };

    useEffect(() => {
        getAllLoadRequestAction();
    }, []);

    const [modalCreateShow, setModalCreateShow] = React.useState(false);
    const [loadObject, setLoadObject] = React.useState(loadInitialState);

    const onCreateOrUpdateHandler = (item) => {
        if(item.id) {
            updateLoadRequestAction(item);
        } else {
            createLoadRequestAction(item);
        }
        setLoadObject(loadInitialState);
        setModalCreateShow(false);
    };

    const onUpdateHandler = (item) => {
        setLoadObject(item);
        setModalCreateShow(true);
    };

    const onDeleteHandler = (item) => {
        deleteLoadRequestAction(item);
        setModalCreateShow(false);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Menu onCreate={() => {setModalCreateShow(true); setLoadObject(loadInitialState);}}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <ListTask data={loads} onUpdateItem={onUpdateHandler} onDeleteItem={onDeleteHandler}/>
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}
                {/*        <Route exact path='/' element={<Home/>}/>*/}
                {/*        <Route path='#/prueba1' element={<Prueba1/>}/>*/}
                {/*        <Route path='#/prueba2' element={<Prueba2/>}/>*/}
                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
            </Container>
            <DialogModalCreateLoad
                onHide={() => setModalCreateShow(false)}
                show={modalCreateShow}
                title={'New Load Filter'}
                primarybuttontext={'Acept'}
                secondbuttontext={'Cancel'}
                item={loadObject}
                onPrimaryButtonHandler={onCreateOrUpdateHandler}
                onSecondButtonButtonHandler={() => setModalCreateShow(false)} />
            <DialogModal
                onHide={() => loadingStartAndEndAction(false)}
                show={error !== null}
                title={'Error'}
                primarybuttontext={'Acept'}
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
    loads: state.AppReducer.loads,
});

export default connect(mapStateToProps, actions)(App);

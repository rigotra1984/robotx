import React from 'react';
import {Modal} from 'react-bootstrap';
import {BounceLoader, HashLoader, PropagateLoader, PuffLoader, DotLoader} from 'react-spinners';

const Loading = (props) => {
    const {type} = props;

    const indicator = () => {
        if(type === 'bounce') {
            return (
                <BounceLoader color={'#36D7B7'} loading={true} size={80} />
            );
        } else if(type === 'hash') {
            return (
                <HashLoader color={'#36D7B7'} loading={true} size={80} />
            );
        } else if(type === 'propagate') {
            return (
                <PropagateLoader color={'#36D7B7'} loading={true} size={25} />
            );
        } else if(type === 'puff') {
            return (
                <PuffLoader color={'#36D7B7'} loading={true} size={80} />
            );
        } else if(type === 'dot') {
            return (
                <DotLoader color={'#36D7B7'} loading={true} size={80} />
            );
        } else {
            return (
                <BounceLoader color={'#36D7B7'} loading={true} size={80} />
            );
        }
    };

    return (
        <Modal
            {...props}
            centered
            size={'sm'}
            keyboard={false}
            backdrop={'static'}
        >
            <div style={{textAlign: 'center'}}>
                {indicator()}
            </div>
        </Modal>
    );
}

Loading.propTypes = {
};

export default Loading;

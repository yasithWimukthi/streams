import react from 'react';
import reactDOM from 'react-dom';

const Modal = (props) => {
    return reactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">

            </div>
        </div>
    )
}

export default Modal;

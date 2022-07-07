import ReactDOM  from "react-dom";
import '../../styles/scss/Modal.scss';
function Modal({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}

export {Modal}
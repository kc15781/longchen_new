import React from 'react';
import { Modal,Button } from 'react-bootstrap';

export function Modal_component(props) {
    

    const handleClose = () => { props.handleClose() };



    return (
    <>
        <Modal size="lg" show={props.trigger} onHide={handleClose}>
            <Modal.Header className="modal-lg" closeButton>
                <Modal.Title>Notice</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-lg">{props.msg}</Modal.Body>
            <Modal.Footer className="modal-lg">
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}


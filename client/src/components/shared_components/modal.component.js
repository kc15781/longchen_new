import React from 'react';
import { Modal,Button } from 'react-bootstrap';

export function Modal_component(props) {
    

    const handleClose = () => { props.handleClose() };



    return (
    <>
        <Modal show={props.trigger} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Notice</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.msg}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}


import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature , faDollarSign, faBook} from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';
import './Stylesheet/Stylesheet_employment.css'
export default class Employment extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <>
                <Container className="mt-5">
                    <Row>
                        <Col><FontAwesomeIcon className=" " icon={faFileSignature} /></Col>
                        <Col><FontAwesomeIcon className=" " icon={faDollarSign} /></Col>
                        <Col><FontAwesomeIcon className=" " icon={faBook} /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}
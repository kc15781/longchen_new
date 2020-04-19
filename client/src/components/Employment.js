import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature , faDollarSign, faBook} from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';

export default class Employment extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <>
                <Container className="mt-5 text-center">
                    <Row>
                        <Col><FontAwesomeIcon  style={{width:"250px", height:"250px"}}  icon={faFileSignature} /></Col>
                        <Col><FontAwesomeIcon  style={{width:"250px", height:"250px"}} icon={faDollarSign} /></Col>
                        <Col><FontAwesomeIcon  style={{width:"250px", height:"250px"}} icon={faBook} /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}
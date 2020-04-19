import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature , faDollarSign, faBook} from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';
import { Modal_component } from "./shared_components/modal.component"
import { FormattedMessage} from 'react-intl';
export default class Employment extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.handleClose = this.handleClose.bind(this);
        this.state = {

            trigger:false,
            modal_msg:<div>Please send 1 ✖ CV (in Thai or Chinese or English) to our email: longchenthai@hotmail.co.th
                <br></br><br></br>We will contact you through the email when our decision is made
                <br></br><br></br> Thank you for your consideration and time
                <br></br><br></br>If you have any questions, please feel free to 
                </div>,

    
        }

    }

    handleClose() {
        this.setState({
            trigger: false
        })
    };

    onClick() {
        this.setState({
            trigger: true
        })
    };

    render() {
        return (
            <>
                <Container className="mt-5 text-center">
                    <Row > 
                        <Col className="mt-5" onClick={this.onClick}>
                        <FontAwesomeIcon  style={{width:"250px", height:"250px"}}  icon={faFileSignature} />
                        <h2>< FormattedMessage id="Applying" defaultMessage="Applying" /></h2>
                        </Col>
                        <Col className="mt-5" onClick={this.onClick}>
                        <FontAwesomeIcon  style={{width:"250px", height:"250px"}} icon={faDollarSign} />
                        <h2>< FormattedMessage id="Assistant" defaultMessage="Assistant" /></h2>
                        </Col>
                        <Col className="mt-5" onClick={this.onClick}>
                        <FontAwesomeIcon  style={{width:"250px", height:"250px"}} icon={faBook} />
                        <h2>< FormattedMessage id="Salesperson" defaultMessage="Salesperson" /></h2>
                        </Col>
                    </Row>
                </Container>
                <Modal_component msg={this.state.modal_msg} handleClose={this.handleClose}  trigger={this.state.trigger}/>
            </>
        )
    }
}
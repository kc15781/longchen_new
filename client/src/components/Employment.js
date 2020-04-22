import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature , faDollarSign, faBook} from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';
import { Modal_component } from "./shared_components/modal.component"
import { FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';
import './Stylesheet/Stylesheet_employment.css'
export default class Employment extends Component {
    constructor(props) {
        super(props);

        this.onClick_apply = this.onClick_apply.bind(this);
        this.onClick_assistant = this.onClick_assistant.bind(this);
        this.onClick_sales = this.onClick_sales.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {

            trigger:false,
            modal_msg:" ",
        }

    }

    handleClose() {
        this.setState({
            trigger: false
        })
    };

    onClick_apply() {
        this.setState({
            trigger: true,
            modal_msg:<div>< FormattedMessage id="apply1" defaultMessage="Please send 1 ✖ CV (in Thai or Chinese or English) to our email: longchenthai@hotmail.co.th" />
                <br></br><br></br>< FormattedMessage id="apply2" defaultMessage="We will contact you through the email when our decision is made" />
                <br></br><br></br>< FormattedMessage id="apply3" defaultMessage="Thank you for your consideration and time" />
                <br></br><br></br>< FormattedMessage id="product_5" defaultMessage="If you have any questions, please feel free to" /><Link to="/contact">< FormattedMessage id="contact_link" defaultMessage=" contact us" /></Link>
                </div>,
        })
    };

    onClick_assistant() {
        this.setState({
            trigger: true,
            modal_msg:<div>< FormattedMessage id="Assistant1" defaultMessage="starting at 15000 Bhat/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant2" defaultMessage="Meal Allowance: 500 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant3" defaultMessage="Accommodation Allowance: 500 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant4" defaultMessage="Transportation Allowance: 250 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant5" defaultMessage="Probationary Period: 3 Months" />
                <br></br><br></br>< FormattedMessage id="Assistant6" defaultMessage="Insurance (After Probationary Period)" />
                <br></br><br></br>< FormattedMessage id="Assistant7" defaultMessage="Award: 300 Baht/Month (100% Attendance/Month)" />
                <br></br><br></br>< FormattedMessage id="Assistant8" defaultMessage="Full Time (Monday-Saturday 8:00Am-5:00PM)" />
                <br></br><br></br><br></br>< FormattedMessage id="Assistant9" defaultMessage="Skills: " />
                <br></br><br></br><li>< FormattedMessage id="Assistant10" defaultMessage="Intermediate level of Mandarin in reading, writing, listening and speaking (Required) " /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant11" defaultMessage="Knowledge of computer e.g. Excel, Word and Email (Required)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant12" defaultMessage="Willing to learn (Required)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant13" defaultMessage="Intermediate level of Thai in reading, writing, listening and speaking (Preferred)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant14" defaultMessage="Intermediate level of English in reading, writing, listening and speaking (Preferred)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant15" defaultMessage="Excellent problem solving skills (Preferred)" /></li>
                <br></br><br></br>< FormattedMessage id="Assistant16" defaultMessage="If you have any questions or would like to apply, please feel free to " /><Link to="/contact">< FormattedMessage id="contact_link" defaultMessage=" contact us" /></Link>
                </div>,
        })
    };

    onClick_sales() {
        this.setState({
            trigger: true,
            modal_msg:<div>< FormattedMessage id="Salesperson1" defaultMessage="starting at 12000 Bhat/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant2" defaultMessage="Meal Allowance: 500 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant3" defaultMessage="Accommodation Allowance: 500 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant4" defaultMessage="Transportation Allowance: 250 Baht/Month" />
                <br></br><br></br>< FormattedMessage id="Assistant5" defaultMessage="Probationary Period: 3 Months" />
                <br></br><br></br>< FormattedMessage id="Assistant6" defaultMessage="Insurance (After Probationary Period)" />
                <br></br><br></br>< FormattedMessage id="Assistant7" defaultMessage="Award: 300 Baht/Month (100% Attendance/Month)" />
                <br></br><br></br>< FormattedMessage id="Assistant8" defaultMessage="Full Time (Monday-Saturday 8:00Am-5:00PM)" />
                <br></br><br></br><br></br>< FormattedMessage id="Assistant9" defaultMessage="Skills: " />
                <br></br><br></br><li>< FormattedMessage id="Assistant13" defaultMessage="Intermediate level of Thai in reading, writing, listening and speaking (Required) " /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant11" defaultMessage="Knowledge of computer e.g. Excel, Word and Email (Required)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant10" defaultMessage="Intermediate level of Mandarin in reading, writing, listening and speaking (Preferred)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Assistant14" defaultMessage="Intermediate level of English in reading, writing, listening and speaking (Preferred)" /></li>
                <br></br><br></br><li>< FormattedMessage id="Salesperson2" defaultMessage="More than 3 years of experience as a salesperson (Preferred)" /></li>
                <br></br><br></br>< FormattedMessage id="Assistant16" defaultMessage="If you have any questions or would like to apply, please feel free to " /><Link to="/contact">< FormattedMessage id="contact_link" defaultMessage=" contact us" /></Link>
                </div>,
        })
    };

    render() {
        return (
            <>
                <Container className="mt-5 text-center">
                    <Row > 
                        <Col className="mt-5 cursor" onClick={this.onClick_apply}>
                        <FontAwesomeIcon  style={{width:"250px", height:"250px"}}  icon={faFileSignature} />
                        <h2>< FormattedMessage id="Applying" defaultMessage="Applying" /></h2>
                        </Col>
                        <Col className="mt-5 cursor" onClick={this.onClick_assistant}>
                        <FontAwesomeIcon  style={{width:"250px", height:"250px"}} icon={faDollarSign} />
                        <h2>< FormattedMessage id="Assistant" defaultMessage="Assistant" /></h2>
                        </Col>
                        <Col className="mt-5 cursor" onClick={this.onClick_sales}>
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
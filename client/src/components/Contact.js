import React, { Component } from 'react';

import { Container, Button, Form } from 'react-bootstrap';
import { FormattedMessage} from 'react-intl';
import { Modal_component } from "./shared_components/modal.component"
import axios from 'axios';

export default class Product extends Component {
    constructor(props) {
        super(props);


    this.onSubmit = this.onSubmit.bind(this);
    this.form_onChange = this.form_onChange.bind(this);   
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        form_email: '',
        form_msg: '',
        clock_src: 'https://freesecure.timeanddate.com/clock/i788q8tc/n28/fs32/tct/pct/ftb/tt0/td1/th1/ta1/tb4',
        clock_height:"80",
        email_validated: false,
        msg_validated: false,
        trigger:false,
        modal_msg:""

    }


    }

    componentDidUpdate(prevProps) {

        if(prevProps.locale!=this.props.locale){
            if(this.props.locale=="en"){
                this.setState({ clock_src: 'https://freesecure.timeanddate.com/clock/i788q8tc/n28/fs32/tct/pct/ftb/tt0/td1/th1/ta1/tb4',
                clock_height:"80"
            });
            }else if(this.props.locale=="zh"){
                this.setState({ clock_src: 'https://freesecure.timeanddate.com/clock/i788q8tc/n28/tlcn8/fs32/tct/pct/ftb/tt0/td1/th1/ta1/tb4',
                clock_height:"90" });
            }else{
                this.setState({ clock_src: 'https://freesecure.timeanddate.com/clock/i788q8tc/n28/tlth39/fs32/tct/pct/ftb/tt0/td1/th1/ta1/tb4',
                clock_height:"100" });
            }
        
        }


    }

    handleClose() {
        this.setState({
            trigger: false
        })
    };

    onSubmit(e) {
        //prevent default action such as reloading the page
        e.preventDefault();

        if(this.state.email_validated === true && this.state.msg_validated === true){

        
            this.setState({
                modal_msg: "The message is sent",
                trigger: true
            })


            axios.get('/api/api/form')
            .then(res => {
                console.log(res.data)

            })
            .catch((error) => {
                console.log(error);
            })


        }else{
            this.setState({
                modal_msg: "Please fill out the form",
                trigger: true
            })
        }




    }

    form_onChange(e) {

        if(e.target.type=="email"){
            this.setState({
                form_email: e.target.value,
                email_validated:e.currentTarget.checkValidity()
            });
            
        }else {
            this.setState({
                form_msg: e.target.value,
                msg_validated:e.currentTarget.checkValidity()
            });

        }


    }

    render() {
        return (
        <>
            <Container className="bg_color2 mt-5 text-center py-5">
 
                <h1 style={{borderBottom:"solid white", textAlign:'center'}} className="mb-3 pb-3">< FormattedMessage id="open_time" defaultMessage="Opening Hours" /></h1>
                <p>8:00am - 5:00pm</p>
                <p>< FormattedMessage id="open_day" defaultMessage="Monday - Saturday" /></p>
                <p>ICT UTC+7 < FormattedMessage id="time_zone" defaultMessage="(Bangkok Thailand Time)" /></p>
                <iframe className="shadow_custom" src={this.state.clock_src} frameborder="0" width="468" height={this.state.clock_height}></iframe>

            </Container>

            <Container className="bg_color3 mt-5 text-center py-5">

            <Form validated={true}>
            <h1 style={{borderBottom:"solid white", textAlign:'center'}} className="mb-3 pb-3">Form</h1>
            <Form.Group controlId="formBasicEmail">
                <div className="text-left my-3"><Form.Label>Email</Form.Label></div>
                <Form.Control required type="email" placeholder="Enter email" onChange={this.form_onChange}/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <div className="text-left my-3"><Form.Label>Message</Form.Label></div>

                <Form.Control required as="textarea" placeholder="Message" onChange={this.form_onChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.onSubmit}>
                Submit
            </Button>
            </Form>

            </Container>

            <Modal_component msg={this.state.modal_msg} handleClose={this.handleClose}  trigger={this.state.trigger}/>
                
        </>
            )
    }
}
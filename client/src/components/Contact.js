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
        email_validated: false,
        msg_validated: false,
        trigger:false,
        modal_msg:"",
        successful_msg:"The message is sent",
        unsuccessful_msg:"Please fill out the form and check your email",

    }


    }

    componentDidUpdate(prevProps) {

        if(prevProps.locale!=this.props.locale){
            if(this.props.locale=="en"){
                this.setState({ 
                successful_msg:"The message is sent",
                unsuccessful_msg:"Please fill out the form and check your email"
            });
            }else if(this.props.locale=="zh"){
                this.setState({ 
                successful_msg:"消息已发送",
                unsuccessful_msg:"请填写表格并检查您的电子邮件"
            });
            }else{
                this.setState({ 
                successful_msg:"ส่งข้อความแล้ว",
                unsuccessful_msg:"กรุณากรอกแบบฟอร์มและตรวจสอบอีเมลของคุณ"
            });
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

        


            const form_data ={
                email: this.state.form_email,
                msg: this.state.form_msg,
                lang: this.props.locale
            }

            axios.post('/api/api/form',form_data)
            .then(res => {
              

                if(res.data==="valid"){
                    this.setState({
                        modal_msg: this.state.successful_msg,
                        trigger: true
                    })
                }
                else{
                    this.setState({
                        modal_msg: this.state.unsuccessful_msg,
                        trigger: true
                    })

                }

            })
            .catch((error) => {
                console.log(error);
            })


        }else{
            this.setState({
                modal_msg: this.state.unsuccessful_msg,
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
               

            </Container>

            <Container className="bg_color3 mt-5 text-center py-5">

            <Form validated={true}>
            <h1 style={{borderBottom:"solid white", textAlign:'center'}} className="mb-3 pb-3">< FormattedMessage id="form_title" defaultMessage="Comment Form" /></h1>
            <Form.Group controlId="formBasicEmail">
                <div className="text-left my-3"><Form.Label>Email</Form.Label></div>
                <Form.Control required type="email" placeholder="Enter email" onChange={this.form_onChange}/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <div className="text-left my-3"><Form.Label>< FormattedMessage id="form_msg" defaultMessage="Message" /></Form.Label></div>

                <Form.Control required as="textarea" placeholder="Message" onChange={this.form_onChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.onSubmit}>
            < FormattedMessage id="form_submit" defaultMessage="Submit" />
            </Button>
            </Form>

            </Container>

            <Modal_component msg={this.state.modal_msg} handleClose={this.handleClose}  trigger={this.state.trigger}/>
                
        </>
            )
    }
}
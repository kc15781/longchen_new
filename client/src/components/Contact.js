import React, { Component } from 'react';
import { faFacebook, faYoutube, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import Card from 'react-bootstrap/Card'
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage} from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { clock_src: 'https://freesecure.timeanddate.com/clock/i788q8tc/n28/fs32/tct/pct/ftb/tt0/td1/th1/ta1/tb4',
    clock_height:"80"
    };
       
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

    render() {
        return (

            <Container className="bg_color2 mt-5 text-center py-5">
 
                <h1 style={{borderBottom:"solid white", textAlign:'center'}} className="mb-3">Opening Hours</h1>
                <p>8:00am - 5:00pm</p>
                <p>< FormattedMessage id="open_day" defaultMessage="Monday - Saturday" /></p>
                <p>ICT UTC+7 < FormattedMessage id="time_zone" defaultMessage="(Bangkok Thailand Time)" /></p>
                <iframe className="shadow_custom" src={this.state.clock_src} frameborder="0" width="468" height={this.state.clock_height}></iframe>

            </Container>
            )
    }
}
import { FormattedMessage} from 'react-intl';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../Stylesheet/Stylesheet_bottom.css'

export const Bottom_component = (props) => {
 
    return (
     <div className="">
      <Row className="text-center justify-content-center align-items-center">
        <div className=" col-sm-12 col-xl-6  mb-5">
          <div className="col-9 col-md-6 col-lg-4 col-xl-6  mx-auto"><Image src={process.env.PUBLIC_URL + '/logo/logo.png'} className=" shadow_custom" fluid/></div>
          <div className=" mt-4 break" >
            <h3>< FormattedMessage id="bottom_heading" defaultMessage="Longbee packaging (Thailand) Co., LTD." /></h3>
            <div className="text-left ml-4 pl-4" style={{borderLeft:"solid red"}}>
            <h5>Tel: +66 (0)38190623</h5>
            <h5>Email : longchenthai@hotmail.co.th</h5>
            <h5>Wechat ID : kailung123</h5>
            <h5>Line ID : 123kailungchu</h5>
            <h5>< FormattedMessage id="bottom_address" defaultMessage="Address : 112/5 Moo.9 T.Nongirun A.Banbueng Chonburi 20220 Thailand" /></h5>
          </div>
          </div>
          <Row className=" ml-1">
          
          <div className="col-3 col-sm-2 col-md-1 col-xl-2"><a target="_blank" href="https://www.facebook.com/lonchentechnology/?fref=ts"><FontAwesomeIcon className="" icon={faFacebook} /></a></div>
          <div className="col-3 col-sm-2 col-md-1 col-xl-2" ><a target="_blank" href="https://www.youtube.com/channel/UCupIo_KRbuer49IVttC4TJw"><FontAwesomeIcon className="" icon={faYoutube} /></a></div>
          <div className="col-3 col-sm-2 col-md-1 col-xl-2"><a target="_blank" href="https://plus.google.com/103007775948380259681"><FontAwesomeIcon className="" icon={faGooglePlus} /></a></div>
          </Row>
        </div>
        <div className=" col-sm-12 col-xl-6 mb-5">

            <iframe className="shadow_custom" frameBorder="0" style={{ width: "100%", height: "400px"}} 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.15209723009525!2d101.1825563790841!3d13.254528240924275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102d3ee01fa37c7%3A0x57e9b639d5ea01e2!2z5rOw5ZyL6ZqG576p56eR5oqA6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1635925347979!5m2!1sen!2stw" >
            </iframe>

        </div>
      </Row>
     </div>
     
    );
  
}


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
            <h3>< FormattedMessage id="bottom_heading" defaultMessage="Longchen Technology Co., Ltd. Thailand" /></h3>
            <div className="text-left ml-4 pl-4" style={{borderLeft:"solid red"}}>
            <h5>Tel: +66 (0)38190623Y</h5>
            <h5>Fax : +66 (0)38190624</h5>
            <h5>Email : longchenthai@hotmail.co.th</h5>
            <h5>Wechat ID : kailung123</h5>
            <h5>Line ID : 123kailungchu</h5>
            <h5>< FormattedMessage id="bottom_address" defaultMessage="Address : 52/1 Moo 1 Mapphai, Ban Bueng, Chonburi 20170 Thailand" /></h5>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.97206740506!2d101.0925023143996!3d13.3520129906071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d33a21236698d%3A0x2a0341a6483b3dd3!2zTG9uZ2NoZW4gVGVjaG5vbG9neSBDby4sIEx0ZC4gVGhhaWxhbmQg5rOw5Zu96ZqG5oyv56eR5oqA5pyJ6ZmQ5YWs5Y-4IOC4muC4o-C4tOC4qeC4seC4lyDguKvguKXguIcg4LmA4LiI4Li04LmJ4LiZIOC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4tSDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2suk!4v1496621104975">
            </iframe>

        </div>
      </Row>
     </div>
     
    );
  
}


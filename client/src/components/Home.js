import React, { Component } from 'react';

import { FormattedMessage} from 'react-intl';

import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {Carousel_component} from './shared_components/carousel.component.js'
import {Circle_component} from './shared_components/circle.component.js'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.src_product=['sup1', 'sup2','sup3','sup4','cloth','sponge','polisher','hooks','hook','hook_set','soap','toothbrush','towel'];

        this.product_title= [< FormattedMessage id="supa1" defaultMessage="SupaMop I" />, < FormattedMessage id="supa2" defaultMessage="SupaMop II" />,
        < FormattedMessage id="supa3" defaultMessage="SupaMop III" />,< FormattedMessage id="supa4" defaultMessage="SupaMop IV" />,
        < FormattedMessage id="supa5" defaultMessage="SupaMop V (Magic Cloth)" />,< FormattedMessage id="sponge" defaultMessage="Magic Sponge" />,
        < FormattedMessage id="polish" defaultMessage="Polish Mop" />,< FormattedMessage id="hooks" defaultMessage="Hook Rack" />,
        < FormattedMessage id="hook" defaultMessage="Hook" />,< FormattedMessage id="collection" defaultMessage="Whole Set Of Supa Magic Hook Collection Products" />,
        < FormattedMessage id="soap" defaultMessage="Soap Dish" />,
        < FormattedMessage id="tooth" defaultMessage="Toothbrush Holder " />,< FormattedMessage id="towel" defaultMessage="Towel Rack" />];

        this.product_directory="./pictures/product_img/home_page/";
        this.src_company=['1', '2','3','4','5','6','7','8','9','10','11','12','13','14'];

        this.company_title= [< FormattedMessage id="gate" defaultMessage="Front gate" />, < FormattedMessage id="office" defaultMessage="Office" />,
        < FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="factory" defaultMessage="Factory" />,
        < FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="factory" defaultMessage="Factory" />,
        < FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="factory" defaultMessage="Factory" />,< FormattedMessage id="office" defaultMessage="Office" />,
        < FormattedMessage id="office" defaultMessage="Office" />,< FormattedMessage id="office" defaultMessage="Office" />,< FormattedMessage id="office" defaultMessage="Office" /> ];
        this.company_directory="./pictures/company/";
        
        this.state = { map_directory: '.png' };

        this.circle_heading=[[< FormattedMessage id="circle1_h" defaultMessage="Land" />,< FormattedMessage id="circle2_h" defaultMessage="Number of workers" />],
        [< FormattedMessage id="circle3_h" defaultMessage="Number of machines" />,< FormattedMessage id="circle4_h" defaultMessage="Customisation" />],
        [< FormattedMessage id="circle5_h" defaultMessage="Total Assets" />,< FormattedMessage id="circle6_h" defaultMessage="Awards" />]];

    this.circle_detail=[[ <React.Fragment>35200 m<sup>2</sup></React.Fragment>,"58"],
    [<React.Fragment><div>30 < FormattedMessage id="circle3_d" defaultMessage="machines"/></div><div>120 - 650t</div></React.Fragment>,"ODM"],
    ["260M ฿","7-Catalog"]];
   
    }
    componentDidUpdate(prevProps) {

        if(prevProps.locale!=this.props.locale){
            if(this.props.locale=="en"){
                this.setState({ map_directory: '.png' });
            }else if(this.props.locale=="zh"){
                this.setState({ map_directory: '_chinese.png' });
            }else{
                this.setState({ map_directory: '_thai.png' });
            }
        
        }



    }

    componentDidMount(){
        AOS.init({
            duration : 1000,
            easing: 'ease-in-sine',  
            delay: 0
        })
        
    }

    render() {
     

        
        return (
            <div>

                <Container className="bg_color2 px-5 pt-1 pb-5 mt-5 " >
                    <div className="embed-responsive embed-responsive-16by9 mt-5 shadow_custom">
                    <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/UcZmM48AC5k" allowFullScreen></iframe>
                    </div>
                </Container>
                
            

                    <div className="bg_color3 px-5  py-5 mt-5">
                     
                   
                        <h1 className="mb-5 " style={{borderBottom:"solid white", textAlign:'center'}}>< FormattedMessage id="History_title" defaultMessage="Our History" /></h1> 
       

                  

                    <div className=" mb-5">

                        

                        <p>< FormattedMessage id="intrduction1" defaultMessage="Mr. Chen-I Chu was the president of Chonburi Thai-Taiwan business association for 2 consecutive years and currently the manager of Longchen Technology Co., Ltd. in Thailand, which is affiliated with Longbee Plastic Co., Ltd. in Taiwan wholly-owned by Mr. Longyi Chu." /></p>

                        <p>< FormattedMessage id="intrduction2" defaultMessage="Longbee Plastic Co., Ltd., since its original founding year of 1960, has been challenged by a series of product requirements and designs due to its broad and experienced knowledge in plastic injection moulding. The company is widely known and trusted in this particular specialised field. Mr. Longyi Chu, father of Mr. Chen-I Chu, further excelled in his career by becoming the only president of plastic business association to have taken the position for 2 consecutive years in Hsinchu city, Taiwan whilst no one else has taken it for more than one year." /></p>

                        <p>< FormattedMessage id="intrduction3" defaultMessage="On Mr. Longyi Chu's request, Longbee Plastic Co., Ltd. was set up in Thailand by Mr. Chen-I Chu in 2002. Later in 2014 the company expanded in size and relocated to Chonburi. About the same time it was renamed to Longchen Technology Co., Ltd. and currently the size increased to 35200 " />< FormattedMessage id="intrduction3_1" defaultMessage={<React.Fragment> m<sup>2</sup></React.Fragment>} />< FormattedMessage id="intrduction3_2" defaultMessage="." /></p>


                    </div>



                   
                    
                    <Row className="bg_color5 shadow_custom" data-aos="flip-left">
                        <div className="col-auto ml-auto ">   
                            <Image src={"./pictures/taiwan_mark"+this.state.map_directory} style={{height:"500px"}} />
                        </div>    
                      
                        <div className="col-auto mr-auto ">   
                        
                        
                       <Image src={"./pictures/thailand_mark"+this.state.map_directory} style={{height:"500px"}} />
                          
                        </div>
                        
                    </Row>   
                   


                        
                        <div className=" mt-5 ">

                            
                            <p>< FormattedMessage id="intrduction4" defaultMessage="Longchen Technology Co., Ltd has superior experience in production of several plastic products, including electronics, automobile components, treadmills, hospital beds and many more. All products produced are either self-designed or patents are bought which legally allow the production. At present, SupaMop is the most famous manufactured product across South-East Asia and Europe. The company's management philosophy is to provide an optimal working environment for the workers up to a degree that the company would be seemingly their home. This is achieved in order to boost the productivity and quality of the products and thus satisfying the customers. The factory has a number of injection presses ranging from 120 to 650 tonnes and in total 30 machines are fully functional." /></p>

                            <p>< FormattedMessage id="intrduction5" defaultMessage="Following Mr. Chen-I Chu's success in business and furthermore due to his altruistic personality he was elected to be the 24th and 25th president of Chonburi Thai-Taiwan business association. Nevertheless, he continued to excel in his career and reputation while he was the president via hosting, organising and promoting several overwhelmingly positive events and also succeeding in several competitions. For example, during sports day 2014, a sports competition between various Thai-Taiwan business associations of different Thai provinces and Chonburi association managed to win the most prizes out of all groups. It was a glorious achievement as it was the first time that Chonburi association achieved a first in sports day." /></p>

                            <p>< FormattedMessage id="intrduction6" defaultMessage="Mr. Chen-I Chu has claimed that it is an honour to be given the chance to develop the family business in Thailand and further enhancing his interest and knowledge of Buddhism in a country where it is widely practiced. Moreover, he strongly believes it is crucial to build a community, in which everyone would love to help each other and he would personally be the role model for it striving to solve problems for all kinds of people within the community." /></p>

                        </div>



                    
                    

                    </div>

                

                <Container className="mt-5 bg_color2">
                 <h1 className="mb-1 pt-5" style={{borderBottom:"solid white", textAlign:'center'}}>< FormattedMessage id="Products_title" defaultMessage="Our Products" /></h1>   
                 <Row>
                 <div className="col-12 col-xl-6">
                 <Carousel_component  src={this.src_product} title={this.product_title} directory={this.product_directory}/>
                 </div>   
                 <div className="col-12 col-xl-6 mt-5">
                        
                        <p>< FormattedMessage id="product_1" defaultMessage="Longchen Technology is a company based in Chonburi, Thailand that utilises injection molding technology to manufacture high quality plastic products." /></p>

                        <p>< FormattedMessage id="product_2" defaultMessage="Our self-designed products are manufactured by us and sold directly to large supermarkets and wholesalers. Apart from these products, we also manufacture customised plastic components from other companies." /></p>

                        <p>< FormattedMessage id="product_3" defaultMessage="The company's main products are household goods (e.g. SupaMop and polisher) and bathroom accessories (hook, towel rack, toothbrush holder, soap dish and hook rack)." /></p>

                        <p>< FormattedMessage id="product_4" defaultMessage="For more information, please visit our"/><Link to="/products">< FormattedMessage id="products_link" defaultMessage=" products page." /></Link><FormattedMessage id="product_6" defaultMessage=" " /></p>

                        <p>< FormattedMessage id="product_5" defaultMessage="If you have any questions, please feel free to" /><Link to="/contact">< FormattedMessage id="contact_link" defaultMessage=" contact us." /></Link></p>

                 </div>   
                 </Row>
                </Container>
                
                <Container className="mt-5">
                <Circle_component  detail={this.circle_detail} heading={this.circle_heading}/>
                </Container>

                <Container className="mt-5">
                
                <Carousel_component  src={this.src_company} title={this.company_title} directory={this.company_directory}/>
                 
                 </Container>








            </div>

        );


    }

}
import React, { Component } from 'react';
import { Row, Container, Table } from 'react-bootstrap';
import './Stylesheet/Stylesheet_product.css'
import axios from 'axios';
import { FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';
import {Carousel_component} from './shared_components/carousel.component.js'

export default class Product extends Component {
    constructor(props) {
        super(props);


        this.state = { detail:{
            table_eng:[[""],[""]],
            table_th:[[""],[""]],
            table_zh:[[""],[""]],
            col:1,
            img_path:"",
            img:["",""]
        },
        none_exist:""
                     };
        


    }

    
    componentDidMount(){
        this.detail();

    }

    detail() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let product = params.get('product');
      

        
        const product_data ={
            product: product
        }

            axios.post('/api/api/detail',product_data)
            .then(res => {

            if(res.data[0]){
                this.setState({
                    detail: res.data[0],
                    none_exist:""
                    
                })

                
            }
            else{
                this.setState({
                    none_exist:"1"
                    
                })  
            }



            //if nothing found need to a code to redirect the page
        
            })
            .catch((error) => {
                console.log(error);
            })

    }


    tb_content(i,ii){
        if(this.props.locale=="en"){return(this.state.detail.table_eng[1][i][ii])}
        else if(this.props.locale=="th"){return(this.state.detail.table_th[1][i][ii])}
        else if(this.props.locale=="zh"){return(this.state.detail.table_zh[1][i][ii])}
        }

    tb_heading(i){
        if(this.props.locale=="en"){return(this.state.detail.table_eng[0][i])}
        else if(this.props.locale=="th"){return(this.state.detail.table_th[0][i])}
        else if(this.props.locale=="zh"){return(this.state.detail.table_zh[0][i])}
        }
    
    title(){
        if(this.props.locale=="en"){return(this.state.detail.product_title_eng)}
        else if(this.props.locale=="th"){return(this.state.detail.product_title_th)}
        else if(this.props.locale=="zh"){return(this.state.detail.product_title_zh)}
        }    
    col(index,index1){
        if(index1===0){return (1)}
        else {return (Number(this.state.detail.col)+1-this.state.detail.table_eng[1][index].length)}
        
    }


    render() {
        

        // need to add carousel



        return (
          
            <div>
            {this.state.detail.table_eng[0][0]!=="" && <>
              <Container className="mt-5">
                  <h1>{this.title()}</h1>
              </Container>



              <Container className="mt-5 break">
                <Row>
                <div className="col-12">
                <Table striped bordered hover >
                <thead>
                    <tr>
                    <th >{this.tb_heading(0)}</th>
                    <th colSpan={Number(this.state.detail.col)+1-this.state.detail.table_eng[0].length}>{this.tb_heading(1)}</th>
                    </tr>
                </thead>
                <tbody>

                    
                    {this.state.detail.table_eng[1].map((value, index) => {
                            
                                    return (<tr key={"row"+index}>
                                    {this.state.detail.table_eng[1][index].map((value1, index1) => {
                                        return (     
                                                    <td key={"col"+index1} colSpan={this.col(index,index1)}>{this.tb_content(index,index1)}</td>
                                                )
                                    })}
                                    </tr>)

                    })}
                    
                    <tr>
                    <td  colSpan={Number(this.state.detail.col)}>< FormattedMessage id="product_5" defaultMessage="If you wish to purchase or you have any questions, please " /><Link to="/Contact">< FormattedMessage id="contact_link" defaultMessage="contact us" /></Link></td>
                    </tr>
                </tbody>
                </Table>
                </div>
                </Row>

              </Container>    


              <Container className="mt-5">
                 <Row>
                 <div className="mx-auto col-12 col-md-10">
                 <Carousel_component src={this.state.detail.img} title={[]} directory={this.state.detail.img_path}/>
                 </div>
                 </Row> 
              </Container>

              </> }

              {this.state.none_exist==="1" && 
              
              <Container className="mt-5 text-center"><h1>< FormattedMessage id="none_exist" defaultMessage="The product you are looking for doesn't exist" /></h1></Container>
              
               }

               {this.state.detail.table_eng[0][0]==="" && this.state.none_exist!=="1" &&
              
              <Container className="mt-5 text-center"><h1>< FormattedMessage id="Loading" defaultMessage="Loading" /></h1></Container>
              
               }

            </div>

            )



    // need to add 3d model



    }
}
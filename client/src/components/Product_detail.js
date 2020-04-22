import React, { Component } from 'react';
import { Row, Col, Container, Image, Table } from 'react-bootstrap';
import './Stylesheet/Stylesheet_product.css'
import axios from 'axios';
import { FormattedMessage} from 'react-intl';
import { Link,Redirect } from 'react-router-dom';
export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { detail:{
            table_eng:[[""],[""]],
            table_th:[[""],[""]],
            table_zh:[[""],[""]],
            col:1
        }
                     };
        this.detail();


    }

    


    detail() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let product = params.get('product');
        

        if(product){
        const product_data ={
            product: product
        }

            axios.post('/api/api/detail',product_data)
            .then(res => {
    
              this.setState({
                detail: res.data[0]
            })

     
        
            })
            .catch((error) => {
                console.log(error);
            })}

    }


    tb_content(i,ii){
        if(this.props.locale=="en"){return(this.state.detail.table_eng[i][ii])}
        else if(this.props.locale=="th"){return(this.state.detail.table_th[i][ii])}
        else if(this.props.locale=="zh"){return(this.state.detail.table_zh[i][ii])}
        }


    render() {
        // need a title

        // need to add carousel



        return (

            <div>
              <Container className="mt-5">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th >{this.tb_content(0,0)}</th>
                    <th colspan={Number(this.state.detail.col)+1-this.state.detail.table_eng[0].length}>{this.tb_content(0,1)}</th>
                    </tr>
                </thead>
                <tbody>

                    
                    {this.state.detail.table_eng.map((value, index) => {
                            
                                    return ( <> {index!=0 &&   <tr>
                                    {this.state.detail.table_eng[index].map((value1, index1) => {
                                        return (    <>     

                                                        {index1!=0 &&
                                                        <td colspan={Number(this.state.detail.col)+1-this.state.detail.table_eng[index].length}>{this.tb_content(index,index1)}</td>
                                                        }

                                                        {index1==0 &&
                                                        <td>{this.tb_content(index,index1)}</td>
                                                        }
                                                    </>
                                                )
                                    })}
                                    </tr>} </>)

                    })}
                    
                    <tr>
                    <td colspan={Number(this.state.detail.col)}>< FormattedMessage id="product_5" defaultMessage="If you wish to purchase or you have any questions, please " /><Link to="/Contact">< FormattedMessage id="contact_link" defaultMessage="contact us" /></Link></td>
                    </tr>
                </tbody>
                </Table>

              </Container>    
            </div>

            )



    // need to add 3d model



    }
}
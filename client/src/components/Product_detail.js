import React, { Component } from 'react';
import { Row, Col, Container, Image, Table } from 'react-bootstrap';
import './Stylesheet/Stylesheet_product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { detail:{
            table_eng:[[""],[""]],
            col:1
        }
                     };
        this.detail();


    }



    detail() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let product = params.get('product');

        console.log(product);


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
            })
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
                    <th >{this.state.detail.table_eng[0][0]}</th>
                    <th colspan={Number(this.state.detail.col)+1-this.state.detail.table_eng[0].length}>{this.state.detail.table_eng[0][1]}</th>
                    </tr>
                </thead>
                <tbody>

                    
                    {this.state.detail.table_eng.map((value, index) => {
                            
                                    return ( <> {index!=0 &&   <tr>
                                    {this.state.detail.table_eng[index].map((value1, index1) => {
                                        return (    <>     

                                                        {index1!=0 &&
                                                        <td colspan={Number(this.state.detail.col)+1-this.state.detail.table_eng[index].length}>{this.state.detail.table_eng[index][index1]}</td>
                                                        }

                                                        {index1==0 &&
                                                        <td>{this.state.detail.table_eng[index][index1]}</td>
                                                        }
                                                    </>
                                                )
                                    })}
                                    </tr>} </>)

                    })}
                    
                    <tr>
                    <td colspan={Number(this.state.detail.col)}>If you wish to purchase or you have any questions, please <Link to="/Contact">contact us</Link></td>
                    </tr>
                </tbody>
                </Table>

              </Container>    
            </div>

            )



    // need to add 3d model



    }
}
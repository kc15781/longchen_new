import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import axios from 'axios';

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { product_collection:[],
                       product:[]
                     };



    }

    componentDidMount(){
        this.product()
    }


    product() {

            axios.post('/api/api/products')
            .then(res => {
              
              this.setState({
                product_collection: res.data[0],
                product:res.data[1]
            })
            console.log(this.state.product[0])

            })
            .catch((error) => {
                console.log(error);
            })
    }




    render() {




        return (

            <div>
                
                {this.state.product_collection.map((value, index) => {
                    return (         
                            <Container>
                                <Row>

                                <h1 className="my-5 col-12">{this.state.product_collection[index]}</h1>


                                    {this.state.product.map((value_product, index_product) => {
                                        return (    <>     

                                                     {this.state.product[index_product].product_collection==value && 
                                                            <Col>{this.state.product[index_product].product_title}</Col>}
                                                    </>
                                                )
                                    })}

                                </Row>
                            </Container>
                        )
                })}

                
            </div>

            )
    }
}
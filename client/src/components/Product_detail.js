import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './Stylesheet/Stylesheet_product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { product_collection:[],
                       product:[]
                     };

console.log(props.locale)

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
                            <Container >
                                <Row >

                                <h1 className="my-5 col-12">{this.state.product_collection[index]}</h1>


                                    {this.state.product.map((value_product, index_product) => {
                                        return (    <>     

                                                     {this.state.product[index_product].product_collection_eng==value && 
                                                            <Link className="product_img"  to="/"><div className="my-5 col-auto">
                                                                <Image className="shadow_custom mb-3" src={"./pictures/product_img/product_page/"+this.state.product[index_product].image} style={{height:"250px"}} />
                                                                <h2 className="text-center">{this.state.product[index_product].product_title_eng}</h2>
                                                            </div></Link>}
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
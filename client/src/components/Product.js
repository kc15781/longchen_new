import React, { Component } from 'react';
import { Row, Container, Image } from 'react-bootstrap';
import './Stylesheet/Stylesheet_product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
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

            axios.get('/api/api/products')
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

    product_title(index,index_product){
    if(this.props.locale==="en"){return(this.state.product[index][index_product].product_title_eng)}
    else if(this.props.locale==="th"){return(this.state.product[index][index_product].product_title_th)}
    else if(this.props.locale==="zh"){return(this.state.product[index][index_product].product_title_zh)}
    }

    product_collection(index){
        if(this.props.locale==="en"){return(this.state.product[index].product_collection_eng)}
        else if(this.props.locale==="th"){return(this.state.product[index].product_collection_th)}
        else if(this.props.locale==="zh"){return(this.state.product[index].product_collection_zh)}
        }


    render() {

        

        return (

            <div>
                
                {this.state.product_collection.map((value, index) => {
                    return (         
                            <Container key={"container"+index}>
                                <Row>

                                <h1 className="my-5 col-12">{this.product_collection(index)}</h1>


                                    {this.state.product[index].map((value_product, index_product) => {
                                        return (         

                                                     
                                                            <Link className="product_img col-12 col-sm-8 col-md-6 col-lg-4" key={"link"+index_product}  to={"/Product_detail?product="+this.state.product[index][index_product].product_title_eng} >
                                                                <Image className="shadow_custom mb-3" src={"./pictures/product_img/product_page/"+this.state.product[index][index_product].image} fluid />
                                                                <h2 className="text-center">{this.product_title(index,index_product)}</h2>
                                                            </Link>
                                                    
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
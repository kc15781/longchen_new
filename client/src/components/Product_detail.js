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
console.log(props.locale)

    }



    detail() {

            axios.get('/api/api/detail')
            .then(res => {
    
              this.setState({
                detail: res.data[0]
            })

            console.log(Number(this.state.detail.col))
        
            })
            .catch((error) => {
                console.log(error);
            })
    }




    render() {




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
    }
}
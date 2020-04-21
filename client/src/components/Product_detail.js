import React, { Component } from 'react';
import { Row, Col, Container, Image, Table } from 'react-bootstrap';
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






    render() {




        return (

            <div>
              <Container className="mt-5">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>

              </Container>    
            </div>

            )
    }
}
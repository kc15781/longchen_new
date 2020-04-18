import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'


export default class Product extends Component {
    constructor(props) {
        super(props);

this.group=["group1"];
        this.state = { product_list:[ [ this.group[0],this.group[0] ] ,  [ this.group[0],this.group[0] ] ],
             group_list: [  this.group[0],this.group[0]  ]
    };

console.log(this.state.group_list)
console.log(this.state.product_list)
    }



    render() {
        return (

            <div>
fdfsdfds
                
 
            </div>

            )
    }
}
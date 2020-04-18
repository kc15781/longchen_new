import React, { Component } from 'react';

import { Redirect } from "react-router-dom";

export default class Error extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <>
                <h1>
                    404 Page
                </h1>
                <p>Please contact admin (kc15781@my.bristol.ac.uk)</p>
            </>
            )
    }
}
import React, { Component } from 'react';


export default class Employment extends Component {
    constructor(props) {
        super(props);


        this.state = { exercises: [] };
    }



    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
      
                    </tbody>
                </table>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { connect } from 'react-redux';

class MyDropdown extends Component {
    constructor(props){
        super(props)
    }

    handleOnchangeDropdown(e){
        console.log("dropdown change");
        console.log(e.target.value);
    }

    render() {
        return (
            <select onChange={e=>this.handleOnchangeDropdown(e)}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select >
        );
    }
}



export default MyDropdown
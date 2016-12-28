import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeNumberDropdown } from '../actions/dropdownActions';

class MyDropdown extends Component {
    constructor(props) {
        super(props)
    }

    handleOnchangeDropdown(e) {
        console.log("dropdown change");
        console.log(e.target.value)
        const val = e.target.value
        this.props.changeThisDropdown(val)
    }

    render() {
        return (
            <select onChange={e => this.handleOnchangeDropdown(e)}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeThisDropdown: (value) => {
            dispatch(changeNumberDropdown(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyDropdown);
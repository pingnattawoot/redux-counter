import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { changeTextInput } from '../actions/dropdownActions'

class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { bgColor: 'yellow' };
    }



    handleInputChange(e) {
        const val = e.target.value;
        console.log(val);
        console.log(val.length);
        this.props.changeThisInput(val);
        if (val.length % 3 == 0) {
            this.setState({ bgColor: 'yellow' });
        } else if(val.length % 3 == 1) {
            this.setState({ bgColor: 'green' });
        } else if(val.length % 3 == 2) {
            this.setState({ bgColor: 'red' });
        }
    }

    render() {
        return (
            <input style={{ backgroundColor: this.state.bgColor }} type="text" onChange={e => this.handleInputChange(e)} />
        )
    }
}

MyInput.propTypes = {
    changeThisInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeThisInput: (value) => {
            dispatch(changeTextInput(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInput);
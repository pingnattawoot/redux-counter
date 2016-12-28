import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

const MyLabel = (props) => {
    return (
        <div style={{background:'red'}}>
            value : {props.valueInput}
        </div>
    )
}

MyLabel.propTypes = {
    valueInput: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        valueInput: state.input.inputValue
    }
}

export default connect(mapStateToProps)(MyLabel);
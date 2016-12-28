import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

class MyLabel extends Component {

    render() {
        return (
            <div>
                value : {this.props.valueDropdown}
            </div>
        )
    }
}

MyLabel.propTypes = {
    valueDropdown: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        valueDropdown: state.dropdown.numberDropdownValue
    }
}

export default connect(mapStateToProps)(MyLabel);
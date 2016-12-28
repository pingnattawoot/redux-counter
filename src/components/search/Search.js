'use strict'
import React, { Component } from 'react'
import { Paper,IconButton,FontIcon,AutoComplete,Divider,List } from 'material-ui'
import { InputGroup } from 'react-bootstrap'
import { grey500 } from 'material-ui/styles/colors';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as searchActions from '../../actions/searchActions'

import SearchListCell from './cell/SearchListCell'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            showSuggestion: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.suggestions);
        this.setState({
            showSuggestion: nextProps.suggestions.length > 0
        })
    }

    handleUpdateInput(value){
        //console.log(value)
        if(value.length>1){
           this.props.actions.loadSuggestion(value) 
        }else{
            this.setState({
                showSuggestion: false
            })
        }
    }
    renderSearchSuggest(){
        if(this.props.suggestions.length > 0 && this.state.showSuggestion ){
            return (
                <List>
                    { this.props.suggestions.map((value, idx) =>{
                            if(idx <5 )
                                return <SearchListCell item = { value } actions = {this.props.actions } key = {"f"+idx}/>
                            
                      })
                    }
                </List>
            )
        }
    }
    render(){
        return (
                <div style ={containerStyle}>
                    <Paper zDepth={1} style={stylePage}>
                        <InputGroup>
                            <AutoComplete hintText="ค้นหาใน MapMagic" 
                                        style={styleSearchInput} 
                                        underlineShow={false}
                                        dataSource={[]}
                                        onUpdateInput={ (e) => this.handleUpdateInput(e)}/>
                            <InputGroup.Button>
                                <IconButton tooltip="ค้นหา">
                                    <FontIcon className="material-icons md-24" color={grey500} >search</FontIcon>
                                </IconButton>
                            </InputGroup.Button>
                        </InputGroup>
                        <Divider inset={false} />
                        { this.renderSearchSuggest() }
                    </Paper>
                </div>
            )
    }
} 
const styleSearchInput = {
  marginLeft: 20,
  marginTop: 0,
  width: 240,
}
const stylePage = {
  marginTop: 20,
  marginLeft: 20,
  width: 320
}
const containerStyle = {
  position: 'absolute',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column'
}

Search.defaultProps = {
    suggestions: []
}

function mapStateToProps(state,ownProps){
    //console.log(state)
    return {
        suggestions: state.search.suggestions
    }
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(searchActions, dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
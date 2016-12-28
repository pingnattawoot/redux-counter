import React, { Component, PropTypes} from 'react'
import { List, ListItem,FontIcon,grey500 } from 'material-ui'
import Divider from 'material-ui/Divider'

class SearchListCell extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ListItem
                    leftIcon={ <FontIcon className="material-icons md-32" color={grey500} >place</FontIcon> }
                    primaryText = { this.props.item.properties.name }
                    secondaryText = { this.props.item.properties.amphoe+", "+this.props.item.properties.province } 
                    secondaryTextLines = { 1 }
                    >
                </ListItem>
                <Divider inset={false} />
            </div>
        )
    }
}
SearchListCell.propTypes = {
    item: PropTypes.object.isRequired
}
export default SearchListCell
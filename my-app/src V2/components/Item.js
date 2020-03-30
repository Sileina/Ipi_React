import React from 'react';
import MuiListItem from '@material-ui/core/ListItem';

const Item = ({ children }) => {

    return (
        <MuiListItem divider>
            <div className="item">
                {children}
            </div>
        </MuiListItem>
    )
}

export default Item;
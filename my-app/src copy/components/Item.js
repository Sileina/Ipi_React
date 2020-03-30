import React from 'react';
import ListItem from '@material-ui/core/ListItem';

// functional component de restitution
const Item = ({ children }) => {

    return (
        <ListItem button divider>
            {children}
        </ListItem>
    )

}

export default Item

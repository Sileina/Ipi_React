import React from 'react';

import ListItemMui from '@material-ui/core/ListItem';


const Item = ({ children }) => {

    return (
        <ListItemMui button className="item">
            {children}
        </ListItemMui>
    )
}

export default Item
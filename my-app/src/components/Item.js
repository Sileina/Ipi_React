import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemMui from '@material-ui/core/ListItem';

const Item = ({itemprops}) => {

    return (
        <ListItemMui>
            {/* affichage du titre item + fail checked */}
            <p>Item</p>
            {/* <Checkbox
                checked={checked.indexOf(itemprops) !== -1}
            /> */}
        </ListItemMui>
    )
}

export default Item
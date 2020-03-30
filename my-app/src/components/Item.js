import React from 'react';
import { ListItem, Checkbox } from '@material-ui/core';

/*
{
        name: 'defaultItem',
        check: true,
}
*/

const Item = ({ item, onToggleCheck }) => {

    const onItemClick = () => {
        onToggleCheck(item)
    }

    return (
        <ListItem button onClick={onItemClick}>
            {item.name}
            <Checkbox checked={item.check} />
        </ListItem>
    )
}

export default Item;

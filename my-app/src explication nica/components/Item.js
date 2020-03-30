import React, { useState } from 'react';
import MuiListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



const Item = ({ children, item }) => {

    // gestion du state de l'item
    const [singleItem, setItem] = useState([]);

    // gestion etat de l'input
    const [inpValue, setValue] = useState("");

    const templateItem = [
        {
            value: '',
            checked: false,
        }
    ];

    const handleChangeNameItem = ({ target: { inpValue } }) => setValue(inpValue);

    const addNameItem = () => {
        let newName = Array(...singleItem);
        templateItem['value'] = inpValue;
        newName.pop();
        newName.push(templateItem);
        setItem(newName);

        setValue("");
    }

    const changeChecked = () => {
        if (item['checked'] === false) {
            item['checked'] = true;
        } else {
            item['checked'] = false;
        }
        console.log(item['checked']);
    }

    const delItem = () => {
        item.pop();
    }

    return (
        <MuiListItem divider>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={item['checked']}
                    tabIndex={-1}
                    disableRipple
                    onClick={changeChecked}
                />
            </ListItemIcon>

            {children}

            <TextField
                label="ItemName"
                value={inpValue}
                onChange={handleChangeNameItem}
                variant="outlined"
            />

            <Button onClick={addNameItem}>
                {"Change itemName"}
            </Button>
            <Button onClick={delItem}>
                {"Delete item"}
            </Button>
        </MuiListItem>
    )
}

export default Item;
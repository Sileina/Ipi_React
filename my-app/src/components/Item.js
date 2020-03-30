import React, { useState } from 'react';
import { ListItem } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const Item = ({ item, ondelItem }) => {

    // useState de la checkBox
    const [checked, setChecked] = useState(item.checked);

    // gestion checked
    const handleChange = () => {
        item.checked = !item.checked;
        setChecked(!checked);
    }

    // useState pour changer le nom de l'item
    const [changedName, setChangedName] = useState("");

    // gestion checked
    const handleNameItem = (e) => {
        setChangedName(e.target.value)
    }

    const changeNameItem = () => {
        item.name = changedName;
        setChangedName("");
    }

    const onItemDelItem = () => {
        ondelItem(item);
    }


    return (
        <div className="itemSolo">
            <ListItem divider>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                />
                {item.name}
                <TextField id="outlined-basic" label="Item Name" variant="outlined" onChange={handleNameItem} value={changedName} />

                <Button onClick={changeNameItem}>
                    New Name
            </Button>
                <Button onClick={onItemDelItem}>
                    Del Item
            </Button>
            </ListItem>
        </div>

    )
}



export default Item
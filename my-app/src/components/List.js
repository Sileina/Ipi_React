import React, { useState } from 'react';
import Item from './Item';
import ListMui from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const List = ({ list, onAddItem, delList, delItem }) => {

    const [itemName, setItemName] = useState("");

    // fonction ajout d'item
    const onItem = () => {
        onAddItem(list, itemName);
        setItemName("");
    }

    // fonction de suppr de la liste
    const onDelList = () => {
        delList(list);

    }

    // gestion de l'input
    const handleNameItem = (e) => {
        setItemName(e.target.value);
    }

    const onListDelItem = (concernItem) => {
        delItem(list, concernItem);
    }

    return (
        <section>
            <ListMui>
                <h2>{list.title}</h2>
                {list.items.map((item) => <Item item={item} ondelItem={onListDelItem} />)}
                <div className="myButtons">

                    <TextField id="outlined-basic" label="Nom de l'item" variant="outlined" onChange={handleNameItem} value={itemName} />

                    <Button onClick={onItem}>
                        Add Item
                    </Button>
                    <Button onClick={onDelList}>
                        Del List
                    </Button>

                </div>
            </ListMui>
        </section>
    )
}



export default List
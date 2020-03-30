import React, { useState } from 'react';
import { List as ListMui, Button, Input } from '@material-ui/core'
import Item from './Item';

/*
{
    name: 'defaultList',
    items: [{
        name: 'defaultItem',
        check: true,
}
*/

const List = ({ list, addItem, deleteItem, onToggleCheck }) => {

    const [itemName, setItemName] = useState("")

    const onAdd = () => {
        addItem({ name: itemName, check: true }, list)
        setItemName("")
    }

    const onDelete = () => {
        deleteItem(list)
    }

    //On gére les modifications 
    const onInputChange = (e) => setItemName(e.target.value)

    return (
        <ListMui >
            {list.name}
            {
                /*
                Afficher mon tableau d'item avec un composant <Item>
                */
            }
            {list.items.map((item) => <Item item={item} onToggleCheck={onToggleCheck} />)}
            <Input style={{ display: 'block' }} value={itemName} onChange={onInputChange} />
            <Button disabled={itemName === ""} onClick={onAdd} variant={"contained"} color={"secondary"}>
                {"Add Item"}
            </Button>
            <Button disabled={list.items.length === 0} onClick={onDelete} variant={"contained"} color={"secondary"}>
                {"Delete Item"}
            </Button>
        </ListMui>
    )
}

export default List;

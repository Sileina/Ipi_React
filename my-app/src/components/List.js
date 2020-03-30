import React, { useState } from 'react';
import ListMui from '@material-ui/core/List';
import Item from '../components/Item';
import Button from '@material-ui/core/Button';

// value par default
const STORAGE_KEY = "storageKey"
const defaultItems = [1,2,3]

const List = () =>{
    const [items, setItems] = useState(defaultItems)
    const [currentItemValue, setCurrentItemValue] = useState("")
    let localvalue = localStorage.getItem(STORAGE_KEY)

    // Genération du btn ajouté
    const addItem = () => {
        const newItems = Array(...items)
        newItems.push(currentItemValue)
        setItems(newItems)

        localStorage.setItem(STORAGE_KEY, currentItemValue)
        localvalue = currentItemValue
        setCurrentItemValue("")
    }
    
    // Genération du btn supprimé
    const delItem = () => setItems(items.slice(0, items.length - 1))

    
    return(
        <div className={"list"}>
            {/* Liste de tout les items */}
            <ListMui>
                {
                    items.map((itemobjet) => <Item itemkey={itemobjet} itemprops={"test"}></Item>)
                }
                {/* <Item nbr={"14"} itemprops={"test2"}></Item> */}
            </ListMui>
            {/* affichage btn pour ajouté */}
            <Button color="primary" variant='contained' onClick={addItem}>
                {"add Item"}
            </Button>
            {/* affichage btn pour supprimé */}
            <Button color="primary" variant='contained' onClick={delItem}>
                {"Delete Item"}
            </Button>
        </div>
    )
}

export default List
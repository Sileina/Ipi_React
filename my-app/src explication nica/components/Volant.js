import React, { useState } from 'react';
import Item from './Item';
import Button from '@material-ui/core/Button';
import MaterialUiList from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';

// mise en place de la clef de stockage
// const STORAGE_KEY = "storageKey"

// let myVar = localStorage.getItem(STORAGE_KEY);

// const saveList = () => {
//     localStorage.setItem(STORAGE_KEY, list);
// }

const List = ({ children, list, addItem }) => {

    // creation du template de la liste
    // defini dans controller list
    // const tab_templateList = [
    //     {
    //         title: '', // nom de la liste
    //         items: list // le contenu de la liste
    //     }
    // ];

    // définition du useState
    // const [list, setList] = useState(tab_templateList);

    // State de la creation de l'item

    const [items, setItems] = useState(list.items);

    // State de l'input pour le nom de l'item
    const [itemName, setItemName] = useState("");


    // Fonction complémentaire du pere (addItemm de ControllerList)
    const addItemC = () => {
        // j'utilise la fonction du pere
        const setUpItem = addItem(itemName);
        items.push(setUpItem)
        setItems(items);
        // je reset la valeur de l'input
        setItemName("");
    }

    // fonction de gestion de la value de l'input pour set le nom de la liste
    const handleNameItem = (e) => {
        setItemName(e.target.value);
        // console.log(e.target.value);
    }



    // copié
    // const delListC = () => {
    //     list.items.pop();
    // }



    return (
        <section>
            <h2>{list.title}</h2>
            <MaterialUiList>

                {
                    items.map((item) => <Item item={item} />)
                }

                {children}

            </MaterialUiList>

            <TextField
                label="Add Item Name"
                value={itemName}
                onChange={handleNameItem}
                variant="outlined"
            />

            <Button onClick={addItemC}>
                {"Add item"}
            </Button>
            {/* <Button onClick={delList}>
                {"Delete List"}
            </Button> */}
            {/* <Button onClick={saveList}>
                {"Save List"}
            </Button> */}
        </section>
    )
}

export default List;
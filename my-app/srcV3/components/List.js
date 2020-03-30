import React, { useState } from 'react';
// import Item from './Item';
import Button from '@material-ui/core/Button';
import MaterialUiList from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import CheckboxItem from './CheckBoxItem';

// mise en place de la clef de stockage
const STORAGE_KEY = "storageKey"



const List = ({ children, list, fonctionAddItem, onDeleteList }) => {

    let myVarJSON = localStorage.getItem(STORAGE_KEY);

    let myVarNoJson = JSON.parse(myVarJSON);

    // console.log(myVarNoJson.items);

    // State de la creation de l'item
    // const [items, setItems] = useState(list.items);
    const [items, setItems] = useState(myVarNoJson ? myVarNoJson.items : list.items);

    // State de l'input pour le nom de l'item
    const [itemName, setItemName] = useState("");


    // Fonction complémentaire du pere (addItemm de ControllerList)
    const addItemC = () => {

        // je clone
        const itemsClone = Array(...items);
        // j'utilise la fonction du pere
        const setUpItem = fonctionAddItem(itemName);
        // je set l'id par rapport a l'indice du tableau
        setUpItem.id = items.length;
        // je push l'item dans sa liste
        itemsClone.push(setUpItem)
        // je set l'état
        setItems(itemsClone);
        // je reset la valeur de l'input
        setItemName("");

    }

    // fonction de gestion de la value de l'input pour set le nom de la liste
    const handleNameItem = (e) => {
        setItemName(e.target.value);
    }


    const delItem = (concernItem) => {
        // je clone
        const newTab = Array(...items);
        // je cut a partir de l'id de l'item concerné, pour 1
        newTab.splice(concernItem, 1);
        // je modifie tout les id des item suivant l'item concerné pour garder la correspondance avec les indices
        newTab.map((item) => (item.id > concernItem) ? item.id-- : item.id);
        // je set l'etat
        setItems(newTab);

    }

    // fonction de supression de liste
    const delList = () => {
        // je set l'id de la liste concernée
        const concernList = list.id;
        // j'appel la fonction du pere
        onDeleteList(concernList);

    }

    // a remttre en cas d'echec
    const saveList = () => {
        const listItemStorage = {
            title: list.title,
            items: items.map((item) => item)



        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(listItemStorage));

    }

    return (
        <section>
            <h2>{list.title}</h2>
            <MaterialUiList>

                {items.map((item) => <CheckboxItem item={item} fonctionDelItem={delItem} />)}

                {children}

            </MaterialUiList>

            <div>

                <TextField
                    label="Add Item Name"
                    value={itemName}
                    onChange={handleNameItem}
                    variant="outlined"
                />

                <Button onClick={addItemC} className="myButton">
                    {"Add item"}
                </Button>

            </div>

            {/* <Button onClick={delItem}>
                    {"Delete last item"}
                </Button> */}
            <Button onClick={delList}>
                {"Delete List"}
            </Button>

            <Button onClick={saveList}>
                {"Save List"}
            </Button>
        </section>
    )
}

export default List;
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from './List';


const ControllerList = ({ children }) => {

    // ###############   gestion meca du component List 



    // fonction ajout d'item depuis la liste
    const addItem = (itemName) => {
        // je rajoute a ma liste 
        const setUpItem = { value: itemName, checked: false };
        return setUpItem;
    }
    // // fonction de suppr de la liste 
    // const delList = () => {
    //     list.items.pop();
    // }

    // ###############   gestion meca component ControllerList
    // Controller des mecaniques de création de listes sur la liste elle meme

    // State de la creation de listes
    const [lists, setLists] = useState([]);

    // State de l'input pour le nom de la liste
    const [listName, setListName] = useState("");

    // fonction d'ajout de liste
    const addList = () => {
        const newList = Array(...lists);
        const setupNewList = { title: listName, items: [] };
        newList.push(setupNewList);
        setLists(newList);
        // console.log(listName);
        setListName("");
    }

    // fonction de gestion de la value de l'input pour set le nom de la liste
    const handleNameList = (e) => {
        setListName(e.target.value);
        console.log(e.target.value);
    }





    // ###############   Controller des items sur les items eux meme

    return (
        <main>
            <div className={"list"}>
                <div>

                    {
                        lists.map((list) => <List list={list} addItem={addItem} />)
                    }

                    {children}

                    <TextField
                        label="Add List Name"
                        value={listName}
                        onChange={handleNameList}
                        variant="outlined"
                    />

                    <Button onClick={addList}>
                        {"Add List"}
                    </Button>

                </div>
            </div>
        </main>
    )
}

export default ControllerList;




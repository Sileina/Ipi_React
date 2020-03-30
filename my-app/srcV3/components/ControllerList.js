import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from './List';



const ControllerList = ({ children }) => {

    // mise en place de la clef de stockage
    const STORAGE_KEY = "storageKey"

    // ###############   gestion meca du component List 

    // fonction ajout d'item placé sur le pere du component qui a le button
    const addItem = (itemName) => {

        // template de l'item créé
        const setUpItem = { value: itemName, checked: false, id: 0 };
        // je retourne mon template pour utilisation chez l'enfant
        return setUpItem;
    }

    // fonction de suppression de la liste concerné
    const delList = (concernList) => {
        // je clone
        const newList = Array(...lists);
        // je cut a partir de l'id de la liste concerné, pour 1
        newList.splice(concernList, 1);
        // je modifie tout les id des listes suivant la liste concerné pour garder la correspondance avec les indices
        newList.map((list) => (list.id > concernList) ? list.id-- : list.id);
        // je set l'etat
        setLists(newList);
    }

    // ###############   gestion meca component ControllerList
    // Controller des mecaniques de création de listes sur la liste elle meme

    let myVarJSON = localStorage.getItem(STORAGE_KEY);

    let myVarNoJson = JSON.parse(myVarJSON);

    // State de la creation de listes
    const [lists, setLists] = useState(myVarJSON ? [{ title: myVarNoJson.title, items: myVarNoJson.items, id: 0 }] : []);
    // State de l'input pour le nom de la liste
    const [listName, setListName] = useState("");

    // fonction d'ajout d'une liste
    const addList = () => {

        // je clone
        const newList = Array(...lists);
        // template d'une liste
        const setupNewList = { title: listName, items: [], id: 0 };
        // je set l'id de la liste en fonction de l'indice
        setupNewList.id = newList.length;

        newList.items = [];
        // je push la nouvelle liste
        newList.push(setupNewList);
        // je set l'etat
        setLists(newList);
        // reset de l'input
        setListName("");

    }

    // fonction de gestion de la value de l'input pour set le nom de la liste
    const handleNameList = (e) => {
        setListName(e.target.value);
    }

    // const saveLists = () => {


    //     const listItemStorage = lists.map((list) =>  listItemStorage = {title: list.title, items: [list.items.map((item) => item)]});

    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(listItemStorage));

    // }

    return (
        <main className={"list"}>


            {
                lists.map((list) => <List list={list} fonctionAddItem={addItem} onDeleteList={delList} />)
            }

            {children}

            <div className="addList">
                <TextField
                    label="Add List Name"
                    value={listName}
                    onChange={handleNameList}
                    variant="outlined"
                />

                <Button onClick={addList} className="myButton">
                    {"Add List"}
                </Button>
                {/* <Button onClick={saveLists}>
                    {"Save Lists"}
                </Button> */}
            </div>


        </main>
    )
}

export default ControllerList;




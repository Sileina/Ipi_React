import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


// Je vais avoir besoin en MECA :
// - fonction addItem OK
// - fonction delItem
// - fonction changeNameItem
// - fonction addList OK
// - fonction delList OK
// - fonction de gestion de la valeur d'input OK

// - get et set localStorage + storageKey OK
// - JSON to string et string to JSON OK

// - template List et template Item et template default OK

// #######################################

// storage key
const STORAGE_KEY = "maSavedList";

// template par defaut
const defaultTemplate = [{
    title: "defaultTitle",
    items: [
        {
            name: "defaultItem",
            checked: false
        }
    ]
}]

const App = () => {


    // mise en place des data du localStorage au début pour render au chargement
    const dataLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    // création des etats, si y'a data dans localStorage alors on charge les infos
    const [lists, setLists] = useState(dataLocalStorage ? dataLocalStorage : []);



    // ######## Meca creation de listes

    // state de l'input
    const [nameList, setNameList] = useState("")

    const addList = () => {

        // je clone
        const newList = Array(...lists);
        const newSetUp = { title: nameList, items: [] }
        // je push
        newList.push(newSetUp);
        // je set l'etat des Lists
        setLists(newList);
        // je reset l'input
        setNameList("");

    }

    const handleNameList = (e) => {
        setNameList(e.target.value);
    }

    // ####### LocalStorage

    // fonction de save list
    const saveLists = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    }

    // ####### MECA d'une liste

    const addItem = (concernList, itameName) => {
        // je clone
        const newItem = Array(...lists);
        const newSetUp = { name: itameName, checked: false }

        // je retrouve la liste concernée
        const concernIndex = lists.findIndex((list) => list === concernList)
        // je push
        newItem[concernIndex].items.push(newSetUp);
        // je set l'etat des Lists
        setLists(newItem);
    }

    const delList = (concernList) => {
        // je clone
        const newList = Array(...lists);
        // je retrouve la liste concernée
        const concernIndex = lists.findIndex((list) => list === concernList)
        // je push
        newList.splice(concernIndex, 1)
        // je set l'etat des Lists
        setLists(newList);
    }

    // ######### MECA d'un item

    const delItem = (concernList, concernItem) => {

        // je clone
        const newList = Array(...lists);
        // je retrouve la liste concernée
        const concernIndexList = lists.findIndex((list) => list === concernList)
        // je trouve l'indice concerné
        const concernIndexItem = lists[concernIndexList].items.findIndex((item) => item === concernItem)
        // je push
        newList[concernIndexList].items.splice(concernIndexItem, 1)
        // je set l'etat des Lists
        setLists(newList);
    }

    console.log(lists);



    return (
        <div className={"layout"}>
            <Header />
            <h2>{lists[0] ? "Vos Listes" : "Créez une liste"}</h2>
            <main>

                <div className="list">

                    {/* Render des lists */}
                    {lists.map((list) => <List list={list} onAddItem={addItem} delList={delList} delItem={delItem} />)}

                </div>
                <div className="myButtons">

                    <TextField id="outlined-basic" label="Nom de la liste" variant="outlined" onChange={handleNameList} value={nameList} />

                    <Button onClick={addList}>
                        Add List
                    </Button>
                    <Button onClick={saveLists}>
                        Save Lists
                    </Button>

                </div>

            </main>
            <Footer />

        </div>
    )
}



export default App
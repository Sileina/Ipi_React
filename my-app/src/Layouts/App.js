import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import List from '../components/List';


const modelTemplate = [{
    name: 'defaultList',
    items: [{
        name: 'defaultItem',
        check: true,
    }]
}]


// Template pour une nouvelle list
const listTemplate = {
    name: 'newList',
    items: [],
}

const STORAGE_KEY = "STORAGE_KEY"

const App = () => {

    //On Récupère la valeur associé à la clef 'STORAGE_KEY' dans le local sotrage
    const dataFromStorage = localStorage.getItem(STORAGE_KEY)

    //On créer une variable d'états list avec comme valeur par défault un template ou la valeur du local storage
    const [lists, setLists] = useState(dataFromStorage ? JSON.parse(dataFromStorage) : modelTemplate)

    //Une fonction pour ajouter une list
    const addList = () => {
        const listsClone = Array(...lists)
        listsClone.push(listTemplate)
        setLists(listsClone)
    }

    //En oneLiner
    //const addList = () => setLists([...lists, listTemplate])


    const deleteList = () => {
        const listsClone = Array(...lists)
        listsClone.pop(listTemplate)
        setLists(listsClone)
    }

    //En oneLiner
    //const addList = () => setLists(lists.slice(0, lists.length - 2))


    //On ajoute un item
    const addItem = (item, targetedList) => {
        const listsClone = Array(...lists)

        //on cherche l'index la liste visée dans notre tableau de list
        const currentIndex = lists.findIndex((list) => list === targetedList)

        //On rajoute notre item dans les items de la liste ciblée (le clone)
        listsClone[currentIndex].items.push(item)
        setLists(listsClone)
    }

    //On 
    const deleteItem = (targetedList) => {
        const listsClone = Array(...lists)

        //on cherche l'index la liste visée dans notre tableau de list
        const currentIndex = lists.findIndex((list) => list === targetedList)

        //On pop (supprime) notre item dans les items de la liste ciblée (le clone)
        listsClone[currentIndex].items.pop()
        setLists(listsClone)
    }

    //je check/uncheck un item 
    const onToggleCheck = (targetedItem) => {
        const listsClone = Array(...lists)



        const currentListIndex = lists.findIndex((list) => list.items.find((item) => item === targetedItem))
        const currentItemIndex = lists[currentListIndex].items.findIndex((item) => item === targetedItem)

        listsClone[currentListIndex].items[currentItemIndex].check = !listsClone[currentListIndex].items[currentItemIndex].check
        setLists(listsClone)
        //je trouve mon item
        //je trouve ma list

    }


    //On sauvegarde nos listes
    const saveListInLocalStorage = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))

    return (
        <div className={"layout"}>
            <Button onClick={saveListInLocalStorage} variant={"contained"} color={"primary"}>
                {"Save List"}
            </Button>
            <Button onClick={addList} variant={"contained"} color={"secondary"}>
                {"Add List"}
            </Button>
            <Button onClick={deleteList} variant={"contained"} color={"secondary"}>
                {"Delete List"}
            </Button>
            {
                /*
                Afficher mes listes par le biais d'un component <List>
                */
            }
            {lists.map((list) => <List list={list} addItem={addItem} deleteItem={deleteItem} onToggleCheck={onToggleCheck} />)}
        </div>
    )
}

export default App;

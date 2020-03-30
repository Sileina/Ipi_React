import React, { useState } from 'react';
import Item from '../components/Item';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListUi from '@material-ui/core/List';

// Définition d'une liste de base
const defaultItems = ['tomates', 'banane', 'citron', 'biere']
// Nouvel instanciation
const templateItem = 'chien'
// Vraie constante, chaine de caractère
const STORAGE_KEY = "storageKey"

// TAF !!!!!!
// [
//     { 
//         name: string,
//         items: [
//             {
//                 value: string
//                 checked: bool
//             }, --> représente un item
//             ...
//         ]
//     },--> représente une liste
//     ...
//    ]



// functional component de traitement
const List = () => {

    // On prend la string qui est dans le local storage
    let myVar = localStorage.getItem(STORAGE_KEY)

    // Hook pour prise en compte d'un tableau de base
    const [items, setNewItem] = useState(defaultItems)
    // Hook pour prendre la donnée rentrée dans l'item avec au départ, un useState vide
    const [currentItemValue, setCurrentItemValue] = useState("")

    // Création d'un input
    const onInputChange = (e) => {
        // Récupération de la valeur de l'input
        setCurrentItemValue(e.target.value)
    }

    // Création d'un item
    const AddItem = () => {

        // Création d'un objet qui reprend le tableau du Hook
        const newItems = Array(...items)
        // Ajout d'un nouvel item
        newItems.push(currentItemValue)
        // On MAJ le hook avec un setNewItem
        setNewItem(newItems)
        // on stocke la valeur de currentItemValue dans le localStorage, sous la clef STORAGE_KEY
        localStorage.setItem(STORAGE_KEY, currentItemValue)
        myVar = currentItemValue
        // on remet à "" le currentItemValue pour revevoir une nouvelle valeur
        setCurrentItemValue("")

    }

    // Suppression d'un item
    const SupItem = () => {
        // Création d'un tableau qui reprend le tableau du Hook
        const newItems = Array(...items)
        // Suppression de la dernière valeur du tableau
        newItems.pop()
        // On MAJ le hook avec un setNewItem
        setNewItem(newItems)
    }


    // A afficher
    return (

        <div className={'list'}>

            <ListUi>
                {
                    items.map((item) => <Item>{item}</Item>)
                }
            </ListUi>

            <TextField
                label="Name"
                value={currentItemValue}
                onChange={onInputChange}
            />

            {/* Juste pour afficher la value qui est en storage key (cookie) */}
            {"input: value : " + myVar}


            <Button onClick={AddItem}>
                {"add"}
            </Button>

            <Button onClick={SupItem}>
                {"sup"}
            </Button>

        </div>
    )
}

export default List

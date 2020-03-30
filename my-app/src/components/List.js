import React, { useState } from 'react';
import Item from './Item';
import { List as ListMui, Button, Input } from '@material-ui/core';


// Règle React : pour l'affichage, on utilise les fils. Pourquoi ?
// On emmène en paramètre la props "list" qui vient de "App.js" qui précise que ce "list" est égal à "listEnf".
// On emmène aussi en paramètre les props "addList" et "deleteList" qui viennent de "App.js". Elles vont nous servir à prendre en paramètre les données de App.js pour injecter les noms de liste
const List = ({ list, addItem, deleteItem }) => {

    // Création d'un Hook pour récupérer le nom d'un item
    const [itemName, setUpItem] = useState("")

    // A chaque onChange, on injecte la value dans itemName avec un setUpItem
    const currentItemValue = (event) => {
        setUpItem(event.target.value)
    }

    // Création d'un fonction qui se déclenche au click sur bouton Add et qui génère un objet item et la liste visée  
    const onAdd = () => {
        // Dans App.js, ces arguments s'appellent (item,targetedList)
        addItem({ name: itemName, check: true }, list)
        // Réinitialise le itemName pour ne rien afficher dans l'input
        setUpItem("")
    }

    // Création d'un fonction qui se déclenche au click sur bouton Delete et qui déclenche elle-meme la fonction deleteItem en lui passant un  argument (la liste visée)  
    const onDel = () => {
        // Dans App.js, cet argument s'appellent (targetedList)
        deleteItem(list)
    }


    // Affichage repris dans App.js
    return (

        <div className={"blocListe"}>
            <ListMui >
                <h2>La liste de {list.name}</h2>

                {/* Affichage des items avec le component Item */}
                {/* "item=()" correspond au champ item de Item.js */}
                {list.items.map((itemEnf) => <Item item={itemEnf} />)}

                {/* injection d'un input */}
                <input value={itemName} onChange={currentItemValue} />
                {/* bouton pour injecter un nouvel item */}
                {/* au click, on déclenche la fonction onAdd qui elle-même déclenche la fonction addItem() de "App.js" */}
                <Button onClick={onAdd} variant={"contained"} color={"secondary"}>
                    {"add Item"}
                </Button>
                {/* bouton pour supprimer le dernier item */}
                <Button onClick={onDel} variant={"contained"} color={"secondary"}>
                    {"sup Item"}
                </Button>
            </ListMui>

        </div >



    )

}

export default List 
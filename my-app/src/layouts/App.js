import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import List from '../components/List';


// Pour départ, on crée un model à intégré dans la "const lists"
const modelTemplate = [{
    name: 'defaultList',
    items: [{
        name: 'defaultItem',
        check: true,
    }]
}]

// Template pour chaque nouvelle liste
// const listTemplate = {
//     name: 'newList',
//     items: [],
// }

const STORAGE_KEY = "STORAGE_KEY"


const App = () => {


    // Un hook pour récupérer le nom de la liste inscrit dans un input
    const [nomList, setNomList] = useState("")

    // Récupération de la value à chaque "onChange" et injection de le hook. Attention à intégrer l'event. 
    const currentListValue = (event) => {
        setNomList(event.target.value)
    }

    // Template pour chaque nouvelle liste
    const listTemplate = {
        name: nomList,
        items: [],
    }


    //On récupère la valeur associé à la clef 'STORAGE_KEY' dans le localStorage (au 1er chargement, c'est vide car aucune donnée n'y a été intégrée)
    const dataFromStorage = localStorage.getItem(STORAGE_KEY)

    //On créer une variable d'état "lists" avec comme valeur par défaut un template ou la valeur du localStorage (si présente)
    // Par exemple, à la 1ère connexion, ce sera toujours modelTemplate qui sera pris et ensuite, on aura sauvegardé grâce au bouton "Save List" et là on aura une valeur dans le localStorage
    // On utilise ici le JSON.parse pour reformer un objet qui a été "stringify" quand on a enregistré le localStorage lors de la 2ème connexion
    const [lists, setLists] = useState(dataFromStorage ? JSON.parse(dataFromStorage) : modelTemplate)


    // Une fonction pour ajouter une liste au click d'un bouton
    const addList = () => {
        // Toujours faire un clone (règle REACT), il ne faut jamais retravailler direct le useState "Lists"
        const listsClone = Array(...lists)
        // On injecte dans listsClone, en plus de "lists", une nouvelle liste avec "listTemplate" 
        listsClone.push(listTemplate)
        // On MAJ la const lists avec "setLists" du useState (fait pour ça)
        setLists(listsClone)
        // Vidage de l'item
        setNomList("");
        // ou en 1 ligne
        // setLists([...lists,listTemplate])
    }

    // Une fonction pour supprimer une liste au click d'un bouton
    const deleteList = () => {
        // Idem que addList
        const listsClone = Array(...lists)
        // On supprime la dernière valeur
        listsClone.pop(listTemplate)
        // Idem que addList
        setLists(listsClone)
    }

    //Cette instruction est faite pour sauvegarder des données dans le localStorage. Si on ne le fait pas, le code repart avec juste modelTemplate
    const saveListInLocalStorage = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))



    // Une fonction pour ajouter un item au click d'un bouton
    // Les arguments sont renseignés par le fonction onAdd de List.js
    const addItemApp = (item, targetedList) => {
        // On vient chercher le stock du Hook "lists"
        const listsClone = Array(...lists)
        //on cherche l'index la liste visée dans notre tableau de list
        const currentIndex = lists.findIndex((listEnf) => listEnf === targetedList)
        //On rajoute notre item dans les items de la liste ciblée (le clone)
        listsClone[currentIndex].items.push(item)
        // on Maj le Hook "lists"
        setLists(listsClone)
    }

    // Une fonction pour supprimer un item au click d'un bouton
    // Les arguments sont renseignés par le fonction onDel de List.js
    const deleteItemApp = (targetedList) => {
        // On vient chercher le stock du Hook "lists"
        const listsClone = Array(...lists)
        //on cherche l'index la liste visée dans notre tableau de list
        const currentIndex = lists.findIndex((list) => list === targetedList)
        //On pop (supprime) notre item dans les items de la liste ciblée (le clone)
        listsClone[currentIndex].items.pop()
        // on Maj le Hook "lists"
        setLists(listsClone)
    }



    // Return pour affichage
    return (
        <div className={"layouts"}>

            {<h1>Mes ToDoList</h1>}

            {/* Afficher mes listes par le biais d'un component <List> */}
            {/* listEnf représente un enfant (comme "elem" dans un tableau foreach) de la const lists  */}
            {/* list, en minuscule, représente l'argument passé sur le fichier List.js */}
            {lists.map((listEnf) => <List list={listEnf} addItem={addItemApp} deleteItem={deleteItemApp} />)}

            {<div className={"containerAction"}>
                {<h2>Inscrivez le nom de la liste ici</h2>}
                {/* Input pour injection d'un nom de liste */}
                <Input value={nomList} onChange={currentListValue} />
                {/* Bouton pour addList */}
                <Button onClick={addList} variant={"contained"} color={"secondary"}>
                    {"Add List"}
                </Button>
                {/* Bouton pour deleteList */}
                <Button onClick={deleteList} variant={"contained"} color={"secondary"}>
                    {"Delete List"}
                </Button>
                {/* Au click, on lance la fonction saveListInLocalStorage */}
                <Button onClick={saveListInLocalStorage} variant={"contained"} color={"primary"}>
                    {"Save List"}
                </Button>
            </div>}
        </div >

    )

}

export default App 
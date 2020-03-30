import React from 'react';

// 1 ---- Arrow function
// function doSomething(toto){} <=> const doSomething = (toto) => {} 

// 2 ---- Functionnal component
// const MyComponent = (props) => {
//     return (<div> TOTO </div>)
// }

// const MyParentComponent = () => {
//     return (<MyComponent/>)
// }

// 3 --- Props
// On destructure les props en clef selon nos besoins  { a, b } = props => je récupére la clef a et b de l'objet props
// Les props contiennent toujours par défaut la clef children qui représent l'interieur des balises


// 4 -- map 
// pour les Array
// on a la fonction items.map(func(item, iterateurCount))
// Passe les items à la fonction passé en paramètre et renvoie un tableau avec les éléments retourner 


// functional component de traitement
const Item = ({children, toogleItem}) => {


    return (
        <div onClick={toogleItem}> {children} </div>
    )
}

const Footer = () => {

    var reponse = prompt("Quel est votre choix ?")
    
    if (reponse == 1) {
        return (
            <footer>Ceci est mon footer n°1</footer>
        )
    } else {
        return (
            <footer>Ceci est mon footer n°2</footer>
        )
    }
    
}


// functional component de restitution
const App = () => {

    var items = [{name: "1"}, {name: "2"}, {name: "3"}]


    const suppressItem = () => {
        console.log('Suppress Item')
    }

    const addItem = () => {
        console.log('add Item')
    }

    const renderItem = (toto, i) => {

        return <Item toogleItem={ i % 2 === 0 ? suppressItem : addItem}>
                    <li>Hello World 
                    {toto.name}
                    </li>
                </Item>
    }

    return (
        <div>

            <h1>Menu</h1>

            {
                items.map(renderItem)
            }

            <Footer/>

        </div>

    )
}

export default App

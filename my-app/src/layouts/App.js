/*
1 ---- Arrow function
function doSomething(toto){} <=> const doSomething = (toto) => {} 

2 ---- Functionnal component
const MyComponent = (props) => {
    return (<div> TOTO </div>)
}

const MyParentComponent = () => {
    return (<MyComponent/>)
}

3 --- Props
On destructure les props en clef selon nos besoins  { a, b } = props => je récupére la clef a et b de l'objet props
Les props contiennent toujours par défaut la clef children qui représent l'interieur des balises


4 -- map 
pour les Array
on a la fonction items.map(func(item, iterateurCount))
Passe les items à la fonction passé en paramètre et renvoie un tableau avec les éléments retourner 
*/

// import React from 'react';

// const Item = ({children, toogleItem}) => {


//     return (
//         <div onClick={toogleItem}> {children} </div>
//     )
// }

// const App = () => {

//     var items = [{ name: '1'}, {name: "2"}]


//     const suppressItem = () => {
//         console.log('Suppress Item')
//     }

//     const addItem = () => {
//         console.log('add Item')
//     }

//     const renderItem = (item, i) => {
//         return <Item toogleItem={ i % 2 === 0 ? suppressItem : addItem}>
//                     {item.name}
//                 </Item>
//     }


//      return (
//         <div>

//              {
//                  items.map(renderItem)
//              }

//             <div> Toto 2</div>
//         </div>
//     )
// }

// export default App
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
// import Item from '../components/Item';
import ButtonConnection from '../components/Button';

const App = () => {

    const [connect, setConnection] = useState(false)

    /*
    un template d'item
    Une liste d'item dynamique-> utiliser un états avec useState
    la possibilité de changer cette liste d'item -> utiliser le setter du useState 
    une fonction pour rajouter un item -> déclarer une fonction-membre pour ajouter un item
    une fonction pour enlever un item de la list -> déclarer une fonction-membre pour enlever un item (si possible)
    */

    const toogleConnection = () => {
        setConnection(!connect)
    }

    return (
        <div className={"layout"}>
            <Header />
            <List />
            <ButtonConnection connect={connect} toogleConnection={toogleConnection} />
            <Footer />
        </div>)
}

export default App

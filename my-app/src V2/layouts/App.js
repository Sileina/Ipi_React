import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ButtonConnexion from '../components/ButtonConnexion';


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

/* useState
1- Déclarer une variable d'état
2- Déclarer un stter sur cette variable
3- Valeur de départ

*/



const App = () => {

    const [connect, setConnexion] = useState(false);

    /*
    Une liste d'item dynamique-> utiliser un etat avec useState
    La possibilité de changer cette liste d'item -> utiliser le setter du useState
    une fonction pour rajouter un item -> déclarer une fonction membre pour ajouter un item
    une fonction pour enlever un item de la list -> déclarer une fonction membre pour enlever un item (si possible)
    un template d'item a rajouter
    */

    const toogleConnexion = () => {

        // On set la valeur a l'inverse de son précédent état : interrupteur
        setConnexion(!connect);
        console.log(connect ? 'Déconnexion' : 'Connexion');
    }

    return (
        <div className={"layout"}>
            <Header connect={connect} />
            <ButtonConnexion connect={connect} toogleConnexion={toogleConnexion} />
            <Main />
            <Footer />
        </div>
    )
}



export default App
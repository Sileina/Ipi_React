import React, { useState } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import ButtonConnection from '../components/Button'
import Button from '../components/Button';

/* useState 
Déclarer un variable détat
Déclar un setter sur cette variable
Valeur de départ de cette variable
*/

const templateItem = {
    name: 'mon nouvel item'
}

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
        // On set la valeur de la variable à l'inverse de ça valeur actuelle
        setConnection(!connect)
        console.log(connect ? "Déconnection" : "Connection")
    }


    return (
        <div className={"layout"}>
            <Button title={connect ? "deconnection" : "connection"} onClick={toogleConnection} />
            <Header connect={connect} />
            <List />
        </div>
    )
}

export default App;

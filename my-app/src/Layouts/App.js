import React, { useState } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import ButtonConnection from '../components/Button'

/* useState 
Déclarer un variable détat
Déclar un setter su cette variable
Valeur de départ de cette variable

*/

const App = () => {
    const [connect, setConnection] = useState(false)

    const toogleConnection = () => {
        // On set la valeur de la variable à l'inverse de ça valeur actuelle
        setConnection(!connect)
        console.log(connect ? "Déconnection" : "Connection")
    }

    return (
        <div className={"layout"}>
            <ButtonConnection connect={connect} toogleConnection={toogleConnection} />
            <Header connect={connect} />

            <List />
        </div>)
}

export default App;

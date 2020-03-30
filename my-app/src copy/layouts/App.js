import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ButtonConnexion from '../components/Button';


/* UseState
Déclarer une variable d'etat.
Déclarer un setter sur cette variable 
Valeur de départ de cette variable
*/

// functionnal component
const App = () => {

    const [connect, setConnexion] = useState(false)

    const toogleConnexion = () => {
        // On set la valeur de la variable à l'inverse de sa valeur actuelle
        setConnexion(!connect)

        console.log(connect ? "Deconnexion" : "Connexion")
    }

    return (
        <div className={"layouts"}>

            <ButtonConnexion connect={connect} toogleConnexion={toogleConnexion} />
            <Header connect={connect} />
            <Main />
            <Footer />

        </div>

    )
}

export default App

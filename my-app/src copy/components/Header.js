import React from 'react';

// functional component de traitement
const Header=({connect})=>{
    return(
        <header>
            <h1>{connect ? "Vous etes connecté" : "Vous n'etes pas connecté"}</h1>
            <nav>
                <ul>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>{connect ? "Connexion" : "Déconnexion"}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
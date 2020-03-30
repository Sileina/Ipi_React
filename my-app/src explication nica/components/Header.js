import React from 'react';

const Header = ({ connect }) => {

    return (
        <header>
            <h1>{connect ? "Vous etes connecté" : "Vous n'etes pas connecté"}</h1>
            <nav>
                <ul>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>{connect ? "Déconnexion" : "Connexion"}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
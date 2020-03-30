import React from 'react';

const ButtonConnexion = ({connect, toogleConnexion}) =>{

    return(
        <button onClick={toogleConnexion}>

            {connect ? "Déconnexion" : "Connexion"}

        </button>
    )
}

export default ButtonConnexion;
import React from 'react';

// functional component de restitution
const ButtonConnexion  = ({connect,toogleConnexion}) => {

    return (
        <button onClick={toogleConnexion}>
            {connect ? "Déconnexion" : "Connexion"}

        </button>

        
    )
}

export default ButtonConnexion

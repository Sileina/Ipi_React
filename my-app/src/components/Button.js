import React from 'react';

const ButtonConnection = ({ connect, toogleConnection }) => {
    return (
        <button className="buttonConnection" onClick={toogleConnection}>
            {connect ? "Déconnection" : "Connection"}
        </button>
    )
}

export default ButtonConnection
import React from 'react';



const Main = ({ connect }) => {

    return (
        <main>
            <h2>{connect ? "Vous etes connecté" : "Vous n'êtes pas connecté"}</h2>

        </main>
    )
}

export default Main;

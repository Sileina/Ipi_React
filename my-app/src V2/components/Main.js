import React from 'react';
import List from './List'


const Main = ({ connect }) => {

    return (
        <main>
            <h2>{connect ? "Vous etes connecté" : "Vous n'êtes pas connecté"}</h2>
            <List />
        </main>
    )
}

export default Main;

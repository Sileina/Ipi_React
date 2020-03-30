import React from 'react';
import List from '../components/List';

const App = () =>{

    return(
        <div className={"gestionList"}>
            <h2>List</h2>
            {/* affichage de la liste */}
            <List/>
        </div>
    )

}

export default App;
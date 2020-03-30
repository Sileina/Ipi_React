import React from 'react';
import { ListItem } from '@material-ui/core';



// Création du functionnal component pour générer les items
const Item = ({ item }) => {




    // Affichage des items
    return (
        <ListItem>
            {/* item fait référence à la props "item" envoyée par le fichier List.js (voir lists.items.map) */}
            {item.name}

        </ListItem>

    )
}

export default Item
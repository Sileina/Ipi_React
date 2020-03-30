import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const CheckboxItem = ({ item, fonctionDelItem }) => {
    const STORAGE_KEY = "storageKey"
    let myVarJSON = localStorage.getItem(STORAGE_KEY);

    console.log(item.checked);

    // etat qui gere l'animation de la checkbox
    const [checked, setChecked] = useState(myVarJSON ? item.checked : false);

    // fonction qui gere l'etat de la checkbox et la valeur item.checked
    const changeChecked = () => {

        // set de la valeur item.checked
        item['checked'] = !item['checked'];
        // set de la valeur qui gere l'animation
        setChecked(!checked);

    }

    // fonction de débug
    // const myConsole = () => {
    //     // console.log(item['id']);
    //     console.log(item.id);
    // }

    // fonction qui gere la suppr de l'item
    const delItemC = () => {

        // instanciation de l'id de l'intem concerné
        const concernItem = item.id;
        // appel a la fonction du pere
        fonctionDelItem(concernItem);

    }

    // mise en place de la clef de stockage


    let trigger;

    if (myVarJSON) {
        trigger = true;
    } else {
        trigger = false;
    }





    return (
        <List >
            <ListItem key={item.value} dense divider>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        onClick={changeChecked}
                    />
                </ListItemIcon>
                {item.value}
                <div className="center">
                    {/* <Button onClick={myConsole} className="myButton">
                        {"console"}
                    </Button> */}
                    <Button onClick={delItemC} className="myButton">
                        {"Del Item"}
                    </Button>
                </div>
            </ListItem >
        </List >
    );
}
export default CheckboxItem;
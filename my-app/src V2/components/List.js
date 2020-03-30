import React, { useState } from 'react';
import Item from './Item';
// import ButtonTemplate from './ButtonTemplate';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MaterialUiList from '@material-ui/core/List';



const defaultItems = ['tomates', 'citron', 'carottes', 'patates'];

const STORAGE_KEY = "storageKey"


const List = () => {

    const [items, setItems] = useState(defaultItems); // Items est le tableau conteneur, c'est lui qu'on modifie
    const [value, setValue] = useState("");

    let myVar = localStorage.getItem(STORAGE_KEY);

    // const add = () => setItems([...items, value]); // one-liner de add (sans le reset)

    const add = () => {
        const newItems = Array(...items);
        newItems.push(value);
        setItems(newItems);

        localStorage.setItem(STORAGE_KEY, value);
        myVar = value;
        setValue("");
    }

    const del = () => setItems(items.slice(0, items.length - 1)); // one-liner de del

    const handleChange = ({ target: { value } }) => setValue(value); // version one-liner

    return (
        <div className={"list"}>

            <MaterialUiList>
                {
                    items.map((item) => <Item>{item}</Item>)
                }
                {"loaded into Storage = " + myVar}
            </MaterialUiList>



            <TextField
                label="Ajouter un Item"
                value={value}
                onChange={handleChange}
                variant="outlined"
            />
            <Button onClick={add}>
                {"Ajouter un item"}
            </Button>

            <Button onClick={del}>
                {"Supprimer un item"}
            </Button>

        </div>
    )
}

export default List;
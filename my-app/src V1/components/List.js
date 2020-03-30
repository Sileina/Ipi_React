import React, { useState } from 'react';
import Item from './Item';
import ButtonTemplate from './ButtonTemplate';
import Button from '@material-ui/core/Button';


const defaultItems = ['tomates', 'citron', 'carottes', 'patates'];


const List = () => {

    const [items, setItems] = useState(defaultItems); // Items est le tableau conteneur, c'est lui qu'on modifie
    const [value, setValue] = useState("");

    // const add =()=> setItems([...items,value]); one-liner de add (sans le reset)

    const add = () => {

        const newItems = Array(...items); // Il faut cloner le tableau 
        newItems.push(value); // Le modifier
        setItems(newItems); // et re-set le new items
        setValue("");
    }

    const del = () => setItems(items.slice(0, items.length - 1)); // one-liner de del
    // const del = () => {
    //     const temp_tab = Array(...items);
    //     temp_tab.pop();
    //     setItems(temp_tab);
    // }

    const handleChange = ({ target: { value } }) => setValue(value); // version one-liner

    // Version longue du one-liner
    // const handleChange = (e) =>{
    //     setValue(e.target.value);
    // }

    return (
        <div className={"list"}>

            {
                items.map((item) => <Item>{item}</Item>)
            }

            <input type="text" name="addItem" defaultValue="" placeholder="Ajouter un item" onChange={handleChange} value={value}></input>
            <ButtonTemplate toogleAction={add} children="Ajouter un item" />
            <input type="text" name="delItem" defaultValue="" placeholder="Supprimer un item"></input>
            <ButtonTemplate toogleAction={del} children="Supprimer un item" />
        </div>
    )
}

export default List;
import React, { useState } from 'react';
import Item from './Item';
//import Button from './Button';
import Button from '@material-ui/core/Button'
import ListUi from '@material-ui/core/List'

import TextField from '@material-ui/core/TextField';

const defaultItems = ['tomates', 'citron', 'biere', 'linge']

const STORAGE_KEY = "storageKey"

/*
[
 { 
     name: string,
     items: [
         {
             value: string
             checked: bool
         }, --> représente un item
         ...
     ]
 },--> représente une liste
 ...
]


*/



const List = () => {
    const [items, setItems] = useState(defaultItems) // items = defaultItems
    const [currentItemValue, setCurrentItemValue] = useState("")
    let myVar = localStorage.getItem(STORAGE_KEY)


    const addItem = () => {
        const newItems = Array(...items)
        newItems.push(currentItemValue)
        setItems(newItems) //=> items = [tout ce quil y a dans items , nouvelle Item]

        //on stock la valeur de currentItemValue dans le local storage, sous la clef storageKey
        localStorage.setItem(STORAGE_KEY, currentItemValue)
        myVar = currentItemValue
        setCurrentItemValue("")
    }

    const delItem = () => setItems(items.slice(0, items.length - 1))

    const onInputChange = ({ target: { value } }) => {
        setCurrentItemValue(value)
    }

    return (
        <div className="list">
            {/* <Input value={currentItemValue} onChange={onInputChange} /> */}
            <TextField
                label="Name"
                value={currentItemValue}
                onChange={onInputChange}
            />
            {"input value : " + myVar}
            <Button color="primary" variant='contained' onClick={addItem}>
                {"add"}
            </Button>
            <Button color="primary" variant='contained' onClick={delItem}>
                {"delete"}
            </Button>
            <ListUi>
                {
                    items.map((item) => <Item>{item}</Item>)
                }
            </ListUi>
        </div>
    )
}

export default List
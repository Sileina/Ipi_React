import React, { useState } from 'react';
import Item from './Item';
// import ButtonTemplate from './ButtonTemplate';
import Button from '@material-ui/core/Button'

import ListMui from '@material-ui/core/List';


import TextField from '@material-ui/core/TextField'

const defaultItems = ['BMW', 'Audi', 'Subaru', 'Ford']
// const templateItem = "Mercedes"

const STORAGE_KEY = "storageKey"

// [
//     { 
//         name: string,
//         items: [
//             {
//                 value: string
//                 checked: bool
//             }, --> représente un item
//             ...
//         ]
//     },--> représente une liste
// ...
// ]

const List = () => {
    const [items, setItems] = useState(defaultItems)
    const [currentItemValue, setCurrentItemValue] = useState("")
    let myVar = localStorage.getItem(STORAGE_KEY)

    const addItem = () => {
        const newItems = Array(...items)
        newItems.push(currentItemValue)
        setItems(newItems)

        localStorage.setItem(STORAGE_KEY, currentItemValue)
        myVar = currentItemValue
        setCurrentItemValue("")
    }

    const delItem = () => setItems(items.slice(0, items.length - 1))

    const onInputChange = ({ target: { value } }) => {
        setCurrentItemValue(value)
    }

    return (

        <div className={"list"}>
            {/* <ListMui> */}
            {/* {"input:value = " + myVar} */}
            <ListMui>
                {
                    items.map((item) => <Item>{item}</Item>)
                }
            </ListMui>
            <TextField
                label="Name"
                value={currentItemValue}
                onChange={onInputChange}
            />
            <Button color="primary" variant='contained' onClick={addItem}>
                {"New cars"}
            </Button>
            <Button color="primary" variant='contained' onClick={delItem}>
                {"Delete cars"}
            </Button>
            {/* </ListMui> */}
        </div>
    )
}

export default List
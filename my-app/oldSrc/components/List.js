import React, { useState } from 'react';
import Item from './Item';
//import Button from './Button';
import Button from '@material-ui/core/Button'

const defaultItems = ['tomates', 'citron', 'biere', 'linge']
const templateItem = "nouvelleItem"

const List = () => {
    const [items, setItems] = useState(defaultItems) // items = defaultItems
    const [currentItemValue, setCurrentItemValue] = useState("")


    const addItem = () => {
        const newItems = Array(...items)
        newItems.push(currentItemValue)
        setCurrentItemValue("")
        setItems(newItems) //=> items = [tout ce quil y a dans items , nouvelle Item]
    }

    const delItem = () => setItems(items.slice(0, items.length - 1))

    const onInputChange = ({ target: { value } }) => {
        setCurrentItemValue(value)
    }

    return (
        <div className="list">
            <input value={currentItemValue} onChange={onInputChange} />
            <Button onClick={addItem}>
                {"add"}
            </Button>
            {
                items.map((item) => <Item>{item}</Item>)
            }
        </div>
    )
}

export default List
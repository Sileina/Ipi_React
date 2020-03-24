import React from 'react';
import Item from './Item';

const items = ['tomates', 'citron', 'biere', 'linge']    


const List = () => {

    return (
        <div className={"list"}>
            {
                items.map((item) => <Item>{item}</Item>)
            }
        </div>
    )
}

export default List
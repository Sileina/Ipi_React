import React from 'react';
import Button from '../components/Button';
import List from '../components/List';
import Item from '../components/Item';


const App = () => {
    return (
        <div className='container'>
            <Item title='Je suis le 1er Item'></Item>
            <List>
                <Item title='1er Item de la liste'></Item>
                <Item title='2nd Item de la liste'></Item>
                <Item title='3eme Item de la liste'></Item>
                <Item title='4eme Item de la liste'></Item>
                <Item title='5emer Item de la liste'></Item>
            </List>

        </div>
    )
}

export default App;

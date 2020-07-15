import React from 'react';
import Button from '../components/Button';
import List from '../components/List';
import Item from '../components/Item';


const buttonTitleList = ['button 1', 'button 2', 'button 3', 'button 4']

const App = () => {
    const onButtonClick = (buttonName) => {
        console.log('Click sur bouton ', buttonName);
    }
    

    return (
        <div className='container'>
            <Item></Item>

        </div>
        )
}

export default App;

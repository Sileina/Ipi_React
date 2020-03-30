import React from 'react';
import MuiListItem from '@material-ui/core/ListItem';
// import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



const Item = ({ item, fonctionDelItem, itemName }) => {

    // gestion du state de l'item
    // const [singleItem, setItem] = useState(item.value);

    // // gestion etat de l'input
    // const [inpValue, setValue] = useState("");


    // const handleChangeNameItem = ({ target: { inpValue } }) => setValue(inpValue);

    // const addNameItem = () => {
    //     let newName = Array(...singleItem);
    //     templateItem['value'] = inpValue;
    //     newName.pop();
    //     newName.push(templateItem);
    //     setItem(newName);

    //     setValue("");
    // }

    const changeChecked = () => {
        console.log('button checked');
        if (item['checked'] === false) {
            item['checked'] = true;
        } else {
            item['checked'] = false;
        }
        // console.log(item['checked']);
    }

    const delItemC = () => {
        // console.log(item.value);
        const concernItem = item.value;

        fonctionDelItem(concernItem);

    }

    // console.log(itemName);

    return (
        <MuiListItem divider>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={item.checked}
                    tabIndex={-1}
                    disableRipple
                    onClick={changeChecked}
                />
            </ListItemIcon>

            {item.value}

            {/* <TextField
                label="ItemName"
                value={inpValue}
                onChange={handleChangeNameItem}
                variant="outlined"
            /> */}

            <Button onClick={delItemC} id={item.value} className="myButton">
                {"Delete item"}
            </Button>

            {/* <Button onClick={addNameItem}>
                {"Change itemName"}
            </Button> */}

        </MuiListItem>
    )
}

export default Item;
import React from 'react';

const ButtonTemplate = ({ children, toogleAction }) => {

    return (

        <button onClick={toogleAction}>{children}</button>

    )

}

export default ButtonTemplate;
import React from 'react';

const ButtonTemplate = ({ onClick, titre }) => {
    return (
        <button className="Buttonadd" onClick={onClick}>
            {titre}
        </button>
    )
}

export default ButtonTemplate
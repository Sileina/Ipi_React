import React from 'react';

const List = ({title, onClick}) => {


    return (
        <button onClick='onClick()'>
          {title}
        </button>
        )
}

export default List;

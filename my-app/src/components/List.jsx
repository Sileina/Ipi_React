import React from 'react';

const List = ({children}) => {


    return (
        <div className='liste'>
          Titre de la liste
          {children}
        </div>
        )
}

export default List;

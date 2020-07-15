import React from 'react';

const List = ({children, title}) => {


    return (
        <div className='liste'>
          {title}
          {children}
        </div>
        )
}

export default List;

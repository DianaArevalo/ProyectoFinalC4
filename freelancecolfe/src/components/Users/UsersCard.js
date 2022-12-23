import React from 'react';

function UserCard(props) {
const { userData } = props

    return (  
        <div className='flex2'>
            <h4> {userData.nombre}</h4>
            <p> Ciudad: {userData.ciudad}</p>
        </div>
    );
}

export default UserCard;
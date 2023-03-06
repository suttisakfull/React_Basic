import React from 'react';

const Player = (props) => {
    const myId = props.myId;
    const playerName = props.children;
    //การรับค่า props.children 
    
    return (
        <div>
            <h3>Football Player: { myId } </h3>
            <p>{ playerName }</p>
        </div>
    )
}
export default Player;

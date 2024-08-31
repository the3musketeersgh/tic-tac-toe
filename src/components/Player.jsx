import React, { useState } from 'react'

function Player({name, symbol}) {
  const [isEditing, setIsEditting] = useState(false);
  
  function handleClick1(){
    setIsEditting(true);
  }
  
let playerName = <span className='player-name'>{name}</span>;

if(isEditing){
  playerName = <input type="text" required/>;
}

  return (
    <li><span className='player'>
      {playerName}
      {/* {isEditing ? <span className='player-name'>{name}</span> : <input type="text" required/>} */}
      <span className='player-symbol'>{symbol}</span>
  </span>
  <button onClick={handleClick1}>Edit</button>
  </li>
  )
}

export default Player
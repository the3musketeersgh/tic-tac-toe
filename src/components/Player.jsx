import React, { useState } from 'react'

function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditting] = useState(false);
  
  function handleClick(){
    setIsEditting((editing)=>!editing);
  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }
  
let editablePlayerName = <span className='player-name'>{initialName}</span>;

if(isEditing){
  editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
}

  return (
    <li className={isActive ? "active" : undefined}>
      <span className='player'>
      {editablePlayerName}
      {/* {isEditing ? <span className='player-name'>{name}</span> : <input type="text" required/>} */}
      <span className='player-symbol'>{symbol}</span>
  </span>
  <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
  </li>
  )
}

export default Player
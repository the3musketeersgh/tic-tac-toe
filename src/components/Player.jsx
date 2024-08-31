import React, { useState } from 'react'

function Player({name, symbol}) {
  const [isEditing, setIsEditting] = useState(false);
  
  function handleClick(){
    setIsEditting(true);
  }
  
  return (
    <li><span className='player'>
      {isEditing ? <span className='player-name'>{name}</span> : <input type="text" required/>}
      <span className='player-symbol'>{symbol}</span>
  </span>
  <button onClick={handleClick}>Edit</button>
  </li>
  )
}

export default Player
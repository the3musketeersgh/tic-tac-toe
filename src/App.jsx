import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
 
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleSelectSquare(){
    setCurrentPlayer((currentPlayer)=> currentPlayer === "X" ? "O" : "X");
  }



  return (
  <main>
<div id="game-container"> 

<ol id="players" className='highlight-player'>
<Player initialName="Player 1" symbol="X" isActive={currentPlayer === "X"}/>
<Player initialName="Player 2" symbol="O" isActive={currentPlayer === "O"}/>
</ol>


<GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer}/>
</div>

  </main>
  )
}

export default App

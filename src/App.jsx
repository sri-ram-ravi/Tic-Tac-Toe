import { useState } from "react"
import {GameLogo} from "../public/imagePath"
import {Player,GameBoard} from "./components/Index"
import { WINNING_COMBINATIONS } from "./winning-combinations"

function App() {
  const [activePlayer,setActivePlayer]=useState('X')
  function handleSelectSqure(){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer==='X'?'O':'X')
  }
  return (
    <>
      <header>
        <img src={GameLogo} alt="gamelogo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player playerName={"player A"} playerSymbol={"X"} />
            <Player playerName={"player B"} playerSymbol={"Y"}/>
          </ol>
          <GameBoard onSelectSqure={handleSelectSqure} activePlayer={activePlayer}/>
        </div>
      </main>
    </>
  )
}

export default App

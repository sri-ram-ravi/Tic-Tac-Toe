import {GameLogo} from "../public/imagePath"
import {Player} from "./components/Index"

function App() {
  

  return (
    <>
    <header>
      <img src={GameLogo} alt="gamelogo" />
      <h1>Tic-Tac-Toe</h1>
    </header>
    <main>
      <div id="game-container">
        {/* <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol> */}
        <ol id="players">
          <Player playerName={"player A"} playerSymbol={"X"}/>
          <Player playerName={"player B"} playerSymbol={"Y"}/>
        </ol>
        game board
      </div>
      log
    </main>
    </>
  )
}

export default App

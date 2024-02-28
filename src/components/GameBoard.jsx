import { useState } from "react"

const xoxoboard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({onSelectSqure,activePlayer}){
    const [gameBoard,setGameBoard]=useState(xoxoboard)

    //created new array to set the value on the existing array
    function handleSelectSquare(rowIndex,columnIndex){
        setGameBoard((board)=>{
            const updatedBoard=[...board.map((board)=>[...board])]
            updatedBoard[rowIndex][columnIndex]=activePlayer
            return updatedBoard
        })
        onSelectSqure();
    }

    return(
        <ol id="game-board">
            {
                // below line take the row iteration
                gameBoard.map((row,rowIndex)=><li key={rowIndex}> 
                    <ol>
                        {
                            // below line take the column
                            row.map((column,columnIndex)=><li key={columnIndex}>
                                <button onClick={()=>handleSelectSquare(rowIndex,columnIndex)} disabled={column!==null}>{column}</button>
                                </li>)
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}
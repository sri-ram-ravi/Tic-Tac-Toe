import {useState} from "react"
export default function Player({playerName,playerSymbol,...props}){
    const [isEditing,setEditing]=useState(false);
    const [updateplayerName,setUpdatePlayerName]=useState(playerName)

    function handleChange(event){
        setUpdatePlayerName(event.target.value)
    }

    let playername= <span className="player-name">{updateplayerName}</span>
    if(isEditing){
        playername=<input  type="text" required value={updateplayerName} onChange={handleChange}/>
    }

    return(
          <li>
            <span className="player">
                {playername}
                <span className="player-symbol" >{playerSymbol}</span>
            </span>
            <button onClick={()=>setEditing(!isEditing)}>{isEditing?"Save":"Edit"}</button>
          </li>
    )
}
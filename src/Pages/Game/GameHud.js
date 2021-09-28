import React from "react"
import "./GameHud.css"
import GameSideBar from "./GameSideBar"
import ViewPortContainer from "./ViewPortContainer"

const GameHud = ({children, setMessage, setBotSteps}) => {
    return (
        <div className="game-hud" style={{display:"flex", border:"1px solid black", overflow:"hidden"}}>
            <ViewPortContainer setMessage={setMessage} setBotSteps={setBotSteps}>
                {children}
            </ViewPortContainer>
            <GameSideBar/>
        </div>
    )
}

export default GameHud
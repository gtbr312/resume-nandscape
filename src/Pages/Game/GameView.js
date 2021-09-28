import React from "react"
import PlayerShell from "./PlayerShell"
import PathContainer from "./PathContainer";
import NandBot from "./NandBot";
import GameWorld from "./GameWorld";

const GameView = () => {    
    return (
        <div style={{width:"100%", height:"100%", position:"relative", overflow:"hidden"}}>
            <GameWorld/>
            <PathContainer/>
            <NandBot queName={"nandBotQue"} posName={"nandBotPos"} startCoords={[18,23]} startPath={[4,4,4,1,4,4,1,1,1,2,2,3,2,2,2,2,2,1,2,1,2,1,1,2,2,3,3,]}/>
            <NandBot queName={"nandBotQue1"} posName={"nandBotPos1"} startCoords={[13,23]} startPath={[1,1,1,1,2,2,1,1,1,2,2,3,3,2,2]}/>
            <NandBot queName={"nandBotQue2"} posName={"nandBotPos2"} startCoords={[24,18]} startPath={[1,1,4,4,3,3,3,2,3,2,3,3,3,4,4,1,4,4,1,1,4,4,4,4,4,1,4,4,3,3,3,3,]}/>
            <PlayerShell/>
        </div>
    )
}

export default GameView


import React from "react"
import FullScreenContainer from "../../Components/FullScreenContainer"
import GameHud from "./GameHud"
import GameView from "./GameView"

const Game = () => {
    return (
        <FullScreenContainer>
            <GameHud >
                <GameView />
            </GameHud>
        </FullScreenContainer>
    )
}

export default Game
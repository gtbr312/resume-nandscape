import React from "react"
import GameFloorTile from "./GameFloorTile"
import "./GameFloorGrid.css"

const GameFloorGrid = ({mapMove, tiles, setPath, freeMapMove}) => {
    return (
        <div className="game-floor-grid" move={mapMove} onAnimationEnd={freeMapMove}>
            {tiles.map(row => row.map((tile,i) => <GameFloorTile key={i} tile={tile} setPath={setPath}/>))}
        </div>
    )
}

export default GameFloorGrid
import React from "react"
import { MapDataArr } from "../../Data/MapData"

const GameFloorTile = ({tile, setPath}) => {
    const address = tile.split(',')
    const mapCell = MapDataArr[parseInt(address[0])][parseInt(address[1])]
    return <div className={`game-floor-tile ${mapCell.tileType}`} onClick={() => {setPath([parseInt(address[0]), parseInt(address[1])])}}></div>
}

export default React.memo(GameFloorTile)
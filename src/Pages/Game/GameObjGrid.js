import React from "react"
import { MapDataArr } from "../../Data/MapData"
import "./GameObjGrid.css"

const GameObjGrid = ({tiles, mapMove}) => {

    return(
        <>
        {tiles.map((row, r) => row.map((tile,t) => {
            const address = tile.split(',')
            const mapCell = MapDataArr[parseInt(address[0])][parseInt(address[1])]
            if(mapCell.hasObj){
                return <div className="world-obj" move={mapMove} key={tile} style={{pointerEvents:"none", position: "absolute", top:`${60 * (r-1)}px`, left:`${60 * (t-1)}px`, zIndex:10+(r-1)}}>
                    <div className="tree"></div>
                </div>
            }else return null
        }))}
        </>
    )
}

export default GameObjGrid
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { releaseQue, setPlayerPath } from "../../redux/synchronizer/synchronizer.actions"
import GameFloorGrid from "./GameFloorGrid"
import GameObjGrid from "./GameObjGrid"

const GameWorld = () => {
    const dispatch = useDispatch()
    const mapMove = useSelector(store => store.synchronizer.busyQue.mapMovesQue)
    const mapCells = useSelector(store => store.synchronizer.mapCells)

    const setNewPath = (coords) => {
        dispatch(setPlayerPath(coords))
    }

    const freeMapMove = () => {
        dispatch(releaseQue("mapMovesQue","mapCorner"))
    }

    return (
        <>
        <GameFloorGrid mapMove={mapMove} tiles={mapCells} setPath={setNewPath} freeMapMove={freeMapMove}/>
        <GameObjGrid mapMove={mapMove} tiles={mapCells}/>
        </>
    ) 
}

export default GameWorld
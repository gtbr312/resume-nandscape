import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompAnimationString } from "../../logic/animationStrings"
import { addQue, releaseQue } from "../../redux/synchronizer/synchronizer.actions"
import "./NandBot.css"

const NandBot = ({queName, posName, startCoords, startPath}) => {
    const dispatch = useDispatch()
    const botMove = useSelector(store => store.synchronizer.busyQue[queName])
    const botPos = useSelector(store => store.synchronizer[posName])
    const mapMove = useSelector(store => store.synchronizer.busyQue.mapMovesQue)
    const mapCorner = useSelector(store => store.synchronizer.mapCorner)

    useEffect(() => {
        dispatch(addQue(queName, startPath.reverse(), posName, startCoords))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    let comp = getCompAnimationString(botMove, mapMove)

    function digestMoveEnd(){
        if(botMove > 0)
            dispatch(releaseQue(queName, posName))
    }
    return botPos ? (
            <div className="nand-bot" onAnimationEnd={digestMoveEnd} comp={comp} botmove={!comp ? botMove : 0} mapmove={!comp ? mapMove : 0} style={{ zIndex:(botPos[1] - mapCorner[1]) + 10, top:`${(botPos[1] - mapCorner[1]) * 60}px`, left:`${(botPos[0] - mapCorner[0]) * 60}px`}}/>
            ) : <></>
    
}

export default NandBot

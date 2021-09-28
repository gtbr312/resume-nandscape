import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addQue, releaseQue } from "../../redux/synchronizer/synchronizer.actions"
import ChatBubble from "./ChatBubble"
import "./PlayerShell.css"

let queName = "playerQue"
let posName = "playerPos"
let bgX = 0
let bgY = 0
const PlayerShell = () => {
    const dispatch = useDispatch()
    const message = useSelector(store => store.player.message)
    const playerMove = useSelector(store => store.synchronizer.busyQue[queName])
    const playerPos = useSelector(store => store.synchronizer[posName])
    const mapCorner = useSelector(store => store.synchronizer.mapCorner)

    useEffect(() => {
        dispatch(addQue(queName, [], posName, [18,20]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handleReleaseQue({animationName}){
        if(!animationName.includes("edge")){
                dispatch(releaseQue(queName, posName))
            }else{
                
            }
    }
    
    switch(Math.abs(playerMove)){
        case 1:{
            bgX = 0
            bgY = 270
            break;
        }
        case 11:{
            bgX = 272
            bgY = 270
            break;
        }
        case 2:{
            bgX = 0
            bgY = 90
            break;
        }
        case 22:{
            bgX = 272
            bgY = 90
            break;
        }
        case 3:{
            bgX = 0
            bgY = 0
            break;
        }
        case 33:{
            bgX = 272
            bgY = 0
            break;
        }
        case 4:{
            bgX = 0
            bgY = 180
            break;
        }
        case 44:{
            bgX = 272
            bgY = 180
            break;
        }
        default:{}
    }
    return playerPos ? (
        <div className="player-shell" playermove={playerMove} onAnimationEnd={handleReleaseQue} style={{zIndex:(playerPos[1] - mapCorner[1]) + 10, backgroundPosition:`${bgX}px ${bgY}px`, top:`${(((playerPos[1] - mapCorner[1]) - 1) * 60) + 10}px`, left:`${(playerPos[0] - mapCorner[0]) * 60}px`}}>
            <ChatBubble content={message}/>
        </div>
    ) : <></>
}

export default PlayerShell

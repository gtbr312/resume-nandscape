import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./PathContainer.css"

let timer
const PathContainer = () => {
    const path = useSelector(store => store.synchronizer.path)
    const pathTrigger = useSelector(store => store.synchronizer.pathTrigger)
    const mapMove = useSelector(store => store.synchronizer.busyQue.mapMovesQue)
    const mapCorner = useSelector(store => store.synchronizer.mapCorner)
    const playerPos = useSelector(store => store.synchronizer.playerPos)

    const [len, setLen] = useState(1)

    let points = path ? [...path] : []
    let top = 0
    let left = 0
    
    useEffect(() => {
        if(pathTrigger){
            setLen(1)
            incLen(1, points.length)
        }else{
            setLen(1)
            clearTimeout(timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathTrigger])

    function incLen(i, max){
        timer = setTimeout(() => {
            setLen(i+1)
            if(i + 1 < max)
                incLen(i+1, max)
        },50)
    }
    return pathTrigger && path && path[0] ? (
        <div move={mapMove} className="path-container">
        {points.reverse().slice(0,len).map((point, i) => {
            point = Math.abs(point)
            let topInc = point === 1 ? -1 : point === 3 ? 1 : 0
            let leftInc = point === 4 ? -1 : point === 2 ? 1 : 0
            top += topInc
            left += leftInc

            let backgroundColor = "orange"
            if(i + 1 === path.length)
                backgroundColor = "red"

            return (<div key={`${point} ${i}`} style={{width:"60px", height:"60px", position:"absolute", display:"flex", top:`${((playerPos[1] - mapCorner[1])+top)* 60}px`, left:`${((playerPos[0] - mapCorner[0])+left) * 60}px`, justifyContent:"center", alignItems:"center"}}>
                        <div style={{width:"20px", height:"20px", backgroundColor:backgroundColor, opacity:"0.6", borderRadius:"50%", }}></div>
                    </div>)
        })}
        </div>
        ) : <></>
}

export default PathContainer

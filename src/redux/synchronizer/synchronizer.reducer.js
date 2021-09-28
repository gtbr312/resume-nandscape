import { MapArr } from "../../Data/MapData"
import SynchronizerTypes from "./synchronizer.types"

const INITIAL_STATE = {
    busyQue:{mapMovesQue:null},
    completedQue:{mapMovesQue:null},
    previousActions:{mapMovesQue:null},
    mapCorner:[],
    mapMovesQue:[],
    mapCells:[],
    quedMapCorner:null,
    nextPlayerPos:null,
    path:[],
    nextPath:[],
    pathTrigger:false,
}


const synchronizerReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case SynchronizerTypes.ADD_QUE:{
            const {queName, que, posName, pos} = payload
            const addedQue = {}
            addedQue[queName] = que
            addedQue[posName] = pos
            state.busyQue[queName] = null
            state.completedQue[queName] = null
            state.previousActions[queName] = null

            if(queName === "playerQue"){
                state.mapCorner = getCorner(pos)
                state.mapMovesQue = getMapMoves(que)
                state.mapCells = getMapCells(getCorner(pos))
                state.nextPlayerPos = pos
            }

            return {
                ...state,
                ...addedQue,
            }
        }
        case SynchronizerTypes.SET_QUE:{
            const {queName, que} = payload
            const modifiedQue = {}
            
            if(queName === "playerQue"){
                let {playerQue, mapQue} = getMapMoves(que, state.nextPlayerPos)
                modifiedQue.mapMovesQue = mapQue
                modifiedQue[queName] = playerQue
                modifiedQue.nextPath = [...playerQue]
                modifiedQue.pathTrigger = false
            }else
                modifiedQue[queName] = [...que]
            return {
                ...state,
                ...modifiedQue
            }
        }
        case SynchronizerTypes.PUSH_QUE:{
            const {queName, item} = payload
            const modifiedQue = {}
            modifiedQue[queName] = [item, ...state[queName]]
            return {
                ...state,
                ...modifiedQue
            }
        }
        case SynchronizerTypes.DIGEST_QUE:{
            //console.log("Digesting")
            if(state.quedMapCorner !== null){
                state.mapCorner = [...state.quedMapCorner]
                state.quedMapCorner = null
            }
            
            if(state.nextPath !== null){
                state.path = [...state.nextPath]
                state.nextPath = null
                state.pathTrigger = true
            }

            if(!state.path.length)
                state.pathTrigger = false

            let poppedQues = {}
            const keys = Object.keys(state.busyQue)
            for(let i = 0; i < keys.length; i++){
                let que = state[keys[i]]
                if(que.length){
                    let item = que.pop()
                    item = item === state.previousActions[keys[i]] ? item *= 11 : item
                    poppedQues[keys[i]] = que
                    state.busyQue[keys[i]] = item  
                    state.completedQue[keys[i]] = item
                    
                    if(keys[i] === "playerQue"){
                        state.nextPlayerPos = moveCoords([...state["playerPos"]], item)
                    }
                    
                }else state.busyQue[keys[i]] = null
            }


            return {
                ...state,
                ...poppedQues
            }
        }
        case SynchronizerTypes.RELEASE_QUE:{
            const {queName, posName} = payload
            //console.log("Releasing ", queName)

            let newCoords = moveCoords([...state[posName]],state.busyQue[queName])
            
            if(queName === "mapMovesQue"){
                state.mapCells = getMapCells(newCoords)
                state.quedMapCorner = newCoords
            }else{
                state[posName] = newCoords
            }

            if(queName === "playerQue"){
                state.path = state.path.slice(0, state.path.length - 1)
            }

            state.previousActions[queName] = state.busyQue[queName]
            state.completedQue[queName] = null
            return {
                ...state,
                completedQue:{...state.completedQue}
            }
        }
        default:
            return state
    }
}

export default synchronizerReducer

function moveCoords(coords, move){
    let x = 0;
    let y = 0;
    move = Math.abs(move)
    switch(move){
        case 11:
        case 1:{
            x = 0;
            y = -1;
            break;
        }
        case 22:
        case 2:{
            x = 1;
            y = 0;
            break;
        }
        case 33:
        case 3:{
            x = 0;
            y = 1;
            break;
        }
        case 44:
        case 4:{
            x = -1;
            y = 0;
            break;
        }
        default:{}
    }

    return [coords[0] + x, coords[1] + y]
}

function getCorner(coords){
    return [coords[0]-8,coords[1]-5]
}

let mapStaySwitch = 88
function getMapMoves(startingQue, currentPos){
    if(!currentPos) return []
    let que = [...startingQue]
    let mapQue = []
    let pos = [...currentPos]
    for(let i = que.length - 1; i > -1; i--){
        let move = que[i]
        let projectedPos = moveCoords(pos, move)
        if(canMoveMap(move, projectedPos)){
            mapQue.push(move)
        }else{
            mapQue.push(mapStaySwitch)
            que[i] *= -1
            mapStaySwitch = mapStaySwitch < 0 ? 88 : -88 
        }
        pos = projectedPos
    }
    return {playerQue:que, mapQue:mapQue.reverse()}
}

function canMoveMap(move, pos){
    if(move === 1){
        return pos[1] > 7 && pos[1] < 93
    }else if(move === 3){
        return pos[1] > 8 && pos[1] < 94
    }else if(move === 4){
        return pos[0] > 9 && pos[0] < 93
    }else if(move === 2){
        return pos[0] > 10 && pos[0] < 94
    }
}


const ScreenCellWidth = 19;
const ScreenCellHeight = 15
function getMapCells(mapCorner){
    const cellsArr = MapArr.slice(mapCorner[1] - 2 , mapCorner[1] -2 + ScreenCellHeight)
    for(let i = 0; i < ScreenCellHeight; i++){
        cellsArr[i] = cellsArr[i].slice(mapCorner[0] - 2, mapCorner[0] - 2  + ScreenCellWidth)
    }
    return cellsArr
}
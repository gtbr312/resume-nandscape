import PlayerTypes from "./player.types"

const INITIAL_STATE = {
    coords:[],
    steps:[],
    message:[""]
}

const playerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PlayerTypes.MOVE_PLAYER:{
            console.log("dir", action.payload)
            return {
                ...state, 
                coords:[23,23]
            }
        }
        case PlayerTypes.SET_MESSAGE:{
            return {
                ...state, 
                message:[action.payload]
            }
        }
        default:
            return state
    }
}

export default playerReducer
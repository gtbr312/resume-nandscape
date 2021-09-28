import {combineReducers} from "redux"
import synchronizerReducer from "./synchronizer/synchronizer.reducer"
import playerReducer from "./player/player.reducer"


export default combineReducers({
    synchronizer:synchronizerReducer,
    player:playerReducer,
})
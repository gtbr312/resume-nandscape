import PlayerTypes from "./player.types"

export const movePlayer = (dir) => ({
    type:PlayerTypes.MOVE_PLAYER,
    payload:dir
})

export const setPlayerMessage = (message) => ({
    type:PlayerTypes.SET_MESSAGE,
    payload:message
})
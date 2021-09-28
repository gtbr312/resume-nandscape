import SynchronizerTypes from "./synchronizer.types"

export const addQue = (queName, que, posName, pos) => ({
    type:SynchronizerTypes.ADD_QUE,
    payload:{queName, que, posName, pos}
})

export const pushQue = (queName, item) => ({
    type:SynchronizerTypes.PUSH_QUE_START,
    payload:{queName, item}
})

export const pushQueInternal = (queName, item) => ({
    type:SynchronizerTypes.PUSH_QUE,
    payload:{queName, item}
})

export const digestQue = () => ({
    type:SynchronizerTypes.DIGEST_QUE
})

export const releaseQue = (queName, posName) => ({
    type:SynchronizerTypes.RELEASE_QUE_START,
    payload:{queName, posName}
})

export const releaseQueInternal = (queName, posName) => ({
    type:SynchronizerTypes.RELEASE_QUE,
    payload:{queName, posName}
})

export const setQue = (queName, que) => ({
    type:SynchronizerTypes.SET_QUE_START,
    payload:{queName, que}
})

export const setQueInternal = (queName, que) => ({
    type:SynchronizerTypes.SET_QUE,
    payload:{queName, que}
})

export const setPlayerPath = (dest) => ({
    type:SynchronizerTypes.SET_PLAYER_PATH_START,
    payload:dest
})
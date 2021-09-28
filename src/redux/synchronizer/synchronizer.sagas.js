import SynchronizerTypes from "./synchronizer.types";
import { takeEvery, all, call, put, select } from "redux-saga/effects";
import { digestQue, pushQueInternal, releaseQueInternal, setQue, setQueInternal } from "./synchronizer.actions";
import { getAStarPath, getStepsFromPath } from "../../logic/aStarPathfinding";

export function* onPushQue({payload:{queName, item}}){
    yield put(pushQueInternal(queName, item))

    const completedQue = yield select(store => store.synchronizer.completedQue)
    const keys = Object.keys(completedQue)
    
    let busy = false
    for(let i = 0; i < keys.length; i++){
        if(completedQue[keys[i]] !== null){
           busy = true;
           break; 
        }
    }

    if(!busy){
        yield put(digestQue())        
    }

}

export function* onReleaseQue({payload:{queName, posName}}){
    yield put(releaseQueInternal(queName, posName))

    const completedQue = yield select(store => store.synchronizer.completedQue)
    const keys = Object.keys(completedQue)
    let busy = false 
    for(let i = 0; i < keys.length; i++){
        if(completedQue[keys[i]] !== null){
           busy = true;
           break; 
        }
    }


    if(!busy){
        yield put(digestQue())
    }
}

export function* onSetQue({payload:{queName, que}}){
    yield put(setQueInternal(queName, que))

    const completedQue = yield select(store => store.synchronizer.completedQue)
    const keys = Object.keys(completedQue)
    
    let busy = false
    for(let i = 0; i < keys.length; i++){
        if(completedQue[keys[i]] !== null){
           busy = true;
           break; 
        }
    }

    if(!busy){
        yield put(digestQue())        
    }

}

export function* onSetPlayerPath({payload:dest}){
    let nextPlayerPos = yield select(store => store.synchronizer.nextPlayerPos)
    let mapCorner = yield select(store => store.synchronizer.quedMapCorner)
    let aStarPath = getAStarPath(dest, nextPlayerPos, mapCorner)
    let pathedSteps = getStepsFromPath(aStarPath, nextPlayerPos)
    yield put(setQue("playerQue", pathedSteps))

}

export function* setPlayerPathStart(){
    yield takeEvery(SynchronizerTypes.SET_PLAYER_PATH_START, onSetPlayerPath)
}

export function* releaseQueStart(){
    yield takeEvery(SynchronizerTypes.RELEASE_QUE_START, onReleaseQue)
}

export function* pushQueStart(){
    yield takeEvery(SynchronizerTypes.PUSH_QUE_START, onPushQue)
}

export function* setQueStart(){
    yield takeEvery(SynchronizerTypes.SET_QUE_START, onSetQue)
}

export function* synchronizerSagas(){
    yield all([
        call(pushQueStart),
        call(releaseQueStart),
        call(setQueStart),
        call(setPlayerPathStart)
    ])
}
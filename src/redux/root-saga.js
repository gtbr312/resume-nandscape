import { all, call } from "redux-saga/effects";

import { synchronizerSagas } from "./synchronizer/synchronizer.sagas";

export default function* rootSaga(){
    yield all([
        call(synchronizerSagas)
    ])
}
import {applyMiddleware, createStore} from "redux"
import createSagaMiddleware from "redux-saga"
//import logger from "redux-logger"

import rootSaga from "./root-saga"
import rootReducer from "./root-reducer"

const sagaMiddleware = createSagaMiddleware()
const middleWares = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(rootSaga);

export default store
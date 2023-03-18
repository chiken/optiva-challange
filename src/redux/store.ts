import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { movieReducer } from './reducers/movies'

let composeEnhancers = compose;

const store = createStore(
    // @ts-ignore
    movieReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
)

export default store;

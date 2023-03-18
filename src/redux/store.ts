import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { movieReducer } from './reducers/movies'

let composeEnhancers = compose;

const store = createStore(
    movieReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
)

export default store;

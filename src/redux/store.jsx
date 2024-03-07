import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'


const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)

const store  = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    
    
})


export default store;
import {combineReducers} from 'redux'
import config from './config'
import layouts from './layouts'

const rootReducers = combineReducers({
    config,
    layouts
})


export default rootReducers
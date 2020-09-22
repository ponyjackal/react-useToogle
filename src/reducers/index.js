import { combineReducers } from 'redux'
import todos from './todos'
import search from './search'

export default combineReducers({
    todos,
    search
})
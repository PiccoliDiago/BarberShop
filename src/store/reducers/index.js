import { combineReducers } from 'redux'

import user from './user'
import dark from './dark'
import modal from './modal'
import service from './service'

export default combineReducers({
    user,
    dark,
    modal,
    service
});
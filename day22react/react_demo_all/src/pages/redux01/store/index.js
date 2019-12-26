//创建store
import {createStore} from 'redux'
import redcer from './reducer'
const store =createStore( redcer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store

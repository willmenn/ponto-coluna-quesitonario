import {createStore} from 'redux'
import reducers from '../reducer/Reducer'

export let store = createStore(reducers);

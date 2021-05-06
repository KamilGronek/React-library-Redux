import {combineReducers} from 'redux';
import {libraryReducer,
        inputValueReducer,
        ModalReducer
 } from './libraryReducer';

const reducers = combineReducers({
    library: libraryReducer,
    inputValue:inputValueReducer,
    modal:ModalReducer,
    id:ModalReducer
})

export default reducers;
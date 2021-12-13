import { combineReducers } from 'redux';
import { activePopupBreedsReducer } from './activePopupBreedsReducer.js'
import { activePopupRegisterReducer } from './activePopupRegisterReducer.js'
import { activeBreedReducer } from './activeBreedsReducer.js'


const rootReducer = combineReducers({
    active_popup_breeds: activePopupBreedsReducer,
    active_breed: activeBreedReducer,
    active_popup_register: activePopupRegisterReducer,
})

export default rootReducer;
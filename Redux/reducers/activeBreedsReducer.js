import jsonCats from '../../_data_cats.js';

let initialState = {
    item: [jsonCats.long_hair[0]],
}
export const activeBreedReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_BREED") {
        return {
            ...state,
            item: [action.payload],
        }
    }
    return state;
}
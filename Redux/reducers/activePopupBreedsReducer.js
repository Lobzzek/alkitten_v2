let initialState = {
    item: false,
}
export const activePopupBreedsReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_POPUP_BREEDS") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}
let initialState = {
    item: false,
}
export const activePopupRegisterReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_POPUP_REGISTER") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}
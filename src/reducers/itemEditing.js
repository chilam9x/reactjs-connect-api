import * as Types from './../constants/ActionTypes';
var initialState = {};
const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            state = action.products;
            return [...state];
        default: return [...state];
    }
}
export default itemEditing;
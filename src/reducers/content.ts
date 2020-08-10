import { ActionsTypes } from '../actions';

const initialState = {
    isFetchingContent: false,
    data: {},
    error: null,
};


export const content = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionsTypes.FETCH_CONTENT:
            return {
                ...state,
                isFetchingContent: true,
            }
        case ActionsTypes.FETCH_CONTENT_FULFILLED:
            return {
                ...state,
                isFetchingContent: false,
                data: action.payload,
            }
        case ActionsTypes.FETCH_CONTENT_REJECTED:
            return {
                ...state,
                isFetchingContent: false,
                error: action.error,
            }
        default:
            return state
    }
}

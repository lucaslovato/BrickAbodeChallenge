import types from '../action/types/nbaPlayerTypes';

const STATE = {
    teams: {}
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_PLAYER:
            return {
                teams: action.payload,
                isLoading: false,
                //tobechecked: nextUrl: action.payload.next,
                //tobechecked: previousUrl: action.payload.previous,
            }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}
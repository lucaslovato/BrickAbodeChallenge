import types from '../action/types/nbaTeamsTypes';

const STATE = {
    teams: {}
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_TEAMS:
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
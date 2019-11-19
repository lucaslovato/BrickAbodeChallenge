import types from './types/nbaPlayerTypes';

export const loadPlayers = urlPath => ({
    type: types.LOAD_NBAPLAYER_SAGA,
    payload: urlPath
});

export const setIsLoadingChars = () => ({
    type: types.IS_LOADING
});
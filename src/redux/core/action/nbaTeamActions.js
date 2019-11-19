import types from './types/nbaTeamsTypes';

export const loadNbaTeams = urlPath => ({
    type: types.LOAD_NBATEAMS_SAGA,
    payload: urlPath
});

export const setIsLoadingNbaTeams = () => ({
    type: types.IS_LOADING
});
import { getAllNbaTeams, getNbaPlayer } from '../../services/api';
import playerTypes from '../core/action/types/nbaPlayerTypes';
import teamTypes from '../core/action/types/nbaTeamsTypes';
import { put, call, takeLatest, all } from 'redux-saga/effects';

function* loadNbaPlayerSaga(action) {
    let jsonResponse = yield call(getNbaPlayer, action.payload);
    yield put({ type: playerTypes.LOAD_NBA_PLAYER, payload: jsonResponse });
}

function* loadNbaTeamsSaga(action) {
    let jsonResponse = yield call(getAllNbaTeams, action.payload);
    yield put({ type: teamTypes.LOAD_NBA_TEAMS, payload: jsonResponse });
}

export default function* rootSaga() {
    yield all([
        takeLatest(playerTypes.LOAD_NBAPLAYER_SAGA, loadNbaPlayerSaga),
        takeLatest(teamTypes.LOAD_NBAPLAYER_SAGA, loadNbaTeamsSaga),
    ]);
}
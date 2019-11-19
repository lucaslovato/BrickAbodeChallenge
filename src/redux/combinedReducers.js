import { combineReducers } from 'redux';
import nbaPlayerReducer from './core/reducers/nbaPlayerReducer';
import nbaTeamReducer from './core/reducers/nbaTeamsReducer';

export default combineReducers({
    nbaPlayerReducer,
    nbaTeamReducer
});
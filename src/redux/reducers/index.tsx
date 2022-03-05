import { combineReducers } from 'redux';
// import matchInfoReducer from './match';
// import homeInfoReducer from './home';
// import appInfoReducer from './app';
// import shareInfoReducer from './share';
import userInfoReducer from './userInfo';
import popupInfoReducer from './popup';

export default combineReducers({ userInfoReducer, popupInfoReducer });

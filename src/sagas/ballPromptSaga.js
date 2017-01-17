import * as actionCreators from '../actions';
import * as bowlingUtils from '../utils/bowlingUtils';
import {select} from 'redux-saga/effects';

export function *ballPromptSaga(action){
   const {over, innings} = action;
   const bowler = bowlingUtils.getOverInfo(over.figures);
   console.log("Bowler", bowler);
}

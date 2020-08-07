import { notification} from 'antd';
// redux saga
import {call, all, fork, put, takeLatest,} from 'redux-saga/effects';
import { push } from 'react-router-redux';

// other libs
import axios from 'axios';
import { API_KEY } from './const';

export function* fecthSearchResult(action:IAction) {
  try {
    const result = yield call(axios.get, `https://www.skiddle.com/api/v1/events/search/?api_key=${API_KEY}&keyword=${action.data}`);
    yield put({type:'SET_SEARCH_RESULT', data: result.data});
  } catch (error) {
    notification.error({
      message: 'Network Problem',
      description:
        'unable to connect the server, please try again later',
    });
  }
}

export function* fetchEventDetail(action:IAction) {
  try {
    const result = yield call(axios.get, `https://www.skiddle.com/api/v1/events/${action.data}/?api_key=${API_KEY}`);
    yield put({type:'SET_EVENT_DETAIL', data: result.data});
    yield put(push(`/events/${action.data}`));
  } catch (error) {
    notification.error({
      message: 'Network Problem',
      description:
        'unable to connect the server, please try again later',
    });
  }
}

export function* fetchArtistDetail(action:IAction) {
  try {
    const result = yield call(axios.get, `https://www.skiddle.com/api/v1/artist/${action.data}?api_key=${API_KEY}`);
    yield put({type:'SET_ARTIST_DETAIL', data: result.data});
    yield put(push(`/artists/${action.data}`));
  } catch (error) {
    notification.error({
      message: 'Network Problem',
      description:
        'unable to connect the server, please try again later',
    });
  }
}

export function* watchApp() {
  yield takeLatest('FETCH_SEARCH_RESULT', fecthSearchResult);
  yield takeLatest('FETCH_EVENT_DETAIL', fetchEventDetail);
  yield takeLatest('FETCH_ARTIST_DETAIL', fetchArtistDetail);
}

export default function* rootSaga() {
  yield all([
    fork(watchApp),
  ]);
}

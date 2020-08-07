import {appReducer, DEFAULT_APP_STATE} from './reducer';

test('reducer should works fine', ()=> {
  const state = DEFAULT_APP_STATE;
  let stateResult = appReducer(state, {type:'SET_SEARCH_RESULT', data:{
    "error": 0,
    "totalcount": 0,
    "pagecount": 0,
    "results": [],
    "requestId": "api_5f2cdc4b6f0b71.77281352"
  }});
  expect(stateResult.searchResult?.error).toBe(0);

  stateResult = appReducer(state, {type:'SET_ARTIST_DETAIL', data:{
    "error": 0,
    "totalcount": 0,
    "pagecount": 0,
    "results": [],
    "requestId": "api_5f2cdc4b6f0b71.77281352"
  }});
  expect(stateResult.artistDetail?.error).toBe(0);

  stateResult = appReducer(state, {type:'SET_EVENT_DETAIL', data:{
    "error": 0,
    "totalcount": 0,
    "pagecount": 0,
    "results": [],
    "requestId": "api_5f2cdc4b6f0b71.77281352"
  }});
  expect(stateResult.currentEventDetail?.error).toBe(0);
})
import { combineReducers } from "redux";

export const DEFAULT_APP_STATE:IAppState = {
  searchResult: undefined,
  artistDetail: undefined,
  currentEventDetail: undefined,
};

export const INITIAL_STATE:IStoreState = {
  app: DEFAULT_APP_STATE
}

export const appReducer = (state:IAppState, action:IAction):IAppState => {
  if (state === undefined) {
    state = DEFAULT_APP_STATE;
  }
  switch(action.type) {
    case 'SET_SEARCH_RESULT': {
      return {...state, searchResult: action.data};
    }
    case 'SET_ARTIST_DETAIL': {
      return {...state, artistDetail: action.data};
    }
    case 'SET_EVENT_DETAIL': {
      return {...state, currentEventDetail: action.data};
    }
  }
  return state;
}

export const reducer = combineReducers({
  app: appReducer,
} as IStoreState)

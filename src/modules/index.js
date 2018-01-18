import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware,combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ajax } from 'rxjs/observable/dom/ajax';


export const rootEpic = (...args) => combineEpics()(...args, { ajax });

export const rootReducer = combineReducers({});

export default () =>
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        createEpicMiddleware(rootEpic),
      ),
    )
  );
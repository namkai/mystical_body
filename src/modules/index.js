import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware,combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ajax } from 'rxjs/observable/dom/ajax';
import {reducer as burgerMenu} from 'redux-burger-menu';



export const rootEpic = (...args) => combineEpics()(...args, { ajax });

export const rootReducer = combineReducers({
  burgerMenu
});

export default () =>
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        createEpicMiddleware(rootEpic),
      ),
    )
  );
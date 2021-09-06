import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import fetchState from "../api/fetchState";
import saveState from "../api/saveState";
import items from "../content/items";
import words from "../content/words";
import rootReducer from "../reducers/rootReducer";

// handling versioning
if (localStorage.getItem("READING_APP_V") !== "2") {
  localStorage.removeItem("READING_APP_STATE");
  localStorage.setItem("READING_APP_V", "2");
}

let savedState = fetchState();

const modifiedState = {
  chests: savedState.chests,
  engagements: savedState.engagements,
  items,
  letters: savedState.letters,
  rewardCards: savedState.rewardCards,
  session: savedState.session,
  words,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  modifiedState,
  composeEnhancers(applyMiddleware(thunk, createLogger({ collapsed: true })))
);

// this is here so that if user closes browser window while answer modal is
// showing, but the timer to hide the answer modal doesn't finish counting down
// before the refresh, then the answer modal isn't stuck open after the user
// reopens the window
if (store.getState().session.showingAnswerModal) {
  store.dispatch({
    type: "HIDE_ANSWER_MODAL",
  });
}

store.subscribe(() => saveState(store.getState()));

export default store;

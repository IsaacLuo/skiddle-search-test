import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreContext } from "redux-react-hook";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import saga from "./saga";
import createSagaMiddleware from "redux-saga";

// create redux saga object;
const sagaMiddleware = createSagaMiddleware();
let middleWare: any;
if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    ((f: any) => f);
  middleWare = composeEnhancers(applyMiddleware(sagaMiddleware));
} else {
  middleWare = applyMiddleware(sagaMiddleware);
}

const store = createStore(reducer, middleWare);
sagaMiddleware.run(saga);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

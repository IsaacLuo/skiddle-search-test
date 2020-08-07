import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { StoreContext } from "redux-react-hook";
import { INITIAL_STATE, reducer } from "./reducer";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

function render(
  ui: any,
  {
    initialState = INITIAL_STATE,
    store = createStore(reducer, INITIAL_STATE as any),
    ...renderOptions
  } = {},
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: any = {}
) {
  function Wrapper({ children }: { children: any }) {
    return (
      <StoreContext.Provider value={store}>
        <Router history={history}>{children}</Router>
      </StoreContext.Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions } as any);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

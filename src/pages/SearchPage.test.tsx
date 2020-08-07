import SearchPage from "./SearchPage";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { StoreContext } from "redux-react-hook";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducer";
import saga from "../saga";
import createSagaMiddleware from "redux-saga";

describe("test app component", () => {
  let store: any;

  beforeAll(() => {
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

    store = createStore(reducer, middleWare);
    sagaMiddleware.run(saga);
  });

  test("search input exists", () => {
    const component = render(
      <StoreContext.Provider value={store}>
        <SearchPage />
      </StoreContext.Provider>
    );
    const dom = component.getByTestId(
      /search-event-input/i
    ) as HTMLInputElement;
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveAttribute("placeholder", "search for events");
    fireEvent.change(dom, { target: { value: "23" } });
    expect(dom.value).toBe("23");
  });

  test("serch search panel exists", () => {
    const component = render(
      <StoreContext.Provider value={store}>
        <SearchPage />
      </StoreContext.Provider>
    );
    const dom = component.getByTestId(/search-panel/i);
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveStyle("padding: 20px 80px");
  });
});

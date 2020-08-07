import ArtistDetail from "./ArtistDetail";
import React from "react";
import { render } from "../test-utils";
import { createStore } from "redux";
import { reducer, INITIAL_STATE } from "../reducer";

describe("test artist component", () => {
  let store: any;

  beforeAll(() => {
    store = createStore(reducer);

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test("only spin exists if no data", () => {
    const component = render(<ArtistDetail id="test" />);
    const dom = component.getByTestId("spin");
    expect(dom).toBeInTheDocument();
  });

  test("text exists", () => {
    const storeState = INITIAL_STATE;
    storeState.app.artistDetail = {
      error: 0,
      totalcount: 1,
      pagecount: 1,
      results: {
        id: "730889",
        name: "Ronan Keating",
        description:
          "Ronan Keating (born March 3, 1977) is an Irish popstar who started his career in boyband Boyzone before turning solo.  He has released five studio albums from 2000 - 2009 and has had three UK #1 singles.",
        imageurl:
          "https://i.scdn.co/image/8a4e39f5f351dd75913c9917c438e1239b9337c1",
        twitter: "ronanofficial",
        favourite: 0,
        mix: null,
        link: "/artists/ronan-keating-730889/",
        spotifymp3url:
          "https://p.scdn.co/mp3-preview/82661c8e75391b370842196dda730e629c888f89",
        spotifyartisturl: "spotify:artist:3nlHsNqwCSvT988ZfSW1Yh",
      },
      requestId: "api_5f2bd2800c4d25.05334379",
    };
    const component = render(
      <ArtistDetail id={"test"} />,
      createStore(() => storeState)
    );
    expect(component.getByText("artist detail")).toBeInTheDocument();
    expect(component.getByAltText("artist")).toBeInTheDocument();
    expect(component.getByText("Ronan Keating")).toBeInTheDocument();
  });
});

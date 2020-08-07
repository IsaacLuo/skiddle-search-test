import EventDetail from "./EventDetail";
import React from "react";
import { render } from "../test-utils";
import { StoreContext } from "redux-react-hook";
import { createStore, applyMiddleware } from "redux";
import { reducer, INITIAL_STATE } from "../reducer";

describe("test event component", () => {
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
    const component = render(<EventDetail id={"123"} />);
    const dom = component.getByTestId("spin");
    expect(dom).toBeInTheDocument();
  });

  test("text exists", () => {
    const storeState = INITIAL_STATE;
    storeState.app.currentEventDetail = {
      error: 0,
      totalcount: 1,
      pagecount: 1,
      results: {
        id: "13457864",
        listingid: "1140209",
        eventname: "Cooking with Palms Trax w/ Sassy J, PLO Man, High Hoops",
        cancelled: "0",
        cancellationDate: "",
        cancellationType: "",
        cancellationReason: "",
        rescheduledDate: "",
        venue: {
          id: "1501",
          name: "Hidden",
          address: "DownTex Mill 16-18 Mary Street, Cheetham Hill",
          town: "Manchester",
          postcode: "M3 1NH",
          countrycode: "GB",
          cityname: "Manchester",
          phone: "",
          latitude: "53.49025100",
          longitude: "-2.24935700",
          link: "https://www.skiddle.com/whats-on/Manchester/Hidden/",
        },
        imageurl:
          "https://d31fr2pwly4c4s.cloudfront.net/6/d/b/1140209_1_cooking-with-palms-trax-w-sassy-j-plo-man-high-hoops_th.jpg",
        largeimageurl:
          "https://d31fr2pwly4c4s.cloudfront.net/6/d/b/1140209_1_cooking-with-palms-trax-w-sassy-j-plo-man-high-hoops.jpg",
        headerhex: "#000000",
        link:
          "https://www.skiddle.com/whats-on/Manchester/Hidden/Cooking-with-Palms-Trax-w-Sassy-J-PLO-Man-High-Hoops/13457864/",
        date: "2019-03-22",
        dateStart: "2019-03-22 23:00:00",
        dateEnd: "2019-03-23 04:00:00",
        startdate: "2019-03-22T23:00:00+00:00",
        enddate: "2019-03-23T04:00:00+00:00",
        description:
          "Cooking with Palms Trax\r\n\r\nFriday March 22\r\n11pm - 4am \r\nHidden \r\n\r\nLine up: \r\nPalms Trax\r\nSassy J\r\nPLO Man - All Night Long\r\nHigh Hoops",
        openingtimes: {
          doorsopen: "23:00",
          doorsclose: "04:00",
          lastentry: "00:30:00",
        },
        genres: [
          {
            genreid: "15",
            name: "Acid House",
          },
          {
            genreid: "57",
            name: "Disco",
          },
          {
            genreid: "1",
            name: "House",
          },
          {
            genreid: "9",
            name: "Techno",
          },
        ],
        entryprice: "8",
        MinAge: "18",
        going: [
          {
            userid: "1506872",
            name: "KelliLily",
            image:
              "https://graph.facebook.com/478871148939969/picture?type=square",
          },
          {
            userid: "913458",
            name: "HuwJenkins",
            image:
              "http://images.skiddle.com/images/skin/profilepic_male_th.gif",
          },
          {
            userid: "2708529",
            name: "EliseTeale",
            image:
              "https://graph.facebook.com/2022538267885101/picture?type=square",
          },
          {
            userid: "2544781",
            name: "cameronmccormick",
            image:
              "https://graph.facebook.com/774775849299233/picture?type=square",
          },
          {
            userid: "2115287",
            name: "CourtneyBarron",
            image:
              "https://graph.facebook.com/1258507907505385/picture?type=square",
          },
          {
            userid: "2553218",
            name: "ChloeGiasemidis",
            image: "",
          },
          {
            userid: "1725592",
            name: "MaddieAinsworth",
            image:
              "https://graph.facebook.com/502762973233912/picture?type=square",
          },
          {
            userid: "1142476",
            name: "VictoriaBhole",
            image:
              "https://graph.facebook.com/10206657680389276/picture?type=square",
          },
          {
            userid: "3443171",
            name: "ZacPayneThompson",
            image:
              "https://graph.facebook.com/1311532988924270/picture?type=square",
          },
          {
            userid: "2659299",
            name: "EmBrear",
            image:
              "https://graph.facebook.com/10206503608668778/picture?type=square",
          },
        ],
        imgoing: 0,
        goingtos: 0,
        artists: [
          {
            artistid: "123540290",
            name: "Palms Trax",
            image:
              "https://i.scdn.co/image/ab67616d0000b273c22e0b4198f2f563566708ff",
            spotifymp3url:
              "https://p.scdn.co/mp3-preview/8d034129b8c4a7029bafc000a268a1d070ba60ac",
            spotifyartisturl: "spotify:artist:52XSRQqTAfZ8ZrIqkQvQyA",
          },
          {
            artistid: "123551074",
            name: "High Hoops DJs",
            image:
              "https://i.scdn.co/image/ba6a30eefb09cbae4e1d9c253d0fe0afef5ba954",
            spotifymp3url:
              "https://p.scdn.co/mp3-preview/2c31e3f193159e589f236ba17b8949daeba2072d",
            spotifyartisturl: "spotify:artist:4awgEb2pQYbDOC6OFuPy9x",
          },
          {
            artistid: "123545208",
            name: "Sassy J",
            image:
              "https://i.scdn.co/image/ab67616d0000b273533045053b53a78afe3fd7be",
            spotifymp3url:
              "https://p.scdn.co/mp3-preview/9501d559a56e110e9aa272ed0d2dd81782989086",
            spotifyartisturl: "spotify:artist:2nqNqUIX7Vp8txD1mSJl7S",
          },
        ],
        ticketStatus: "0",
        tickets: true,
        paymentPlanTCs: "",
        eventVisibility: "public",
        rep: {
          enabled: false,
        },
        seatingPlanID: "",
      },
      requestId: "api_5f2bd271b4d1c7.36319682",
    };
    const component = render(
      <EventDetail id={"123"} />,
      createStore(() => storeState)
    );
    expect(component.getByText("event details")).toBeInTheDocument();

    expect(component.getByText("Manchester")).toBeInTheDocument();
  });
});

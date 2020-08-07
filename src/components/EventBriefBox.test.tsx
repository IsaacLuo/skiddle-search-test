import EventBriefBox from "./EventBriefBox";
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

  test("text exists", () => {
    const event = {
      id: "13810170",
      EventCode: "BARPUB",
      eventname: "Smartphone Quiz",
      cancelled: "0",
      cancellationDate: "",
      cancellationType: "",
      cancellationReason: "",
      rescheduledDate: "",
      venue: {
        id: 6668,
        name: "The Venue Nightclub",
        address: "29 Jacksons Row",
        town: "Manchester",
        postcode_lookup: "Manchester",
        postcode: "M2 5WD",
        country: "GB",
        phone: "0161 834 3793",
        latitude: 53.479015,
        longitude: -2.247575,
        type: "Nightclub",
        rating: 3,
      },
      imageurl:
        "https://d31fr2pwly4c4s.cloudfront.net/0/3/9/1287041_1_smartphone-quiz_th.jpg",
      largeimageurl:
        "https://d31fr2pwly4c4s.cloudfront.net/0/3/9/1287041_1_smartphone-quiz.jpg",
      link:
        "https://www.skiddle.com/whats-on/Manchester/The-Venue-Nightclub/Smartphone-Quiz/13810170/",
      date: "2020-08-06",
      startdate: "2020-08-06T18:00:00+00:00",
      enddate: "2020-08-07T00:00:00+00:00",
      description:
        "We're back as Venue Nightpub, reserve your table to guarantee a seat as space is limited. Featuring the quiz from 7:30pm",
      openingtimes: {
        doorsopen: "18:00",
        doorsclose: "00:00",
        lastentry: "23:30",
      },
      minage: "18",
      imgoing: null,
      goingtos: 0,
      goingtocount: "6",
      tickets: true,
      entryprice: "Free",
      eventvisibility: "public",
      rep: {
        enabled: false,
      },
    };
    const component = render(<EventBriefBox event={event} />);
    expect(component.getByText("view details")).toBeInTheDocument();
    expect(component.getByText("Manchester")).toBeInTheDocument();
  });
});

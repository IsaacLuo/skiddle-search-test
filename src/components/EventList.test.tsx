import EventList from './EventList';
import React from 'react';
import {render} from '../test-utils';
import {createStore} from 'redux';
import {reducer, INITIAL_STATE} from '../reducer';

describe('test artist component', ()=>{

  let store:any;

  beforeAll(()=>{
    store = createStore(
        reducer,
      );

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
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
  })

  test('show no events', () => {
    const storeState = INITIAL_STATE;
    storeState.app.searchResult = {
      "error": 0,
      "totalcount": "0",
      "pagecount": 0,
      "results": [],
      "elastic": {
          "timing": 3
      },
      "requestId": "api_5f2bd25cb8f5d6.94684113"
  };

    const component = render(<EventList/>,
      createStore(() => (storeState))
    );
    expect(component.getByText('no events')).toBeInTheDocument();
  });

test('text exists', () => {
  const storeState = INITIAL_STATE;
  storeState.app.artistDetail = storeState.app.searchResult = {
    "error": 0,
    "totalcount": "739",
    "pagecount": 20,
    "results": [
        {
            "id": "13810170",
            "EventCode": "BARPUB",
            "eventname": "Smartphone Quiz",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 6668,
                "name": "The Venue Nightclub",
                "address": "29 Jacksons Row",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M2 5WD",
                "country": "GB",
                "phone": "0161 834 3793",
                "latitude": 53.479015,
                "longitude": -2.247575,
                "type": "Nightclub",
                "rating": 3
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/3/9/1287041_1_smartphone-quiz_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/3/9/1287041_1_smartphone-quiz.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/The-Venue-Nightclub/Smartphone-Quiz/13810170/",
            "date": "2020-08-06",
            "startdate": "2020-08-06T18:00:00+00:00",
            "enddate": "2020-08-07T00:00:00+00:00",
            "description": "We're back as Venue Nightpub, reserve your table to guarantee a seat as space is limited. Featuring the quiz from 7:30pm",
            "openingtimes": {
                "doorsopen": "18:00",
                "doorsclose": "00:00",
                "lastentry": "23:30"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "6",
            "tickets": true,
            "entryprice": "Free",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13808060",
            "EventCode": "DATE",
            "eventname": "Manchester Virtual Speed Dating age 24-38 (41852)",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 73947,
                "name": "Virtual Event",
                "address": "Virtual Event",
                "town": "Online",
                "postcode_lookup": "London",
                "postcode": "EC1A 1AA",
                "country": "GB",
                "phone": "",
                "latitude": 51.505735,
                "longitude": -0.133585,
                "type": "Other",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/a/5/1286382_1_manchester-virtual-speed-dating-age-24-38-41852_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/a/5/1286382_1_manchester-virtual-speed-dating-age-24-38-41852.jpg",
            "link": "https://www.skiddle.com/whats-on/London/Virtual-Event/Manchester-Virtual-Speed-Dating-age-24-38-41852/13808060/",
            "date": "2020-08-06",
            "startdate": "2020-08-06T19:00:00+00:00",
            "enddate": "2020-08-06T21:00:00+00:00",
            "description": "While we all need to stay at home without the opportunity to lead our usual way of life - we have something to offer in return.",
            "openingtimes": {
                "doorsopen": "19:00",
                "doorsclose": "21:00",
                "lastentry": "19:15"
            },
            "minage": "24",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "5.00",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13811023",
            "EventCode": "KIDS",
            "eventname": "Hearts Trail",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 79936,
                "name": "Fletcher Moss Gardens",
                "address": "Millgate Lane",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M20 2SW",
                "country": "GB",
                "phone": "",
                "latitude": 53.408374,
                "longitude": -2.230519,
                "type": "Outdoors",
                "rating": 0
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/b/e/1/1287343_0_hearts-trail_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/b/e/1/1287343_0_hearts-trail.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Fletcher-Moss-Gardens/Hearts-Trail/13811023/",
            "date": "2020-08-06",
            "startdate": "2020-08-06T08:00:00+00:00",
            "enddate": "2020-08-20T08:00:00+00:00",
            "description": "1.5 mile family friendly trail of hand decorated hearts round this beautiful park",
            "openingtimes": {
                "doorsopen": "08:00",
                "doorsclose": "08:00",
                "lastentry": "17:00"
            },
            "minage": "0",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "Free",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13805744",
            "EventCode": "CLUB",
            "eventname": "Puffin Box: La Discotheque",
            "cancelled": "1",
            "cancellationDate": "2020-08-05 15:59:33",
            "cancellationType": "rescheduled",
            "cancellationReason": "Postponed due to the new Government Restrictions - New date announced very soon!",
            "rescheduledDate": "",
            "venue": {
                "id": 103193,
                "name": "Hilton House Basement ",
                "address": "Hilton Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 2EH",
                "country": "GB",
                "phone": "",
                "latitude": 53.4814574,
                "longitude": -2.2320759,
                "type": "Exhibition Centre",
                "rating": 0
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/9/d/e/1285534_0_puffin-box-brand-name_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/9/d/e/1285534_0_puffin-box-brand-name.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Hilton-House-Basement-/Puffin-Box-La-Discotheque/13805744/",
            "date": "2020-08-07",
            "startdate": "2020-08-07T16:15:00+00:00",
            "enddate": "2020-08-07T23:00:00+00:00",
            "description": "Puffin Box marks a new beginning as a &#8216;Rave in a Box&#8217; concept is born.\r\n                               ",
            "openingtimes": {
                "doorsopen": "16:15",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "£110 / £120",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13788598",
            "EventCode": "LIVE",
            "eventname": "Klangstof",
            "cancelled": "1",
            "cancellationDate": "2020-08-04 16:40:58",
            "cancellationType": "rescheduled",
            "cancellationReason": "Unforeseen Circumstances",
            "rescheduledDate": "",
            "venue": {
                "id": 94728,
                "name": "YES Basement",
                "address": "38 Charles Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 7DB",
                "country": "GB",
                "phone": "",
                "latitude": 53.4741142,
                "longitude": -2.2382036,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/1/3/1279336_1_klangstof_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/1/3/1279336_1_klangstof.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/YES-Basement/Klangstof/13788598/",
            "date": "2020-08-07",
            "startdate": "2020-08-07T19:30:00+00:00",
            "enddate": "2020-08-07T23:00:00+00:00",
            "description": "Amsterdam-based alternative pop act Klangstof was founded by Dutch/Norwegian musician Koen van de Wardt",
            "openingtimes": {
                "doorsopen": "19:30",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "From £8 incl fees",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13794328",
            "EventCode": "LIVE",
            "eventname": "W.M / Freezy / DJ Emre",
            "cancelled": "1",
            "cancellationDate": "2020-08-04 13:33:41",
            "cancellationType": "cancelled",
            "cancellationReason": "Covid-19 Pandemic",
            "rescheduledDate": "",
            "venue": {
                "id": 15712,
                "name": "FAC 251 The Factory",
                "address": "112-118 Princess Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 7EN",
                "country": "GB",
                "phone": "0161 637 2570",
                "latitude": 53.4739586,
                "longitude": -2.2373095,
                "type": "Nightclub",
                "rating": 3
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/4/8/b/1281916_1_wm-freezy-dj-emre_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/4/8/b/1281916_1_wm-freezy-dj-emre.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/FAC-251-The-Factory/WM--Freezy--DJ-Emre/13794328/",
            "date": "2020-08-07",
            "startdate": "2020-08-07T19:00:00+00:00",
            "enddate": "2020-08-07T23:00:00+00:00",
            "description": "Large Amounts shout -  hosted by &#8216;W.M productions                       ",
            "openingtimes": {
                "doorsopen": "19:00",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "14",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "£5.99",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13809580",
            "EventCode": "BARPUB",
            "eventname": "Reserve a table",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 6668,
                "name": "The Venue Nightclub",
                "address": "29 Jacksons Row",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M2 5WD",
                "country": "GB",
                "phone": "0161 834 3793",
                "latitude": 53.479015,
                "longitude": -2.247575,
                "type": "Nightclub",
                "rating": 3
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/c/3/e/1286911_1_reserve-a-table_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/c/3/e/1286911_1_reserve-a-table.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/The-Venue-Nightclub/Reserve-a-table/13809580/",
            "date": "2020-08-07",
            "startdate": "2020-08-07T18:00:00+00:00",
            "enddate": "2020-08-08T00:00:00+00:00",
            "description": "Reserve a table for The Venue NightPub - Tables reservations include £5 bar tab, guarantee your space",
            "openingtimes": {
                "doorsopen": "18:00",
                "doorsclose": "00:00",
                "lastentry": "23:30"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "Free",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13798820",
            "EventCode": "CLUB",
            "eventname": "42s Reopening Party",
            "cancelled": "1",
            "cancellationDate": "2020-08-04 11:56:12",
            "cancellationType": "rescheduled",
            "cancellationReason": "Due to unforeseen circumstances",
            "rescheduledDate": "2020-09-10",
            "venue": {
                "id": 83440,
                "name": "42nd Street Nightclub",
                "address": "2 Bootle Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M2 5GU",
                "country": "GB",
                "phone": "0161 831 7108",
                "latitude": 53.478522,
                "longitude": -2.249062,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/a/a/b/1283629_1_42s-reopening-party_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/a/a/b/1283629_1_42s-reopening-party.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/42nd-Street-Nightclub/42s-Reopening-Party/13798820/",
            "date": "2020-08-07",
            "startdate": "2020-08-07T22:30:00+00:00",
            "enddate": "2020-08-08T03:00:00+00:00",
            "description": "It's the party to end all party's..limited tickets available! (Date subject to change)",
            "openingtimes": {
                "doorsopen": "22:30",
                "doorsclose": "03:00",
                "lastentry": "02:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "5.00",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13806535",
            "EventCode": "FEST",
            "eventname": "Haus22 at Social Avenue | OC & Verde, Rudosa + more",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 103203,
                "name": "Car Park",
                "address": "Longbridge Rd",
                "town": "Trafford Park",
                "postcode_lookup": "Manchester",
                "postcode": "M17 1SN",
                "country": "GB",
                "phone": "",
                "latitude": 53.470449,
                "longitude": -2.321634,
                "type": "Outdoors",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/b/5/0/1285831_1_haus22-at-social-avenue-oc-verde-rudosa-more_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/b/5/0/1285831_1_haus22-at-social-avenue-oc-verde-rudosa-more.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Car-Park/Haus22-at-Social-Avenue--OC--Verde-Rudosa--more/13806535/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T14:00:00+00:00",
            "enddate": "2020-08-08T22:00:00+00:00",
            "description": "Social Avenue presents Haus22! Taking over a Manchester Car Park and turning it in to a safe, socially distant event environment.",
            "openingtimes": {
                "doorsopen": "14:00",
                "doorsclose": "22:00",
                "lastentry": "16:30"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "£15-£20",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13810034",
            "EventCode": "CLUB",
            "eventname": "Viadux Social Club w/ Clint Boon",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 103278,
                "name": "Viadux",
                "address": "Lawrence House, 8 Albion Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 5NZ",
                "country": "GB",
                "phone": "07449790392",
                "latitude": 53.475034,
                "longitude": -2.248008,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/e/6/7/1287029_0_viadux-social-club-w-clint-boon_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/e/6/7/1287029_0_viadux-social-club-w-clint-boon.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Viadux/Viadux-Social-Club-w-Clint-Boon/13810034/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T12:00:00+00:00",
            "enddate": "2020-08-08T21:00:00+00:00",
            "description": "Join us outside for a socially distanced day party with DJ Clint Boon! Group Tickets of 4 and 6 Available.",
            "openingtimes": {
                "doorsopen": "12:00",
                "doorsclose": "21:00",
                "lastentry": "16:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "£5 ",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13808984",
            "EventCode": "CLUB",
            "eventname": "You&Me Courtyard Party - Josh Baker b2b Laidlaw ",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 28440,
                "name": "TBA",
                "address": "Manchester City Centre",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M4 ***",
                "country": "GB",
                "phone": "01612365929",
                "latitude": 53.4847112,
                "longitude": -2.2272649,
                "type": "Theatre",
                "rating": 3
            },
            "imageurl": "https://d1plawd8huk6hh.cloudfront.net/assets/default400.png",
            "largeimageurl": "https://d1plawd8huk6hh.cloudfront.net/assets/default400.png",
            "link": "https://www.skiddle.com/whats-on/Manchester/TBA/YouMe-Courtyard-Party---Josh-Baker-b2b-Laidlaw-/13808984/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T14:00:00+00:00",
            "enddate": "2020-08-08T22:00:00+00:00",
            "description": "We are back on August 8th to host an extra special welcome back at an unused open air courtyard space in the heart of Manchester city centre. \r\n",
            "openingtimes": {
                "doorsopen": "14:00",
                "doorsclose": "22:00",
                "lastentry": "16:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "10",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13805919",
            "EventCode": "CLUB",
            "eventname": "Puffin Box: La Discotheque",
            "cancelled": "1",
            "cancellationDate": "2020-08-05 16:00:39",
            "cancellationType": "rescheduled",
            "cancellationReason": "Postponed due to the new Government Restrictions - New date announced very soon!",
            "rescheduledDate": "",
            "venue": {
                "id": 103193,
                "name": "Hilton House Basement ",
                "address": "Hilton Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 2EH",
                "country": "GB",
                "phone": "",
                "latitude": 53.4814574,
                "longitude": -2.2320759,
                "type": "Exhibition Centre",
                "rating": 0
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/7/1/f/1285595_1_puffin-box-brand-name_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/7/1/f/1285595_1_puffin-box-brand-name.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Hilton-House-Basement-/Puffin-Box-La-Discotheque/13805919/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T12:45:00+00:00",
            "enddate": "2020-08-08T23:00:00+00:00",
            "description": "Puffin Box marks a new beginning as a &#8216;Rave in a Box&#8217; concept is born.\r\n                               ",
            "openingtimes": {
                "doorsopen": "12:45",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "£110 / £120",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13809581",
            "EventCode": "BARPUB",
            "eventname": "Reserve a table - Saturday",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 6668,
                "name": "The Venue Nightclub",
                "address": "29 Jacksons Row",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M2 5WD",
                "country": "GB",
                "phone": "0161 834 3793",
                "latitude": 53.479015,
                "longitude": -2.247575,
                "type": "Nightclub",
                "rating": 3
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/3/b/a/1286912_1_reserve-a-table-saturday_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/3/b/a/1286912_1_reserve-a-table-saturday.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/The-Venue-Nightclub/Reserve-a-table---Saturday/13809581/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T17:00:00+00:00",
            "enddate": "2020-08-09T01:00:00+00:00",
            "description": "Reserve a table for The Venue NightPub - Tables reservations include £5 bar tab",
            "openingtimes": {
                "doorsopen": "17:00",
                "doorsclose": "01:00",
                "lastentry": "00:30"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "Free",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13785167",
            "EventCode": "FEST",
            "eventname": "Manchester Adored Presents The Circus ",
            "cancelled": "1",
            "cancellationDate": "2020-07-10 15:05:02",
            "cancellationType": "rescheduled",
            "cancellationReason": "Unforeseen Circumstances",
            "rescheduledDate": "2020-11-28",
            "venue": {
                "id": 30902,
                "name": "Bowlers Exhibition Centre",
                "address": " Longbridge Road, Stretford",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M17 1EH",
                "country": "GB",
                "phone": "01618760007",
                "latitude": 53.469034,
                "longitude": -2.331181,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/d/7/4/1278011_2_manchester-adored-presents-the-circus-_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/d/7/4/1278011_2_manchester-adored-presents-the-circus-.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Bowlers-Exhibition-Centre/Manchester-Adored-Presents-The-Circus-/13785167/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T14:00:00+00:00",
            "enddate": "2020-08-09T02:00:00+00:00",
            "description": "Our 1st Manchester Adored  Event featuring the Very Best in the UK'S Tribute bands + LIVE DJ Set from BEZ (Happy Mondays) and LIVE PA from Rowetta (Happy Monday",
            "openingtimes": {
                "doorsopen": "14:00",
                "doorsclose": "02:00",
                "lastentry": "23:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "£15",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13809173",
            "EventCode": "CLUB",
            "eventname": "Our First Socially Distanced Daytime Dance (100 cap)",
            "cancelled": "1",
            "cancellationDate": "2020-08-04 16:01:03",
            "cancellationType": "rescheduled",
            "cancellationReason": "Covid-19 Pandemic",
            "rescheduledDate": "2020-08-15",
            "venue": {
                "id": 99712,
                "name": "Somewhere In Manchester",
                "address": " Manchester",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M12 6HS",
                "country": "GB",
                "phone": "",
                "latitude": 53.4723035,
                "longitude": -2.2265639,
                "type": "Nightclub",
                "rating": 5
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/d/e/0/1286799_0_the-loft-our-first-socially-distanced-daytime-dance_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/d/e/0/1286799_0_the-loft-our-first-socially-distanced-daytime-dance.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Somewhere-In-Manchester/Our-First-Socially-Distanced-Daytime-Dance-100-cap/13809173/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T14:00:00+00:00",
            "enddate": "2020-08-08T23:00:00+00:00",
            "description": "Welcome to the loft...",
            "openingtimes": {
                "doorsopen": "14:00",
                "doorsclose": "23:00",
                "lastentry": "16:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "20",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13784539",
            "EventCode": "CLUB",
            "eventname": "Upcloseandpersonalmcr with Dmitry Molosh ",
            "cancelled": "0",
            "cancellationDate": "",
            "cancellationType": "",
            "cancellationReason": "",
            "rescheduledDate": "",
            "venue": {
                "id": 37434,
                "name": "The Whiskey Jar",
                "address": "16 Tariff Street M1 2FF Manchester",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 2FF",
                "country": "GB",
                "phone": "0161 237 5686",
                "latitude": 53.481298,
                "longitude": -2.232008,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/7/b/1277850_1_upcloseandpersonalmcr-with-dmitry-molosh-_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/0/7/b/1277850_1_upcloseandpersonalmcr-with-dmitry-molosh-.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/The-Whiskey-Jar/Upcloseandpersonalmcr-with-Dmitry-Molosh-/13784539/",
            "date": "2020-08-08",
            "startdate": "2020-08-08T22:45:00+00:00",
            "enddate": "2020-08-09T04:00:00+00:00",
            "description": "Dmitry from Belarus  is famous for his inimitable progressive sound and excellent taste in music, ",
            "openingtimes": {
                "doorsopen": "22:45",
                "doorsclose": "04:00",
                "lastentry": "02:00"
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": true,
            "entryprice": "12.00",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13805936",
            "EventCode": "CLUB",
            "eventname": "Puffin Box: La Discotheque",
            "cancelled": "1",
            "cancellationDate": "2020-08-05 16:01:25",
            "cancellationType": "rescheduled",
            "cancellationReason": "Postponed due to the new Government Restrictions - New date announced very soon!",
            "rescheduledDate": "",
            "venue": {
                "id": 103193,
                "name": "Hilton House Basement ",
                "address": "Hilton Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 2EH",
                "country": "GB",
                "phone": "",
                "latitude": 53.4814574,
                "longitude": -2.2320759,
                "type": "Exhibition Centre",
                "rating": 0
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/1/a/1285608_1_puffin-box-brand-name_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/1/a/1285608_1_puffin-box-brand-name.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Hilton-House-Basement-/Puffin-Box-La-Discotheque/13805936/",
            "date": "2020-08-09",
            "startdate": "2020-08-09T12:45:00+00:00",
            "enddate": "2020-08-09T23:00:00+00:00",
            "description": "Puffin Box marks a new beginning as a &#8216;Rave in a Box&#8217; concept is born.                       ",
            "openingtimes": {
                "doorsopen": "12:45",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "£110 / £120",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13741832",
            "EventCode": "LIVE",
            "eventname": "Damian Jr. Gong Marley",
            "cancelled": "1",
            "cancellationDate": "2020-07-27 14:47:17",
            "cancellationType": "rescheduled",
            "cancellationReason": "Covid-19 Pandemic",
            "rescheduledDate": "",
            "venue": {
                "id": 35106,
                "name": "O2 Victoria Warehouse",
                "address": " Trafford Wharf Road",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M17 1AB",
                "country": "GB",
                "phone": "0161 660 7000",
                "latitude": 53.464265,
                "longitude": -2.284971,
                "type": "live",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/3/1/8/1260239_1_damian-jr-gong-marley_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/3/1/8/1260239_1_damian-jr-gong-marley.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/O2-Victoria-Warehouse/Damian-Jr-Gong-Marley/13741832/",
            "date": "2020-08-12",
            "startdate": "2020-08-12T19:00:00+00:00",
            "enddate": "2020-08-12T23:00:00+00:00",
            "description": "Metropolis Music Presents: Damian Jr. Gong Marley, live at O2 Victoria Warehouse, Manchester on Wednesday 12th August 2020",
            "openingtimes": {
                "doorsopen": "19:00",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "14",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "From £32.50 incl fees",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13785278",
            "EventCode": "LIVE",
            "eventname": "Willie J Healey",
            "cancelled": "1",
            "cancellationDate": "2020-07-24 10:46:28",
            "cancellationType": "rescheduled",
            "cancellationReason": "Covid-19 Pandemic",
            "rescheduledDate": "2021-05-06",
            "venue": {
                "id": 11705,
                "name": "The Deaf Institute",
                "address": "135 Grosvenor Street",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 7HE",
                "country": "GB",
                "phone": "0161 276 9350",
                "latitude": 53.470211,
                "longitude": -2.236514,
                "type": "live",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/9/1/f/1278051_1_willie-j-healey_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/9/1/f/1278051_1_willie-j-healey.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/The-Deaf-Institute/Willie-J-Healey/13785278/",
            "date": "2020-08-12",
            "startdate": "2020-08-12T19:30:00+00:00",
            "enddate": "2020-08-12T23:00:00+00:00",
            "description": "Now Wave presents Oxford-born singer-songwriter Willie J Healey live at The Deaf Institute on Wednesday 12th August 2020",
            "openingtimes": {
                "doorsopen": "19:30",
                "doorsclose": "23:00",
                "lastentry": ""
            },
            "minage": "14",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "From £10 + BF",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        },
        {
            "id": "13789291",
            "EventCode": "LIVE",
            "eventname": "The Velvet Hands - Manchester *Rescheduled*",
            "cancelled": "1",
            "cancellationDate": "2020-07-21 17:22:48",
            "cancellationType": "rescheduled",
            "cancellationReason": "Due to covid 19",
            "rescheduledDate": "2021-03-25",
            "venue": {
                "id": 97652,
                "name": "Off The Square",
                "address": " 65-67, Lever Street Manchester, M1 1FL",
                "town": "Manchester",
                "postcode_lookup": "Manchester",
                "postcode": "M1 1FL",
                "country": "GB",
                "phone": "",
                "latitude": 53.4836446,
                "longitude": -2.2323615,
                "type": "Nightclub",
                "rating": 4
            },
            "imageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/3/e/1279789_1_the-velvet-hands-manchester_th.jpg",
            "largeimageurl": "https://d31fr2pwly4c4s.cloudfront.net/2/3/e/1279789_1_the-velvet-hands-manchester.jpg",
            "link": "https://www.skiddle.com/whats-on/Manchester/Off-The-Square/The-Velvet-Hands---Manchester-Rescheduled/13789291/",
            "date": "2020-08-13",
            "startdate": "2020-08-13T19:00:00+00:00",
            "enddate": "2020-08-13T22:00:00+00:00",
            "description": "&#8220;The best club in the UK for future rock & roll stars&#8221; Noel Gallagher                 .                  ",
            "openingtimes": {
                "doorsopen": "19:00",
                "doorsclose": "22:00",
                "lastentry": ""
            },
            "minage": "18",
            "imgoing": null,
            "goingtos": 0,
            "goingtocount": "0",
            "tickets": false,
            "entryprice": "8",
            "eventvisibility": "public",
            "rep": {
                "enabled": false
            }
        }
    ],
    "elastic": {
        "timing": 3
    },
    "requestId": "api_5f2bd25cb8f5d6.94684113"
};
  const component = render(
    <EventList/>,
      createStore(() => (storeState))
  );
  expect(component.getByText(/Venue Nightpub/)).toBeInTheDocument();

});



})
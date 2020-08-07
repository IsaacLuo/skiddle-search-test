declare interface IStoreState {
  app: IAppState;
}

declare interface IEvent {
  id: string;
  EventCode: string;
  eventname: string;
  cancelled: string;
  cancellationDate: string;
  cancellationType: string;
  cancellationReason: string;
  rescheduledDate: string;
  venue: {
    id: number;
    name: string;
    address: string;
    town: string;
    postcode_lookup: string;
    postcode: string;
    country: string;
    phone: string;
    latitude: number;
    longitude: number;
    type: string;
    rating: number;
  };
  imageurl: string;
  largeimageurl: string;
  link: string;
  date: string;
  startdate: string;
  enddate: string;
  description: string;
  openingtimes: {
    doorsopen: string;
    doorsclose: string;
    lastentry: string;
  };
  minage: numbe;
  imgoing: any;
  goingtos: number;
  goingtocount: string;
  tickets: boolean;
  entryprice: string;
  eventvisibility: string;
  rep: {
    enabled: boolean;
  };
}

declare interface ISearchResultList {
  error: number;
  totalCount: string;
  pagecount: number;
  results: IEvent[];
  elastic: any; // not sure what is it yet;
  requestId: string;
}

declare interface IEventDetail {
  id: string;
  listingid: string;
  eventname: string;
  cancelled: string;
  cancellationDate: string;
  cancellationType: string;
  cancellationReason: string;
  rescheduledDate: string;
  venue: {
    id: string;
    name: string;
    address: string;
    town: string;
    postcode: string;
    countrycode: string;
    cityname: string;
    phone: string;
    latitude: string;
    longitude: string;
    link: string;
  };
  imageurl: string;
  largeimageurl: string;
  headerhex: string;
  link: string;
  date: string;
  dateStart: string;
  dateEnd: string;
  startdate: string;
  enddate: string;
  description: string;
  openingtimes: {
    doorsopen: string;
    doorsclose: string;
    lastentry: string;
  };
  genres: {
    genreid: number;
    name: string;
  }[];
  entryprice: number;
  MinAge: number;
  going: {
    userid: string;
    name: string;
    image: string;
  }[];
  imgoing: number;
  goingtos: number;
  artists: {
    artistid: string;
    name: string;
    image: string;
    spotifymp3url: string;
    spotifyartisturl: string;
  }[];
  ticketStatus: string;
  tickets: boolean;
  paymentPlanTCs: string;
  eventVisibility: string;
  rep: {
    enabled: boolean;
  };
  seatingPlanID: string;
}

declare interface IEventDetailResult {
  error: number;
  totalCount: number;
  pagecount: number;
  results: IEventDetail;
  requestId: string;
}

declare interface IArtistDetail {
  id: string;
  name: string;
  description: string;
  imageurl: string;
  twitter: string;
  favourite: number;
  mix: any;
  link: string;
  spotifymp3url: string;
  spotifyartisturl: string;
}

declare interface IArtistDetailResult {
  error: number;
  totalCount: number;
  pagecount: number;
  results: IArtistDetail;
  requestId: string;
}

declare interface IAppState {
  searchResult?: ISearchResultList;
  artistDetail?: IArtistDetailResult;
  currentEventDetail?: IEventDetailResult;
}

declare interface IAction {
  type: string;
  data: any;
}

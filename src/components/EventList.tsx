import React from 'react';
import styled from 'styled-components';
import { useMappedState } from 'redux-react-hook';
import EventmeBriefBox from './EventBriefBox';

const EventListPanel = styled.section`
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const EventListPanelContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const EventList = () => {
  const {
    Events,
  } = useMappedState((state:IStoreState)=>({
    Events: state.app.searchResult?.results,
  }));
  return (
    <EventListPanel>
      <EventListPanelContent>
      {Events?.map((event:IEvent, idx)=><EventmeBriefBox key={idx} event={event} />)}
      {Events?.length === 0 && <div>no events</div>}
      </EventListPanelContent>
    </EventListPanel>
  );
}

export default EventList;

import React, { FunctionComponent, useEffect } from "react";
import { Spin } from "antd";
import styled from "styled-components";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Descriptions } from "antd";
import { Link } from "react-router-dom";

const LoadingPanel = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;

const EventDetailPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtistImg = styled.img`
  width: 200px;
  height: 200px;
`;

const ArtistName = styled.div`
  font-weight: bold;
`;

const ImageSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const EventDetailSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ArtistSection = styled.section`
  margin-top: 50px;
  width: 90%;
`;

const ArtistPanel = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const EventDetail: FunctionComponent<{ id: string }> = ({ id }) => {
  const { detail } = useMappedState((state: IStoreState) => ({
    detail: state.app.currentEventDetail?.results,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (detail === undefined) {
      dispatch({ type: "FETCH_EVENT_DETAIL", data: id });
    }
    return () => {
      dispatch({ type: "SET_EVENT_DETAIL", data: undefined });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (detail === undefined) {
    return (
      <LoadingPanel>
        <Spin data-testid="spin" />
      </LoadingPanel>
    );
  }

  return (
    <EventDetailPanel>
      <ImageSection>
        <img src={detail.largeimageurl} alt="event" />
      </ImageSection>
      <EventDetailSection>
        <h1>event details</h1>
        <Descriptions bordered>
          <Descriptions.Item label="event name">
            {detail.eventname}
          </Descriptions.Item>
          <Descriptions.Item label="address">
            {detail.venue?.address}
          </Descriptions.Item>
          <Descriptions.Item label="town">
            {detail.venue?.town}
          </Descriptions.Item>
          <Descriptions.Item label="description">
            {detail.description}
          </Descriptions.Item>
        </Descriptions>
      </EventDetailSection>
      <ArtistSection>
        <h1>artists</h1>
        <ArtistPanel>
          {detail.artists.map((artist, idx) => (
            <div key={idx}>
              <Link to={`/artists/${artist.artistid}`}>
                <ArtistImg src={artist.image} />
                <ArtistName>{artist.name}</ArtistName>
              </Link>
            </div>
          ))}
        </ArtistPanel>
      </ArtistSection>
    </EventDetailPanel>
  );
};

export default EventDetail;

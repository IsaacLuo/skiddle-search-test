import React, { FunctionComponent, useEffect } from "react";
import { Spin } from "antd";
import styled from "styled-components";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Descriptions } from "antd";

const LoadingPanel = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;

const ArtistDetailPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ArtistDetailSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ArtistDetail: FunctionComponent<{ id: string }> = ({ id }) => {
  const { detail } = useMappedState((state: IStoreState) => ({
    detail: state.app.artistDetail?.results,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (detail === undefined) {
      dispatch({ type: "FETCH_ARTIST_DETAIL", data: id });
    }
    return () => {
      dispatch({ type: "SET_ARTIST_DETAIL", data: undefined });
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
    <ArtistDetailPanel>
      <ImageSection>
        <img src={detail.imageurl} alt="artist" />
      </ImageSection>
      <ArtistDetailSection>
        <h1>artist detail</h1>
        <Descriptions bordered>
          <Descriptions.Item label="name">{detail.name}</Descriptions.Item>
          <Descriptions.Item label="description">
            {detail.description}
          </Descriptions.Item>
        </Descriptions>
      </ArtistDetailSection>
    </ArtistDetailPanel>
  );
};

export default ArtistDetail;

import React from "react";
import { Input } from "antd";
import { GREEN_BACKGROUND_COLOR } from "../const";
import styled from "styled-components";
import { useDispatch } from "redux-react-hook";
import ProgramList from "../components/EventList";

const SearchPanel = styled.section`
  background-color: ${GREEN_BACKGROUND_COLOR};
  padding: 20px 80px;
`;

function SearchPage() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SearchPanel className="searchPanel" data-testid="search-panel">
        <Input.Search
          placeholder="search for events"
          onSearch={(value) =>
            dispatch({ type: "FETCH_SEARCH_RESULT", data: value })
          }
          data-testid="search-event-input"
        />
      </SearchPanel>
      <ProgramList />
    </React.Fragment>
  );
}

export default SearchPage;

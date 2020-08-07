import React from "react";
import SearchPage from "./pages/SearchPage";
import EventDetail from "./pages/EventDetail";
import ArtistDetail from './pages/ArtistDetail';
import styled from "styled-components";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GREEN_BACKGROUND_COLOR } from "./const";

const AppDiv = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background: ${GREEN_BACKGROUND_COLOR};
`;
const SkiddleLogo = styled.img`
  height: 214px;
`;

function App() {

  return (
    <AppDiv>
      <Header>
        <a href='/' data-testid="homeLink">
          <SkiddleLogo
            src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-white-landscape.png"
            alt="logo"
          />
        </a>
      </Header>

      <Router>
        <Route path="/" exact={true} component={SearchPage} />
        <Route path="/events/:id" exact={true} render={(props)=><EventDetail id={props.match.params.id}/>} />
        <Route path="/artists/:id" exact={true} render={(props)=><ArtistDetail id={props.match.params.id}/>} />
      </Router>
    </AppDiv>
  );
}

export default App;

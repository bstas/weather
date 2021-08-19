import styled from "styled-components";
import CurrentWeather from "../../../components/CurrentWeather/CurrentWeather";
import WelcomeComponent from "../../../components/WelcomeComponent/WelcomeComponent";
import { Switch, Route } from "react-router-dom";

const MainContentWrapper = styled.div`
  width: 80%;
  min-height: 70vh;
  background: #f3f3f3;
`;

const MainContext = () => {
  return (
    <MainContentWrapper>
      <div>
        <Switch>
          <Route exact path="/" component={WelcomeComponent} />
          <Route path={["/weather", "/daily"]} component={CurrentWeather} />
        </Switch>
      </div>
    </MainContentWrapper>
  );
};

export default MainContext;

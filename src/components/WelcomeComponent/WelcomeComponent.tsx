import styled from "styled-components";
import weather from "../../assets/icons/Weather.svg.png";
import { FC } from "react";

const WeatherImage = styled.img`
  width: 400px;
  margin: 0 auto;
`;

const WelcomeText = styled.h1`
  font-size: 56px;
  font-weight: 400;
  font-style: italic;
  color: lightgrey;
`;

const WelcomeWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const WelcomeComponent: FC = () => {
  return (
    <WelcomeWrapper>
      <WeatherImage src={weather} />
      <WelcomeText>Welcome to Weather App</WelcomeText>
    </WelcomeWrapper>
  );
};

export default WelcomeComponent;

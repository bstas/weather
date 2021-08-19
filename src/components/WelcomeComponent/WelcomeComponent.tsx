import styled from "styled-components";
import weather from '../../assets/icons/Weather.svg.png';

const WeatherImage = styled.img`
  width: 400px;
  margin: 0 auto;
`

const WelcomeText = styled.h1`
  font-size: 56px;
  font-weight: 400;
  font-style: italic;
  color: lightgrey;
`

const WelcomeComponent = () => {
    return (
        <div style={{ "textAlign": "center", "marginTop": "100px" }}>
            <WeatherImage src={weather} />
            <WelcomeText>Welcome to Weather App</WelcomeText>
        </div>
    )
}

export default WelcomeComponent;

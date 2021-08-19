import React, { useCallback, useEffect, useState, FC, ReactElement } from "react";
import { useRouteMatch } from "react-router-dom";
import debounce from "lodash.debounce";
import CurrentWeatherTable from "./CurrentWeatherTable/CurrentWeatherTable";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import SearchHeader from "../SearchHeader/SearchHeader";
import DailyWeatherTable from "./DailyWeatherTable/DailyWeatherTable";
import {
  ContentWrapper,
  Header,
  HeaderWrapper,
  ItemsWrapper,
} from "../../assets/styles/styles";
import CallService from "../../services/API";

const CurrentWeather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { path } = useRouteMatch();

  const handleSearch = (e) => {
    setCity(null);
    setSearch(e.target.value);
  };

  const handleSubmitSearch = async () => {
    const queryKeys = {
      key: `${process.env.REACT_APP_USER_TOKEN}`,
      q: search,
    };

    setLoading(true);
    const city = await CallService.WeatherAPI(
      "/forecast.json",
      queryKeys,
      "get"
    );
    if (city) {
      setLoading(false);
      setCity(city.data);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setCity(null);
  };

  const delayRequest = useCallback(debounce(handleSubmitSearch, 500), [search]);

  useEffect(() => {
    search && delayRequest();

    return delayRequest.cancel;
  }, [search, delayRequest]);

  useEffect(() => {
    setSearch("");
    setCity(null);
  }, [path]);

  return (
    <ItemsWrapper>
      <Header>
        {path === "/weather" ? "Current Weather" : "Daily Weather"}
      </Header>
      <HeaderWrapper>
        <SearchHeader
          onChange={handleSearch}
          onClick={clearSearch}
          placeholder="Enter your city"
          value={search}
        />
      </HeaderWrapper>
      <ContentWrapper>
        {path === "/weather" ? (
          <CurrentWeatherTable city={city} loading={loading} />
        ) : (
          <DailyWeatherTable city={city} loading={loading} />
        )}
      </ContentWrapper>

      <NotificationContainer />
    </ItemsWrapper>
  );
};

export default CurrentWeather;

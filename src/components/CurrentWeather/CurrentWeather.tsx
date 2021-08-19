import React, { useCallback, useEffect, useState, FC } from "react";
import { useRouteMatch } from "react-router-dom";
import debounce from "lodash.debounce";
import CurrentWeatherTable from "./CurrentWeatherTable/CurrentWeatherTable";
// @ts-ignore
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
import { AxiosResponse } from "axios";

const CurrentWeather: FC = () => {
  const [city, setCity] = useState<null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { path } = useRouteMatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(null);
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleSubmitSearch = async () => {
    const queryKeys: object = {
      key: `${process.env.REACT_APP_USER_TOKEN}`,
      q: search,
    };

    setLoading(true);
    const city: AxiosResponse = await CallService.WeatherAPI(
      "/forecast.json",
      "get",
      queryKeys
    );
    if (city) {
      setLoading(false);
      setCity(city.data);
    }
  };

  const clearSearch = (): void => {
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

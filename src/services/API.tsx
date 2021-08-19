import axios from "axios";
import Notifications from "../components/Notifications/Notifications";
// @ts-ignore
import qs from "query-string";

const weatherBaseURL = "https://api.weatherapi.com/v1";
const userBaseURL = "https://login-base-form-default-rtdb.firebaseio.com/users";

const WeatherAPI = axios.create({
  baseURL: weatherBaseURL,
});

const UserAPI = axios.create({
  baseURL: userBaseURL,
});

class CallService {
  static async WeatherAPI(
    url?: string,
    method?: string,
    query?: object,
    data?: object
  ) {
    const params: object = {
      url: `${url}?${qs.stringify(query)}`,
      method: method,
      data: data,
    };

    try {
      const data = await WeatherAPI(params);
      Notifications("success");
      return data;
    } catch (error) {
      Notifications("error");
      return error;
    }
  }

  static async UserApi(url?: string, method?: string, data?: object) {
    const params: object = {
      url: `${url}`,
      method: method,
      data: data,
    };
    try {
      const data = await UserAPI(params);
      Notifications("success");
      return data;
    } catch (error) {
      Notifications("error");
      return error;
    }
  }
}

export default CallService;

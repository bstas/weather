import axios from "axios";
import Notifications from "../components/Notifications/Notifications";
import qs from "query-string";

const baseURL = "https://api.weatherapi.com/v1";

const API = axios.create({
  baseURL,
});

class CallService {
  static async WeatherAPI(url, method, query, data) {
    const params = {
      url: `${url}?${qs.stringify(query)}`,
      method: method,
      data: data,
    };
    try {
      const data = await API(params);
      Notifications("success");
      return data;
    } catch (error) {
      Notifications("error");
      return error;
    }
  };
}

export default CallService;

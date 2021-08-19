import { Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import CurrentWeatherTable from "../CurrentWeatherTable/CurrentWeatherTable";
import { TableContainerWrapper } from "../../../assets/styles/styles";

const DailyWeatherTable = ({ city, loading }) => {
  const day = city && city.forecast.forecastday[0];

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainerWrapper component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ background: "lightblue" }}>
                <TableCell>Time</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Feels like</TableCell>
                <TableCell>Wind</TableCell>
                <TableCell>Clouds</TableCell>
                <TableCell>Chance of rain</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {day &&
                day.hour.map((item) => {
                  return (
                    <TableRow key={item.time_epoch}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ fontWeight: "600" }}
                      >
                        {item.time}
                      </TableCell>
                      <TableCell>{`${item.temp_c} °C`}</TableCell>
                      <TableCell>{`${item.feelslike_c} °C`}</TableCell>
                      <TableCell>{`${item.wind_kph} kph`}</TableCell>
                      <TableCell>
                        <img
                          src={item.condition.icon}
                          alt={item.condition.text}
                          title={item.condition.text}
                        />
                      </TableCell>
                      <TableCell>{`${item.chance_of_rain} %`}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainerWrapper>
      )}
    </>
  );
};

CurrentWeatherTable.propTypes = {
  city: PropTypes.object,
  loading: PropTypes.bool,
};

export default DailyWeatherTable;

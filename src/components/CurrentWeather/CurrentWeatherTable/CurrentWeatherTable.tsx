import React from 'react';
import { Paper } from "@material-ui/core";
import _get from "lodash/get";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import { TableContainerWrapper } from "../../../assets/styles/styles";

const CurrentWeatherTable = ({ city, loading }) => {
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainerWrapper component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ background: "lightblue" }}>
                <TableCell>City</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Feels like</TableCell>
                <TableCell>Wind</TableCell>
                <TableCell>Clouds</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "600" }}
                >
                  {_get(city, "location.name")}
                </TableCell>
                <TableCell>
                  {city && `${_get(city, "current.temp_c")} °C`}
                </TableCell>
                <TableCell>
                  {city && `${_get(city, "current.feelslike_c")} °C`}
                </TableCell>
                <TableCell>
                  {city && `${_get(city, "current.wind_kph")} kph`}
                </TableCell>
                <TableCell>
                  <img
                    src={city?.current?.condition.icon}
                    alt={city?.current?.condition.text}
                    title={city?.current?.condition.text}
                  />
                </TableCell>
                <TableCell>{_get(city, "location.localtime")}</TableCell>
              </TableRow>
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

export default CurrentWeatherTable;

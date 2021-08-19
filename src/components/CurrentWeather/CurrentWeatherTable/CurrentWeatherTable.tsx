import React, { FC } from "react";
import { Paper, PaperProps } from "@material-ui/core";
import _get from "lodash/get";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { CircularProgress } from "@material-ui/core";
import { TableContainerWrapper } from "../../../assets/styles/styles";

interface Props {
  city: {
    location?: object;
    current?: {
      condition: {
        icon: string;
        text: string;
      };
    };
    forecast?: object;
  } | null;
  loading: boolean;
}

const CurrentWeatherTable: FC<Props> = ({ city, loading }) => {
  const current = city?.current;

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <TableContainerWrapper<PaperProps | any> component={Paper}>
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
              style={{ fontWeight: "bold" }}
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
                src={current?.condition.icon}
                alt={current?.condition.text}
                title={current?.condition.text}
              />
            </TableCell>
            <TableCell>{_get(city, "location.localtime")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainerWrapper>
  );
};

export default CurrentWeatherTable;

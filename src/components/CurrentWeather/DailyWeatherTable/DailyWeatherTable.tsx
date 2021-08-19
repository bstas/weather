import { Paper, PaperProps } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { CircularProgress } from "@material-ui/core";
import { TableContainerWrapper } from "../../../assets/styles/styles";
import React, { FC } from "react";

interface Props {
  city: {
    location?: object;
    current?: number;
    forecast?: {
      forecastday: [{ hour: [] }];
    };
  } | null;
  loading: boolean;
}

interface DayItem {
  time_epoch: string;
  time: string;
  temp_c: string;
  feelslike_c: string;
  wind_kph: string;
  chance_of_rain: string;
  condition: {
    icon: string;
    text: string;
  };
}

const DailyWeatherTable: FC<Props> = ({ city, loading }) => {
  const dayInfo = city && city?.forecast?.forecastday[0]?.hour;

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <TableContainerWrapper<PaperProps | any> component={Paper}>
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
          {dayInfo &&
            dayInfo.map((day: DayItem) => {
              const {
                time_epoch,
                temp_c,
                feelslike_c,
                wind_kph,
                chance_of_rain,
                time,
              } = day;
              const { icon, text } = day.condition;

              return (
                <TableRow key={time_epoch}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold" }}
                  >
                    {time}
                  </TableCell>
                  <TableCell>{`${temp_c} °C`}</TableCell>
                  <TableCell>{`${feelslike_c} °C`}</TableCell>
                  <TableCell>{`${wind_kph} kph`}</TableCell>
                  <TableCell>
                    <img src={icon} alt={text} title={text} />
                  </TableCell>
                  <TableCell>{`${chance_of_rain} %`}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainerWrapper>
  );
};

export default DailyWeatherTable;

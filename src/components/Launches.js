import React, { useEffect } from "react";
import api from "../api/Api.js";
import { format } from "date-fns";

export default function Launches() {
  const [launches, setLaunches] = React.useState([]);

  useEffect(() => {
    api.get(`launches`).then((res) => {
      const launches = res.data;
      setLaunches(launches);
    });
  }, []);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th colSpan={7}>LAUNCHES</th>
        </tr>
        <tr>
          <th rowSpan={2}>Flight number</th>
          <th rowSpan={2}>Mission name</th>
          <th rowSpan={2}>Launch Year</th>
          <th rowSpan={2}>Lauch Date</th>
          <th colSpan={3}>Rocket</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {launches.map((launch) => (
          <tr key={launch.flight_number}>
            <th>{launch.flight_number}</th>
            <td>{launch.mission_name}</td>
            <td>{launch.launch_year}</td>
            <td>{format(launch.launch_date_unix, "dd MMMM yyyy, HH:mm")}</td>
            <td>{launch.rocket.rocket_id}</td>
            <td>{launch.rocket.rocket_name}</td>
            <td>{launch.rocket.rocket_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

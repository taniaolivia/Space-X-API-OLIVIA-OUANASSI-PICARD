import React, {useEffect} from "react";
import api from "../api/Api.js";
import {Table} from "react-bootstrap";
import {format} from "date-fns";

export default function Capsules() {
 
  const [capsules, setCapsules] = React.useState([]);

  useEffect(() => {
    api.get(`capsules`).then((res) => {
      const capsules = res.data;
      setCapsules(capsules);
    });
  }, []);
  
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th colSpan={7}>CAPSULES</th>
        </tr>
        <tr>
          <th rowSpan={2}>capsule_id</th>
          <th rowSpan={2}>capsule_serial </th>
          <th rowSpan={2}>status</th>
          <th rowSpan={2}>original_launch</th>
          <th rowSpan={2}>original_launch_unix</th>
          <th rowSpan={2}>landings</th>
          <th rowSpan={2}>type</th>
          <th rowSpan={2}>reuse_count</th>
          <th rowSpan={2}>details</th>
          <th colSpan={2}>missions</th>

        </tr>
        <tr>
          <th rowSpan={2}>name</th>
          <th rowSpan={2}>flight</th>
        </tr>
      </thead>
      <tbody>
        {capsules.map((capsule) => (
          <tr key={capsule.capsule_serial}>
            <td>{capsule.capsule_id}</td>
            <td>{capsule.capsule_serial}</td>
            <td>{capsule.status}</td>
            <td>{format(new Date(capsule.original_launch),  "dd MMMM yyyy, HH:mm")}</td>
            <td>{capsule.original_launch_unix}</td>
            <td>{capsule.landings}</td>
            <td>{capsule.type}</td>
            <td>{capsule.reuse_count}</td>
            <td>{capsule.details}</td>
            <td>{capsule.missions.map((mission)=> {return <p key={mission.flight}>{mission.name}</p>})}</td>
            <td>{capsule.missions.map((mission)=> {return <p key={mission.flight}>{mission.flight}</p>})}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
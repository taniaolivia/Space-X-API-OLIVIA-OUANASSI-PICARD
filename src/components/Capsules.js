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
    <Table striped>
     <thead>
        <tr>
          <th colSpan={10}>CAPSULES</th>
        </tr>
        <tr>
          <th rowSpan={2}>Capsule ID</th>
          <th rowSpan={2}>Capsule serial </th>
          <th rowSpan={2}>status</th>
          <th rowSpan={2}>Original launch</th>
          <th rowSpan={2}>Original launch unix</th>
          <th rowSpan={2}>Landings</th>
          <th rowSpan={2}>Type</th>
          <th rowSpan={2}>Reuse count</th>
          <th rowSpan={2}>Details</th>
          <th colSpan={2}>Missions</th>

        </tr>
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Flight</th>
        </tr>
      </thead>
      <tbody>
        {capsules.map((capsule) => (
          <tr key={capsule.capsule_serial}>
            <td>{capsule.capsule_id}</td>
            <td>{capsule.capsule_serial}</td>
            <td>{capsule.status}</td>
            <td>{format(new Date(capsule.original_launch),  "dd MMMM yyyy, HH:mm")}</td>
            <td>{format(new Date(capsule.original_launch_unix),  "dd MMMM yyyy, HH:mm")}</td>
            <td>{capsule.landings}</td>
            <td>{capsule.type}</td>
            <td>{capsule.reuse_count}</td>
            <td>{capsule.details}</td>
            <td>{capsule.missions.map((mission)=> {return <p key={mission.flight}>{mission.name}</p>})}</td>
            <td>{capsule.missions.map((mission)=> {return <p key={mission.flight}>{mission.flight}</p>})}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
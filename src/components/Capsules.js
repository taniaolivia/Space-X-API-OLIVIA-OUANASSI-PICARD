import React, {useEffect} from "react";
import api from "../api/Api.js";

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
          <th rowSpan={2}>mission</th>
        </tr>
        <tr>
          <th>landings</th>
          <th>type</th>
          <th>reuse_count</th>
        </tr>
      </thead>
      <tbody>
        {capsules.map((capsule) => (
          <tr key={capsule.capsule_id}>
            <td>{capsule.capsule_id}</td>
            <td>{capsule.capsule_serial}</td>
            <td>{capsule.status}</td>
            <td>{capsule.mission}</td>
            <td>{capsule.landings}</td>
            <td>{capsule.type}</td>
            <td>{capsule.reuse_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

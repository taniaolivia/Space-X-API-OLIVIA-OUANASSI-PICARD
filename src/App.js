import './App.css';
import Launches from './components/Launches';
import React from 'react';
import api from "./api/Api.js";




 class Capsules extends React.Component{
  state={
    capsules:[]
  }
  componentDidMount() {
    api.get(`capsules`)
      .then(res => {
        const capsules = res.data;
        this.setState({ capsules });
      })
  }

  render() {
    return (
      <table className="table table-bordered">
                <thead>
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
                    {
                        this.state.capsules.map(capsule =>
                            <tr key={capsule.capsule_id}> 
                                <th>{capsule.capsule_serial}</th>
                                <td>{capsule.status}</td>
                                <td>{capsule.mission}</td>
                                <td>{capsule.landings}</td>
                                <td>{capsule.type}</td>
                                <td>{capsule.reuse_count}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    )
  }

}

function App() {
  return (
    
    <div className="App">
      <Launches/>
      <Capsules/>
    </div>
  );
}

export default App;

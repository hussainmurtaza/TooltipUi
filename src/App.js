import React from "react";
import Chart from "react-apexcharts"
import GraphComponent from './Components/GraghComponent'

class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        <GraphComponent graphData = { [45, 46, 47, 44, 43, 42, 47, 48] }/>
      </div>
    );
  }
}

export default App;
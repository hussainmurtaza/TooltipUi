import React from "react";
import Chart from "react-apexcharts"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from './TooltipComponent'

class GraphComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.series,'mmm')
    this.state = {
        
        
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        tooltip: {
            
            }
                

            // custom: function({series, seriesIndex, dataPointIndex, w})
            //  {
            //   return(
            //             '<div class="main">' + 
            //             '<span class="row">' +
            //             '<span class="col-7">' +
            //             'Performance Score' +
            //             '</span>' +
            //             '<span class="col-4">' +
            //                 '12-04-12'+    
            //             '</span>' +
            //             '</span>' +
            //             '<span class="row">'+ 
            //             '<p class="col-12">'+
            //             '<span class="tre">' +
            //             series[seriesIndex][dataPointIndex]+
            //             '</span>' +
            //             '/50'+ 
            //             '</p>'+
            //             '<span>' +
                        
            //             '</span>' +
            //             '</span>'+
            //             '<span class="row">'+  
            //             '</span>' +
            //             '<span class="row">'+  
            //                 '<span class="col-10">'+
            //                 '<p> <span class="icon-tri"> &#9650 </span> Largest Contentful Paint</p>'+
            //                 '</span>'+
            //                 '<span class="col-2">'+
            //                 '0'+
            //                 '</span>'+
            //             '</span>' +
            //             '<span class="row">'+  
            //                 '<span class="col-10">'+
            //                 '<p> <span class="icon-cir"> &#9679 </span> Total Blocking Time</p>'+
            //                 '</span>'+
            //                 '<span class="col-2">'+
            //                 '0'+
            //                 '</span>'+
            //             '</span>' +
            //             '<span class="row">'+  
            //             '<span class="col-10">'+
            //             '<p> <span class="icon-cir"> &#9679 </span> Cummulative Layout Shift</p>'+
            //             '</span>'+
            //             '<span class="col-2">'+
            //                 '0'+
            //                 '</span>'+
            //         '</span>' +

            //             '</div>'
            //   );
            // }
          }
      },
      series: [
        {
          name: "series-1",
          data: this.props.graphData,
        }
      ]
    };
  }

  render() {
      console.log(this.series,'rrr')
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              tooltip={this.state.tooltip}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraphComponent;
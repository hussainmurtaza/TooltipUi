import React from 'react'
import Graph from './GraghComponent'
class TooltipComponent extends React.Component{
    
     tool =() =>
             {
              return(
                        '<div class="main">' + 
                        '<span class="row">' +
                        '<span class="col-7">' +
                        'Performance Score' +
                        '</span>' +
                        '<span class="col-4">' +
                            '12-04-12'+    
                        '</span>' +
                        '</span>' +
                        '<span class="row">'+ 
                        '<p class="col-12">'+
                        '<span class="tre">' +
                        // series[seriesIndex][dataPointIndex]+
                        '</span>' +
                        '/50'+ 
                        '</p>'+
                        '<span>' +
                        
                        '</span>' +
                        '</span>'+
                        '<span class="row">'+  
                        '</span>' +
                        '<span class="row">'+  
                            '<span class="col-10">'+
                            '<p> <span class="icon-tri"> &#9650 </span> Largest Contentful Paint</p>'+
                            '</span>'+
                            '<span class="col-2">'+
                            '0'+
                            '</span>'+
                        '</span>' +
                        '<span class="row">'+  
                            '<span class="col-10">'+
                            '<p> <span class="icon-cir"> &#9679 </span> Total Blocking Time</p>'+
                            '</span>'+
                            '<span class="col-2">'+
                            '0'+
                            '</span>'+
                        '</span>' +
                        '<span class="row">'+  
                        '<span class="col-10">'+
                        '<p> <span class="icon-cir"> &#9679 </span> Cummulative Layout Shift</p>'+
                        '</span>'+
                        '<span class="col-2">'+
                            '0'+
                            '</span>'+
                    '</span>' +

                        '</div>'
              );
            }
        
    render(){
        console.log(this.props.cout,'vvv')
        return(
            <Graph tip = {this.tool}/>
        );
    }
}

export default TooltipComponent
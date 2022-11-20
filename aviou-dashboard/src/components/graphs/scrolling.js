import React from 'react';
import './graphs.css';
import Chart from 'chart.js/auto';

class Scrolling extends React.Component {

    componentDidMount() {
        console.log("session mount");
        var sd = document.getElementById("scrolling_content");
        sd.innerHTML = "";
        
        var canvasElement = document.createElement("canvas");
        canvasElement.id = "scrolling_canvas";
        sd.appendChild(canvasElement);
        new Chart(
            canvasElement, {
                type: 'bar',
                data: {
                    labels: this.props.data.map(row => row.scrolled),
                    datasets: [{
                        label: 'Scrolling',
                        data: this.props.data.map(row => row.sessions)
                    }]
                }
            }
        );

    }
    render() {
        return ( 
            <div className = "scrolling" id="scrolling_content" >
            
            </div>
        );
    }
}

export default Scrolling;
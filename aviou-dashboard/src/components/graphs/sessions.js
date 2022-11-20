import React from 'react';
import './graphs.css';
import Chart from 'chart.js/auto';

class Sessions extends React.Component {

    componentDidMount() {
        console.log("session mount");
        var sd = document.getElementById("sessions_content");
        sd.innerHTML = "";
        
        var canvasElement = document.createElement("canvas");
        canvasElement.id = "sessions_canvas";
        sd.appendChild(canvasElement);
        new Chart(
            canvasElement, {
                type: 'bar',
                data: {
                    labels: this.props.data.map(row => row.date),
                    datasets: [{
                        label: 'New user sessions',
                        data: this.props.data.map(row => row.sessions)
                    }]
                }
            }
        );

    }
    render() {
        return ( 
            <div className = "sessions" id="sessions_content" >
            
            </div>
        );
    }
}

export default Sessions;
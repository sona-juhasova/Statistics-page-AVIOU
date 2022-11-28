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
                        data: this.props.data.map(row => row.sessions),
                        backgroundColor: '#4dc1e1',
                    }]
                }
            }
        );

    }
    render() {
        return ( 
            <div className='graph-wrapper'>
                <h3>New user session</h3>
                <p>The graph displays amount of new user sessions during a certain period of time</p>


            <div className = "sessions" id="sessions_content" >
            
            </div>

 

</div>

        );
    }
}

export default Sessions;
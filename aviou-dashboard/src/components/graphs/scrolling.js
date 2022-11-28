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
                type: 'line',
                data: {
                    labels: this.props.data.map(row => row.scrolled),
                    datasets: [{
                        label: 'Scrolling',
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
        <h3>Scrolling</h3>
        <p>The graphs displays how many percent of users scrolled every 10% of the catalogue</p>


            <div className = "scrolling" id="scrolling_content" >
            
            </div>

 
</div>
        );
    }
}

export default Scrolling;
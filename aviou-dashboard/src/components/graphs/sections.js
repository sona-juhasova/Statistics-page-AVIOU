import React from 'react';
import './graphs.css';
import Chart from 'chart.js/auto';

class Sections extends React.Component {

    componentDidMount() {
        console.log("section mount");
        var sd = document.getElementById("sections_content");
        sd.innerHTML = "";
        
        var canvasElement = document.createElement("canvas");
        canvasElement.id = "sections_canvas";
        sd.appendChild(canvasElement);
        new Chart(
            canvasElement, {
                type: 'bar',
                data: {
                    labels: this.props.data.map(row => row.section),
                    datasets: [{
                        label: 'Section views',
                        data: this.props.data.map(row => row.views),
                        backgroundColor: '#4dc1e1',
                    }]
                }
            }
        );

    }
    render() {
        return ( 
            <div className='graph-wrapper'>
                <h3>Section views</h3>
                <p>The graphs displays how many percent of users viewed each section</p>


            <div className = "sections" id="sections_content" >
            
            </div>


            <p>graph summary</p>

</div>
        );
    }
}

export default Sections;
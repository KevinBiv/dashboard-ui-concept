import React from 'react';
import './styles.css';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


class BottomMainSection extends React.Component {
    render() {
       
        const data = {
            labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan", "11 Jan", "12 Jan"],
            datasets: [{
                label: '# of votes',
                data: [6, 2, 3, 4, 10, 8, 12]
            }]
        }

        return(
            <div className="bottom-container">
                
                {/* <div className="upper-text">
                    <h1>Daily Learning Activity</h1>
                    <p>21 Nov 21 - 28 Nov 21</p>
                    <h1>Weekly <Status></Status></h1>
                </div> */}

                <div className="charts">

                    {/* <Doughnut data={data} /> */}

                    <div className="line-chart">
                        <Line data={data} options={{ maintainAspectRatio: false }} />
                    </div>

                    <div className="bar-chart">
                        <Bar data={data} options={{ maintainAspectRatio: false }} />
                    </div>

                </div>

            </div>
        )
    }
}

export default BottomMainSection;
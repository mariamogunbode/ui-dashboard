import { Icon } from "@iconify/react";
import { Chart, registerables } from 'chart.js';
import { Line, Doughnut, Bar  } from 'react-chartjs-2';
import { LineChartData, LineChartOptions, lineShadowPlugin, pieChartData, barChartData, barChartOptions} from "../data/lineCharts";
import './Charts.css'

export function Charts(){
  Chart.register(...registerables);
  const { chartData, pieChartOption,centralIndicatorPlugin } = pieChartData[0];
  Chart.register(centralIndicatorPlugin );

 /* const chartData = pieChartData[0].chartData;
  const chartOptions = pieChartData[0].pieChartOption; */

  

  return (
    <>
      <div className="profile-search">
        <p className="profile-overview">Chart</p>
        <div className="search-bar-icon">
          <input type="text" placeholder="Search anything here"
            className="search-bar" />
          <Icon className="search-icon"
            icon="mdi:search" />
        </div>
      </div>
      <div className="page-use-chart-container">
        <p className="charts">Charts</p>
        <p className="page-use">Charts on this page use Chart</p>
      </div>
      <div className="four-chart-container">
      <div className="line-chart">
      <h3 className="lines">Line Chart</h3>
      <Line
      data={LineChartData}
      options={LineChartOptions}
      plugins={[lineShadowPlugin]}
      />
      </div>
      <div className="pie-chart">
        <div className="gender-question-container">
          <p className="gender">Gender</p>
          <div className="gender-question">?</div>
        </div>
        <Doughnut
      data={
        {
        labels: chartData.labels,
        datasets: [
          {
            label: 'Pie Chart',
            data: chartData.data,
            backgroundColor: pieChartOption.datasets[0].backgroundColor,
            borderWidth: pieChartOption.datasets[0].borderWidth,
            borderRadius: pieChartOption.datasets[0].borderRadius,
          },
        ],
      }}
      options={
        {
        responsive: pieChartOption.responsive,
        maintainAspectRatio: pieChartOption.maintainAspectRatio,
        plugins: {
      ...pieChartOption.plugins,
      indicator: {},
      datalabels: {
        ...pieChartOption.plugins.datalabels,
       formatter: (value, context) => {
                    return chartData.labelData[context.dataIndex].value;
                  },
      },
    },
        rotation: pieChartOption.datasets[0].rotation,
        circumference: pieChartOption.datasets[0].circumference,
        cutout: pieChartOption.datasets[0].cutout,
      }}
      plugins={[centralIndicatorPlugin]}
    />
    <div className="men-women-div-container">
      <div className="men-container">
        <div className="men-empty-div"></div>
        <div>
          <p className="thirty-five">35%</p>
          <p className="men">Men</p>
        </div>
      </div>
      <div className="women-container">
        <div className="women-empty-div"></div>
        <div>
          <p className="fourty-five">45%</p>
          <p className="women">Women</p>
        </div>
      </div>
    </div>
      </div>
      <div className="bar-chart-container">
        
        <p className="bars">Bar Chart</p>
        <p className="dollar-number">$860,472.29</p>
        <div className="bar-chart">
        <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
      <div className="line-chart-gradient">
        </div>
      </div>
    </>
  );
}
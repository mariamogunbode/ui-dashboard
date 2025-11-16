const HIGHLIGHT_INDEX = 2;
const incomeData =[240, 180, 320, 300, 180];
const outcomeData = [170, 210, 120, 200, 120, ];
const incomePointRadius = incomeData.map((_, index) => index === HIGHLIGHT_INDEX ? 8: 0);
const incomePointBackgroundColor = incomeData.map((_, index) => index === HIGHLIGHT_INDEX ? { backgroundColor: 'red', borderColor: 'white', borderWidth: 3 } : { backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 0 });


export const FollowerChart = () => {
  const data4 = {
    labels: ['25.02', '26.02', '27.02', '28.02', '29.02'],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointBackgroundColor: incomePointBackgroundColor.map(point => point.backgroundColor),
        pointBorderColor: incomePointBackgroundColor.map(point => point.borderColor),
        pointBorderWidth: incomePointBackgroundColor.map(point => point.borderWidth),
        pointRadius: incomePointRadius,
        pointHoverRadius: 8,
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Outcome',
        data: outcomeData,
        borderColor: 'purple',
        pointBackgroundColor: 'purple',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        yAxisID: 'y',
      },
    ],
  };
  const options4 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            mode: 'vertical',
            value: data4.labels[HIGHLIGHT_INDEX],
            scaleID: 'x',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            borderWidth: 2,
            borderDash: [5, 5],
            drawTime: 'beforeDatasetsDraw'
          }
        }
      }
    },
    scales: {
      x: {
        offset: true,
        ticks: {
          padding: 20,
        },
        border: {
          display: false,
        },
      grid: {
        display: false,
        drawOnChartArea: true,
      },
    },
      y: {
        
        border: {
          display: false,
        },
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 350,
        ticks: {
          padding: 20,
          callback: function(value) {
            //if(value === 400) return '';
           if(value === 300) return '500K';
           if(value ===200) return '100K';
           if(value === 100) return '50K'
           if(value === 0) return '0';
          },
          
        },
         grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
      },
      stepSize: 100
    },
  },
  };
  return {
    data4, options4
  }
}


export const ActionsList = [
  {action: 'Profile visits', number: '250'},
  {action: 'Website slicks', number: '115'},
  {action: 'Calls', number: '67'},
  {action: 'Getvdirection', number: '164'},
  {action: 'Emails', number: '170'}
]
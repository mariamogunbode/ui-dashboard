export const DashedLineChart = () => {
  const data5 = {
    labels: ['25.02', '', '26.02', '', '27.02', '', '28.02', '', '29.02'],
    datasets: [
      {
        label: 'red line',
        data: [0, 70, 230, 120, 110, 90, 200, 200, 0],
        borderColor: 'red',
        borderWidth: 1,
        borderDash: [5, 5],
        tension: 0.6,
        pointRadius: 0,
      },
      {
        label: 'Blue line1',
        data: [0, 170,70, 90, 60, 140, 150, 40, 10],
        borderColor: 'blue',
        borderWidth: 1,
        borderDash: [5, 5],
        tension: 0.6,
        pointRadius: 0,
       },
       {
        label: 'Blue line2',
        data: [0,210,110, 120,0,160,60,10, 0],
        borderColor: 'blue',
        borderWidth: 1,
        borderDash: [5, 5],
        tension: 0.6,
        pointRadius: 0
       },
    ],
  };

  const options5 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
         border: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 300,
        ticks: {
          padding: 20,
          callback: function(value) {
            if(value === 300) return '250';
            if(value === 200) return '150';
            if(value === 100) return '50';
            if(value === 0) return '0';
          },
          stepSize: 100,
        },
        grid: {
          borderDash: [5, 5],
        },
         border: {
          display: false,
        },
      },
    },
  };
  return {data5, options5}

}



const Light_Purple = 'rgba(212, 54, 205, 1)';
const Deep_Purple = 'purple';

export const PurpleBarChart = () => {
  const data6 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Best time',
        data: [80, 25, 50, 35, 95, 20, 70],
        backgroundColor: [
          Light_Purple,
          Light_Purple,
          Light_Purple,
          Light_Purple,
          Deep_Purple,
          Light_Purple,
          Light_Purple,
        ],
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 25,
      },
    ],
  };

  const options6 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        categoryPercentage:0.4,
        barPercentage: 0.4,
      },
    },
  };
  return {data6, options6}
}
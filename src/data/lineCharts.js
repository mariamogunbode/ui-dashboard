const salesData = [
  0,15,14, 23,18,24,17,18,13,13,18,9
];
const labels = [
  '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '200', '300', '400', '500'
];

export const LineChartData = {
  labels: labels,
  datasets: [
    {
      label: 'sales',
      data: salesData,
      borderColor: 'purple',
      tension: 0.5,
      fill: false,
      pointRadius: 0,
      pointBackgroundColor: 'purple',
      pointBorderColor: '#fff',
      pointHoverRadius: 5,
    },
  ]
};

export const lineShadowPlugin = {
  id: 'lineShadow',
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    const originalStroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 5;
      originalStroke.apply(this, arguments);
      ctx.restore();
    };
  },
  afterDraw: (chart) => {
    const { ctx } = chart;
    ctx.restore();
  }
}

export const LineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 10,
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
       ticks: {
        padding: 30,
        color: '#6c757d',
        autoSkip: false,
        },
      grid: {
        display: false,
        drawTicks: false,
        color: 'rgb(0, 0, 0, 0.1)',
      },
      border: {
        display: false
      }
    },
    y: {
      min: 10,
      max: 35,
      ticks: {
        stepSize: 5,
      callback: function(value) {
          if (value % 5 === 0) {
            return `${value} to ${value + 5}`;
          }
        },
      color: '#6c757d'
    },
      grid: {
       borderDash: [5, 5],
        color: 'rgb(0, 0, 0, 0.1)',
      },
    },
  },
};


const purpleMen = '#aa1da3ff';
const purpleWomen ='#e85fecff';



export const pieChartData = [
  {
    id: 'gender-distribution',
    title:'Pie Chart',
    chartData: {
      data: [45,35],
      labels: ['Men', 'Women'],
      labelData: [
        {value: '45%', text: 'Men', color: purpleMen },
        {value: '35%', text: 'Women', color: purpleWomen},
      ],
    },


    pieChartOption: {
      responsive: true,
      maintainAspectRatio: true,
      datasets: [
        {
          backgroundColor: [purpleMen, purpleWomen],
          borderWidth: 2,
          borderRadius: 15,
          rotation: -90,
          circumference: 180,
          layout: {
            padding: 10
          },
          cutout: '80%',
        },
      ],
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: true,
          formatter: (value, context) => {
            return (context.dataIndex === 0 || context.dataIndex === 1) ? `${value}%` : ';'
          },
          color: 'white',
            font: {weight: 'bold', size: 14},
            anchor: 'center',
        },
      }
    },

 centralIndicatorPlugin: {
  id: 'centralIndicatorPlugin',
  afterDraw: (chart) => {
    if (chart.data.datasets.length === 0 || chart.data.datasets[0].data.length === 0) {
      return;
    }
    const { ctx, chartArea } = chart;
    const meta = chart.getDatasetMeta(0);
    const arc = meta.data[0];
    if (!arc) return;
    const center = {
      x: (chartArea.left + chartArea.right) / 2,
      y: (chartArea.top + chartArea.bottom) / 2
    };
    const radius = (arc.outerRadius + arc.innerRadius) / 2;
    const position = 0.9;
    const midpointAngle = (arc.startAngle + arc.endAngle - arc.startAngle) * position;
    const x = center.x + Math.cos(midpointAngle) * radius / 2;
    const y = center.y + Math.sin(midpointAngle) * radius / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.restore();
  }
}

  },
]

  /*export const IndicatorPlugin = {
  id: 'indicator',
  afterDraw: (chart) => {
    if (chart.config.type !== 'doughnut') {
      return;
    }
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    if (!meta.data.length) return;
    const arcElement = meta.data[0];
    const center = arcElement.getCenterPoint();
    const radius = (arcElement.innerRadius + arcElement.outerRadius) / 2;
    const currentValue = chart.data.datasets[0].data[0]; // Define the value here
    if (typeof currentValue !== 'number') return;
    const midpointAngle = (arcElement.startAngle + arcElement.endAngle) / 2;
    const x = center.x + radius * Math.cos(midpointAngle);
    const y = center.y + radius * Math.sin(midpointAngle);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = '#6a1b9a';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  },
};*/


export const barChartData = 
{
    labels: ['1Nov', '', '', '', '', '', ''],
    datasets: [
       {
        label: 'Base Sales',
        data: [1100, 600, 1000, 1000, 1800, 900, 1000, 1200],
        backgroundColor: 'purple',
        barThickness: 25,
      },
      {
        label: 'Additional sales',
        data: [1000, 1200, 2000, 1800, 1000, 1500, 1200, 2000],
        backgroundColor: 'rgb(228, 51, 235)',
        barThickness: 25,
      }
    ]
};

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
    stacked: true,
    grid: {display: false, drawBorder: false}
  },
  y: {
    stacked : true,
    max: 3000,
    grid: {
      color: 'rgb(0, 0, 0, 0.1)',
      drawBorder: false
    },
    ticks: {
      callback: (value) => {
        return value / 1000 + 'k';
      },
      stepSize: 1000,
      padding: 10
    }
  }
  },
  plugins: {
    legend: {display: false},
    tooltip: {enabled: false}
  }
};
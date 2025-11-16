 export const SalesChartData = () =>
   {
    const data = {
  labels: ['K', 'image1', 'image2', 'S', 'image3', 'image4', 'C', 'image5', 'image6', 'L', 'image7', 'image8', 'P', 'image9', 'image10', 'R'],
  datasets: [
    {
      label: 'Sales Closed',
      data: [180, 220, 150, 95, 50, 115, 185, 90, 105, 185, 215, 180, 230, 290, 195, 310],
      backgroundColor: 'rgba(150, 100, 250, 0.6)',
      borderRadius: 5,
      borderSkipped: false,
      barThickness: 5,
    },
  ],
 };

 const images = {
  image1: 'images/image1.jpg',
  image2: 'images/image2.jpg',
  image3: 'images/image3.jpg',
  image4: 'images/image4.jpg',
  image5: 'images/image5.jpg',
  image6: 'images/image1.jpg',
  image7: 'images/image2.jpg',
  image8: 'images/image3.jpg',
  image9: 'images/image4.jpg',
  image10: 'images/image5.jpg',
 };

 const imagePlugin = {
    id: 'imagePlugin',
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      chart.data.labels.forEach((label, index) => {
        if (label.startsWith('image')) {
          const x = chart.scales.x.getPixelForTick(index);
          const y = chart.scales.x.bottom + 10;
          const img = new Image();
          img.src = images[label];
          img.onload = () => {
            ctx.drawImage(img, x - 10, y, 20, 20);
          };
        }
      });
    },
  };


  const purplePointPlugin = {
  id: 'purpleOverlay',
  afterDraw: (chart) => {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    const options = chart.options.plugins.purplePointPlugin;
    const circleRadius = options.circleRadius || 5;
    const borderWidth = options.borderWidth || 2;

    ctx.save();
    meta.data.forEach((bar) => {
      const x_pos = bar.x;
      const y_pos = bar.y;
      ctx.fillStyle = options.circleColor || '#663399';
      ctx.strokeStyle = options.borderColor || '#FFFFFF';
      ctx.lineWidth = borderWidth;
      ctx.beginPath();
      ctx.arc(x_pos, y_pos, circleRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke(); // Add this line to draw the border
    });
    ctx.restore();
  },
}; 


 const options = {
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
    purplePointPlugin: {
      circleColor: '#663399',
      borderColor: '#FFFFFF',
      circleRadius: 14,
      borderWidth: 10,
    }
  },
  scales: {
    x: {
     
      grid: {
        display: false,
        drawTicks: false
      },
      ticks: {
        callback: (value, index) => {
            const label = data.labels[index];
            if (!label.startsWith('image')) {
              return label;
            }
            return '';
          },
        display: true,
        color: '#888',
        font: {
          size: 10,
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 300,
      ticks: {
        stepSize: 100,
        color: '#888',
        font: {
          size: 10,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.3)',
        borderDash: [5, 5],
        drawTicks: true,
        border: {
          dispay: false
        }
      },
    },
  },
};
  return { data, options, purplePointPlugin, imagePlugin};
};
 

const labels = [ '1 Nov', '', '', '', '', '20 Nov'];
const dataset1Data =[ 1700, 2100, 1800, 2900, 1900, 300];
const dataset2Data = [ 500, 1500, 1000, 400, 500, 600];

export const paymentBarData =  () => {
  const data2 = {
  labels,
  datasets: [
    {
      label: 'Collected Payments',
      data: dataset1Data,
      backgroundColor: '#663399',
      stack: 0,
       borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 15,
          bottomRight: 15,
        },
        
      borderSkipped: false,
    },
    {
      label: 'Pending Payments',
      data: dataset2Data,
      backgroundColor: 'rgba(150, 100, 250, 0.6)',
      stack: 0,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 15,
        bottomRight: 15,
      },
      borderSkipped: false,
      
   },
  ],
  };

  
  const options2  = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
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
        stacked: false,
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 3000,
        ticks: {
          callback: function(value) {
            if ( value === 3000) return '$8';
            if ( value === 2000) return '$2';
            if ( value === 1000) return '$9';
            if ( value === 0) return '0';
          },
          stepSize: 1000,
        },
        grid: {
          borderDash: [5, 5],
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };
   return {data2, options2}
};

const labels3 = ['5 Nov', '', '', '', '', '', ''];
 const dataset1 = [1000, 400,700,700,1500,600,1000];
 const dataset2 = [1100, 900, 1100, 700, 500,400,900];
 const dataset3 = [300, 800,1100,800,300,600,1100];
export const loanBarData = () => {
 const data3 = {
  labels: labels3,
  datasets: [
  {
    label: 'Loan',
    data: dataset1,
    stack: 0,
    backgroundColor: '#663399',
    barThickness: 30,
    borderSkipped: false,
  },
  {
    label: 'Loan Payment',
    data: dataset2,
    stack: 0,
    backgroundColor: 'rgba(150, 100, 250, 0.6)',
    barThickness: 30,
    borderSkipped: false,
  },
  {
    label: 'Loan Income',
    data: dataset3,
    stack: 0,
    backgroundColor: 'rgba(75, 10, 112, 0.6)',
    barThickness: 30,
    borderSkipped: false,
    borderRadius: {
      topLeft: 10,
      topRight: 10,
    },
  },
],
}

 const options3 = {
  responsive: true,
  maintainRatioAspect: false,
   plugins: {
      legend: {
        display: false
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
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 3000,
        ticks: {
          callback: function(value) {
            if ( value === 3000) return '3k';
            if ( value === 2000) return '2k';
            if ( value === 1000) return '1k';
            if ( value === 0) return '0';
          },
        },
        stepSize: 1000
 },
    },
  };
  return { data3, options3}
};
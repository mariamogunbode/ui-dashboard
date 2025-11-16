export const DoubleDataBar = () => {
  const data7 = {
    labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65-74+'],
    datasets: [
      {
        label: 'women',
        data: [50, 15, 20, 30, 60, 10, 15],
        backgroundColor: 'purple',
        borderRadius: 10,
        barThickness: 10,
      },
      {
        label: 'men',
        data: [20, 40, 35, 32, 50, 45, 40],
        backgroundColor: 'rgba(212, 54, 205, 1)',
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  };

  const option7 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
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
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    dataset: {
    bar: {
      barPercentage: 0.4,
      categoryPercentage: 0.8,
    },
  },
  };

  return { data7, option7 };
};

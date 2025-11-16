const PurpleColor = '#7a31d9';
const dataPoints = [50, 150, 300,110,200, 700,220, 350, 100,150,350, 390];

export const PurplelineData = () => {
  const data = {
    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11', 'day12'],
    datasets: [
      {
        data: dataPoints,
        borderColor: PurpleColor,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  return {
    data, options
  }
}


const GreenColor = 'rgba(22, 190, 87, 1)';
const dataPoints2 = [100, 120, 200,160,700,300,500, 200, 300,260,400];

export const GreenlineData = () => {
  const data2 = {
    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11'],
    datasets: [
      {
        data: dataPoints2,
        borderColor: GreenColor,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  return {
    data2, options2
  }
}



const BlueColor = '#0a95b8ff';
const dataPoints3 = [100, 120, 200,160, 300, 700,300,700, 200, 300,260];

export const BluelineData = () => {
  const data3 = {
    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11'],
    datasets: [
      {
        data: dataPoints3,
        borderColor: BlueColor,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options3 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  return {
    data3, options3
  }
}
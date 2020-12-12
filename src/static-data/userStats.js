const backgroundColors = ["#6f42c1", "#34bfa3", "#ffb822", "#ffb822", "#f4516c"];

const userStats = {
  type: 'bar',
  data: {
    labels: ["Registered", "Connected", "Transacting", "Non Transacting", "Out Of Reach"],
    datasets: [{
      yAxisID: 'B',
      label: 'Total KPI',
      backgroundColor: '#ffffff',
      strokeColor: "#ffffff",
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
      radius: 0,
      data: [3000, 2000, 1500, 500, 1000],
      fill: false,
      type: 'line'
    },
      {
        yAxisID: 'A',
        label: 'Users',
        backgroundColor: backgroundColors,
        radius: 0,
        borderWidth: 0,
        data: [8546, 5124,1935,3210,3377],
        fill: true
      },
      {
        yAxisID: 'C',
        label: 'KPI(%)',
        backgroundColor: '#ffffff',
        strokeColor: "#ffffff",
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
        radius: 0,
        data: [284.87, 427.30, 569.73, 1,709.20, 854.60],
        fill: false,
        type: 'line'
      }]
  },
  options: {
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: ''
        },
        ticks: {
          padding: 10
        }
      }],
      yAxes: [{
        id: 'A',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Users'
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (label, index, labels) {
            if (Math.floor(label) === label) {
              return label;
            }
          },
        }
      },
        {
          id: 'B',
          position: 'left',
          display: false,
          scaleLabel: {
            display: true,
            labelString: 'Users'
          },
          ticks: {
            beginAtZero: true,
            userCallback: function (label, index, labels) {
              if (Math.floor(label) === label) {
                return label;
              }
            }
          }
        },
        {
          id: 'C',
          position: 'right',
          display: false,
          scaleLabel: {
            display: true,
            labelString: 'KPI Percentage(%)'
          },
          ticks: {
            beginAtZero: true,
            userCallback: function (label, index, labels) {
              if (Math.floor(label) === label) {
                return label + '%';
              }
            },
            suggestedMin: 0,
            suggestedMax: 100,
          }
        }]
    },
    responsive: false,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Over all'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      display: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    barRadius: 0,
    elements: {
      line: {
      },
      point: {

      }
    }
  }
};

export default userStats;

const transactionPerDay = {
  type: "line",
  data: {
    labels: ["Jan-1", "Jan-2", "Jan-3", "Jan-4", "Jan-5", "Jan-6", "Jan-7", "Jan-8", "Jan-9", "Jan-10", "Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20"],
    datasets: [
      {
        label: "BDT",
        data: [2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700],
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBorderColor: '#F4516C',
        borderColor: '#F4516C',
        fill: 'none',
        backgroundColor: 'rgba(244,81,108,0.25)'
      },
      {
        label: "BDT",
        data: [2253, 2350, 3533, 2252, 2854, 2520, 3191, 2185, 2186, 1800, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 2930, 3191, 2185],
        borderWidth: 1,
        borderColor: '#FFB822',
        backgroundColor: 'rgba(255,184,34,0.25)'
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          padding: 10
        }
      },
      yAxes: {
        position: 'left',
        display: true,
        scaleLabel: {
          display: true,
          labelString: '(BDT)'
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (label, index, labels) {
            if (Math.floor(label) === label) {
              return label;
            }
          },
        }
      }
    },
  }
};

export default transactionPerDay;

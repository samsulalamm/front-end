const salesPerDay = {
  type: "line",
  data: {
    labels: ["Jan-1", "Jan-2", "Jan-3", "Jan-4", "Jan-5", "Jan-6", "Jan-7", "Jan-8", "Jan-9", "Jan-10", "Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20"],
    datasets: [
      {
        label: "BDT",
        data: [2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700],
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBorderColor: '#6F42C1',
        borderColor: '#6F42C1',
        fill: 'none',
        backgroundColor: 'rgba(111,66,193,0.25)'
      },
      {
        label: "BDT",
        data: [2186, 2167, 3191, 2185, 2186, 2520, 3191, 2185, 2186, 1800, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 2930, 3191, 2185],
        borderWidth: 1,
        borderColor: '#34BFA3',
        backgroundColor: 'rgba(52,191,163,0.25)'
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

export default salesPerDay;

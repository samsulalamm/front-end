const visitorsData = {
  type: "line",
  data: {
    labels: ["Jan-1", "Jan-2", "Jan-3", "Jan-4", "Jan-5", "Jan-6", "Jan-7", "Jan-8", "Jan-9", "Jan-10", "Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22", "Jan-23", "Jan-24", "Jan-25", "Jan-26", "Jan-27", "Jan-28", "Jan-29", "Jan-30", "Jan-31"],
    datasets: [
      {
        label: "Order",
        data: [230, 223, 254, 236, 242, 225, 228, 256, 235, 222, 221, 245, 235, 231, 224, 242, 222, 212, 225, 195, 222, 245, 235, 231, 224, 242, 222, 212, 225, 252, 215],
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBorderColor: '#17a2b8',
        borderColor: '#17a2b8',
        // fill: 'none',
        backgroundColor: 'rgba(23,162,184,0.25)'
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

export default visitorsData;

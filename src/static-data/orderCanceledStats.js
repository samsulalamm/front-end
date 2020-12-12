const orderCanceledStats = {
  type: "bar",
  data: {
    labels: ["Jan-1", "Jan-2", "Jan-3", "Jan-4", "Jan-5", "Jan-6", "Jan-7", "Jan-8", "Jan-9", "Jan-10", "Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22", "Jan-23", "Jan-24", "Jan-25", "Jan-26", "Jan-27", "Jan-28", "Jan-29", "Jan-30", "Jan-31"],
    datasets: [
      {
        label: "Order",
        data: [230, 123, 254, 236, 242, 185, 198, 256, 235, 222, 121, 245, 235, 231, 224, 242, 222, 212, 225, 195, 121, 245, 235, 231, 224, 242, 222, 212, 225, 195, 195],
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBorderColor: '#34BFA3',
        borderColor: '#34BFA3',
        // fill: 'none',
        backgroundColor: '#34BFA3'
      },
      {
        label: "Canceled",
        data: [0, 60, 21, 0, 0, 0, 15, 7, 150, 11, 10, 12, 1, 12, 3, 5, 7, 8, 5, 3, 7, 7, 5, 6, 7, 4, 5, 3, 8, 5, 80],
        borderWidth: 1,
        borderColor: '#F4516C',
        backgroundColor: '#F4516C'
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

export default orderCanceledStats;

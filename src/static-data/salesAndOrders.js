const salesAndOrders = {
  type: "line",
  data: {
    labels: ["Jan-1", "Jan-2", "Jan-3", "Jan-4", "Jan-5", "Jan-6", "Jan-7", "Jan-8", "Jan-9", "Jan-10", "Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22", "Jan-23", "Jan-24", "Jan-25", "Jan-26", "Jan-27", "Jan-28", "Jan-29", "Jan-30", "Jan-31"],
    datasets: [
      {
        yAxisID: 'A',
        label: "Sales",
        data: [2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191, 2185, 2186, 1167, 3191],
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBorderColor: '#FF9B0D',
        borderColor: '#FF9B0D',
        fill: 'none',
        backgroundColor: 'rgba(255,155,13,0.25)'
      },
      {
        yAxisID: 'B',
        label: "Orders",
        data: [60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50, 98, 60, 80, 50],
        borderWidth: 1,
        pointBorderColor: '#5E6CC5',
        borderColor: '#5E6CC5',
        backgroundColor: 'rgba(94,108,197,0.25)'
      }
    ]
  },
  options: {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          padding: 10
        }
      }],
      yAxes: [{
        id: 'A',
        position: 'left',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Sales(BDT)'
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (label, index, labels) {
            if (Math.floor(label) === label) {
              return label;
            }
          },
        }
      }, {
        id: 'B',
        position: 'right',
        display: true,
        stacked: false,
        scaleLabel: {
          display: true,
          labelString: 'Orders(number)'
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (label, index, labels) {
            if (Math.floor(label) === label) {
              return label;
            }
          },
        }
      }]
    },
  }
};

export default salesAndOrders;

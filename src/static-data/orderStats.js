const data = {
  labels: ["New Orders", "Warehouse Left", "On Delivery", "Delivered Orders", "Cancelled Orders"],
  datasets: [{
    label: "Population (millions)",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    data: [2478,5267,734,784,433]
  }]
};

const orderStats = {
  type: 'doughnut',
  data: data,
  options: {
    rotation: -0.7 * Math.PI,
    legend: {
      display: true,
      position: 'right'
    }
  }
}

export default orderStats;

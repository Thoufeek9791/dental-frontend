export const health = {
  chart: {
    height: 180,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  series: [
    {
      color: '#30E7ED',
      data: [20, 40, 85, 25, 50, 30, 50, 20, 50, 40, 30, 20]
    }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

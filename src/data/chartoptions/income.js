export const income = {
  chart: {
    height: 200,
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
      name: 'Market Data',
      color: '#2E37A4',
      data: [45, 60, 75, 51, 42, 42, 30]
    }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  }
};

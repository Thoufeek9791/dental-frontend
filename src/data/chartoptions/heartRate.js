export const heartRate = {
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
      name: 'Health',
      color: '#FF3667',
      data: [20, 20, 85, 35, 60, 30, 20]
    }
  ],
  xaxis: {
    categories: ['0', '1', '2', '3', '4', '5', '6']
  }
};

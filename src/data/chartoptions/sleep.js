export const sleep = {
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
      name: 'Sleep',
      color: '#2E37A4',
      data: [20, 21, 20, 21, 20, 21, 22]
    }
  ],
  xaxis: {
    categories: ['0', '1', '2', '3', '4', '5', '6']
  }
};

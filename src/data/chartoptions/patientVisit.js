export const patientVisit = {
  chart: {
    height: 230,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '15%'
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: 'Male',
      color: '#2E37A4',
      data: [20, 30, 41, 67, 22, 43, 40, 10, 30, 20, 40, 40]
    },
    {
      name: 'Female',
      color: '#00D3C7',
      data: [13, 23, 20, 8, 13, 27, 30, 25, 10, 15, 20, 20]
    }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

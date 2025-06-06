export const pressure = {
  chart: {
    height: 220,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1
  },
  series: [
    {
      name: 'High',
      color: '#2E37A4',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Low',
      color: 'rgba(46, 55, 164, 0.05)',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      }
    }
  }
};

export const patientDepartment = {
  chart: {
    height: 290,
    type: 'donut',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [44, 55, 41, 17],
  labels: ['Neurology', 'Dental Care', 'Gynecology', 'Orthopedic'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  legend: {
    position: 'bottom'
  }
};

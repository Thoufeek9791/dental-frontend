import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Chart = ({ options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartElement = chartRef.current;

    if (chartElement) {
      const chart = new ApexCharts(chartElement, options);

      try {
        chart.render();
      } catch (error) {
        console.error('Error rendering chart:', error);
      }

      return () => {
        chart.destroy();
      };
    }
  }, [options]);

  return <div id="activity-chart" ref={chartRef}></div>;
};

export default Chart;

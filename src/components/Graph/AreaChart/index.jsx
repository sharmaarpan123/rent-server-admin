import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "User Signups",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 90, 100],
        },
      },
      colors: ["#71501a"],
      labels: [],
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: false,
        labels: {
          formatter: (val) => val.toFixed(0),
        },
      },
      legend: {
        horizontalAlign: "left",
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
    },
  });

  useEffect(() => {
    if (data?.graphData && Array.isArray(data.graphData)) {
      // Sort the data by date
      const sortedData = data.graphData.sort((a, b) => new Date(a._id) - new Date(b._id));
      
      const dates = sortedData.map(item => item._id);
      const counts = sortedData.map(item => item.count);

      setChartData(prev => ({
        ...prev,
        series: [
          {
            name: "User Signups",
            data: counts,
          },
        ],
        options: {
          ...prev.options,
          labels: dates,
        },
      }));
    }
  }, [data]);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;

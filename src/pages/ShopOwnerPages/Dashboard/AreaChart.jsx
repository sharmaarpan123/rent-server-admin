import React from "react";
import ReactApexChart from "react-apexcharts";

// Static data for the chart
const staticChartData = [
  { _id: "2024-01-01", count: 12 },
  { _id: "2024-01-02", count: 19 },
  { _id: "2024-01-03", count: 15 },
  { _id: "2024-01-04", count: 22 },
  { _id: "2024-01-05", count: 18 },
  { _id: "2024-01-06", count: 25 },
  { _id: "2024-01-07", count: 28 },
  { _id: "2024-01-08", count: 20 },
  { _id: "2024-01-09", count: 24 },
  { _id: "2024-01-10", count: 30 },
  { _id: "2024-01-11", count: 27 },
  { _id: "2024-01-12", count: 32 },
  { _id: "2024-01-13", count: 29 },
  { _id: "2024-01-14", count: 35 },
  { _id: "2024-01-15", count: 38 },
];

const ShopOwnerAreaChart = () => {
  // Prepare data for the chart
  const sortedData = staticChartData.sort(
    (a, b) => new Date(a._id) - new Date(b._id)
  );

  const dates = sortedData.map((item) => item._id);
  const counts = sortedData.map((item) => item.count);

  const chartData = {
    series: [
      {
        name: "Total Users",
        data: counts,
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
        colors: ["#412800"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#412800",
              opacity: 0.6,
            },
            {
              offset: 50,
              color: "#71501a",
              opacity: 0.3,
            },
            {
              offset: 100,
              color: "#412800",
              opacity: 0.1,
            },
          ],
        },
      },
      colors: ["#412800"],
      labels: dates,
      xaxis: {
        type: "category",
        categories: dates,
        labels: {
          style: {
            colors: "#666",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        opposite: false,
        labels: {
          formatter: (val) => val.toFixed(0),
          style: {
            colors: "#666",
            fontSize: "12px",
          },
        },
      },
      legend: {
        horizontalAlign: "left",
        show: true,
        position: "top",
      },
      tooltip: {
        theme: "light",
        x: {
          format: "dd MMM yyyy",
        },
      },
      grid: {
        borderColor: "#f0f0f0",
        strokeDashArray: 4,
      },
    },
  };

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

export default ShopOwnerAreaChart;


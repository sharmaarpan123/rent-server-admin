import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  // Example values
  const registeredUsers =  400;
  const unregisteredUsers = 602;

  const [chartOptions, setChartOptions] = useState({
    series: [registeredUsers, unregisteredUsers],
    options: {
      chart: {
        type: "pie",
        width: "100%",
      },
      labels: ["Registered Users", "Unregistered Users"],
      colors: ["#ff00bf", "#FFA84A"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: (value) => `${value}`,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
      },
      legend: {
        position: "right",
        labels: {
          colors: "#333",
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        series={chartOptions.series}
        options={chartOptions.options}
        type="pie"
        className="w-100"
      />
    </div>
  );
};

export default PieChart;
